
import { ArchetypeData } from "@/types/books";
import { jamesBooks, kattyBooks, jakeBooks, harryBooks, stevenBooks, myListBooks } from "./bookRecommendations";

export const archetypes: ArchetypeData[] = [
  {
    id: 1,
    imgSrc: "/lovable-uploads/cd3787d9-8b1c-41d7-a0ac-eb6c8f331368.png",
    name: "James Vowles",
    title: "Team Principal @ Williams Racing",
    headerColor: "#00A0DE",
    books: jamesBooks
  },
  {
    id: 2,
    imgSrc: "/lovable-uploads/d145f66f-ca4c-4765-ba19-503e508bd56a.png",
    name: "Katty Kay",
    title: "Journalist @ BBC US",
    headerColor: "#BB1919",
    books: kattyBooks
  },
  {
    id: 3,
    imgSrc: "/lovable-uploads/cb94ddf7-29a4-46a4-b3d7-888ef998bd8a.png",
    name: "Jake Humphrey",
    title: "Creator @ highperformance",
    headerColor: "#FF5A5F",
    headerImage: "/lovable-uploads/68ed200d-7969-486f-804c-98fa83720ced.png", // New header image
    books: jakeBooks
  },
  {
    id: 4,
    imgSrc: "/lovable-uploads/c0ba7fa2-66a0-4076-981c-a8f7aea8ec7f.png",
    name: "Harry Stebbings",
    title: "Founder @ 20VC",
    headerImage: "/lovable-uploads/7c8499d6-865d-43de-9753-755c55907dd5.png",
    headerColor: "#94af45",
    books: harryBooks
  },
  {
    id: 5,
    imgSrc: "/lovable-uploads/98702e58-a3f6-4d47-8749-ae6e1dc8757c.png",
    name: "Steven Bartlett",
    title: "Founder @ FLIGHTSTORY",
    headerColor: "#6B46C1",
    books: stevenBooks
  },
  {
    id: 6,
    imgSrc: "/lovable-uploads/3870710e-fff7-4237-89a0-9d0d01e91158.png",
    name: "Harry Stebbings",
    title: "Founder @ 20VC",
    headerColor: "#94af45",
    books: harryBooks
  },
  {
    id: 7,
    imgSrc: "/lovable-uploads/e222bfc7-1fe6-41fb-9e81-d004b180a551.png",
    name: "MY LIST",
    title: "",
    headerColor: "#22C55E",
    books: myListBooks
  }
];
