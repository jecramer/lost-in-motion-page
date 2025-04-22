
import { useQueries } from "@tanstack/react-query";
import { toast } from "sonner";

interface GoogleBooksResponse {
  items: {
    volumeInfo: {
      imageLinks?: {
        thumbnail: string;
      };
    };
  }[];
}

export const useBookCovers = (books: { title: string; author: string }[]) => {
  const queries = books.map((book) => ({
    queryKey: ["bookCover", book.title, book.author],
    queryFn: async () => {
      try {
        // First try Google Books API with language preference set to English
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            `${book.title} ${book.author}`
          )}&maxResults=1&langRestrict=en`
        );
        
        if (response.status === 429) {
          toast.error("Google Books API rate limit reached. Using fallback images.");
          // Return a fallback book cover from OpenLibrary
          return `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-M.jpg?default=false`;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: GoogleBooksResponse = await response.json();
        
        // Check if we have results and if there's a thumbnail
        if (data.items?.[0]?.volumeInfo?.imageLinks?.thumbnail) {
          // Replace http with https and ensure we get a higher quality image
          let imageUrl = data.items[0].volumeInfo.imageLinks.thumbnail
            .replace('http://', 'https://')
            .replace('&edge=curl', '');
            
          // Get larger image if possible
          imageUrl = imageUrl.replace('zoom=1', 'zoom=2');
          
          return imageUrl;
        } else {
          // If no thumbnail, try OpenLibrary
          return `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-M.jpg?default=false`;
        }
      } catch (error) {
        console.error(`Error fetching book cover for ${book.title}:`, error);
        // Fallback to OpenLibrary as a backup
        return `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-M.jpg?default=false`;
      }
    },
    retry: 2,
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  }));

  return useQueries({ queries });
};
