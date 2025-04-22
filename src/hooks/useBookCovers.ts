
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
        // Special case for Zero to One book which was showing up in Finnish (KIITORATA)
        if (book.title === "Zero to One" && book.author === "Peter Thiel and Blake Masters") {
          return "https://m.media-amazon.com/images/I/71Xygne8+qL._AC_UF1000,1000_QL80_.jpg";
        }
        
        // Special case for The Courage to Be Disliked which was showing up in Finnish (PUTININ TROLLIT)
        if (book.title === "The Courage to Be Disliked" && book.author === "Ichiro Kishimi & Fumitake Koga") {
          return "https://m.media-amazon.com/images/I/71tBalh1+3L._AC_UF1000,1000_QL80_.jpg";
        }
        
        // Special case for Greenlights which was showing up in Finnish (VIHREÄÄ VALOA)
        if (book.title === "Greenlights" && book.author === "Matthew McConaughey") {
          return "https://m.media-amazon.com/images/I/81zE42gT3xL._AC_UF1000,1000_QL80_.jpg";
        }
        
        // Special case for Becoming by Michelle Obama
        if (book.title === "Becoming" && book.author === "Michelle Obama") {
          return "https://m.media-amazon.com/images/I/81h2gWPTQJL._AC_UF1000,1000_QL80_.jpg";
        }

        // Special case for Can't Hurt Me by David Goggins
        if (book.title === "Can't Hurt Me" && book.author === "David Goggins") {
          return "https://m.media-amazon.com/images/I/81gTRv2HXrL._AC_UF1000,1000_QL80_.jpg";
        }
        
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
