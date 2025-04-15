
import { useQueries } from "@tanstack/react-query";

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
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          `${book.title} ${book.author}`
        )}&maxResults=1`
      );
      const data: GoogleBooksResponse = await response.json();
      return data.items?.[0]?.volumeInfo?.imageLinks?.thumbnail || null;
    },
  }));

  return useQueries({ queries });
};
