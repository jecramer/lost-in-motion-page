
export interface BookRecommendation {
  title: string;
  author: string;
}

export interface ArchetypeData {
  id: number;
  imgSrc: string;
  name: string;
  title: string;
  headerImage?: string;
  headerColor?: string;
  books: BookRecommendation[];
}

