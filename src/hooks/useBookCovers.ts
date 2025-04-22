
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
        // First try Google Books API
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            `${book.title} ${book.author}`
          )}&maxResults=1`
        );
        
        if (response.status === 429) {
          toast.error("Google Books API rate limit reached. Using fallback images.");
          // Return a fallback book cover from OpenLibrary
          return `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-M.jpg`;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: GoogleBooksResponse = await response.json();
        return data.items?.[0]?.volumeInfo?.imageLinks?.thumbnail || 
          `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-M.jpg`;
      } catch (error) {
        console.error(`Error fetching book cover for ${book.title}:`, error);
        // Fallback to OpenLibrary as a backup
        return `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-M.jpg`;
      }
    },
    retry: 2,
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  }));

  return useQueries({ queries });
};
