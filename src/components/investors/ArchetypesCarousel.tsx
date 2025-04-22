
import React, { useRef, useEffect, useState } from "react";
import "./ArchetypesCarousel.css";
import BookRecommendationsDialog from "./BookRecommendationsDialog";

interface BookRecommendation {
  title: string;
  author: string;
}

interface ArchetypeData {
  id: number;
  imgSrc: string;
  name: string;
  title: string;
  headerImage?: string;
  headerColor?: string;
  books: BookRecommendation[];
}

const jamesBooks: BookRecommendation[] = [
  { title: "The Art of Racing in the Rain", author: "Garth Stein" },
  { title: "Drive to Survive", author: "Toby Vintcent" },
  { title: "How to Build a Car", author: "Adrian Newey" },
  { title: "Total Competition", author: "Ross Brawn & Adam Parr" },
  { title: "The Mechanic", author: "Marc Priestley" },
  { title: "Winning Is Not Enough", author: "Jackie Stewart" },
  { title: "The Power of Now", author: "Eckhart Tolle" },
  { title: "Mindset", author: "Carol S. Dweck" }
];

const kattyBooks: BookRecommendation[] = [
  { title: "Bad Blood", author: "John Carreyrou" },
  { title: "Educated", author: "Tara Westover" },
  { title: "Becoming", author: "Michelle Obama" },
  { title: "The New Silk Roads", author: "Peter Frankopan" },
  { title: "The Splendid and the Vile", author: "Erik Larson" },
  { title: "A Promised Land", author: "Barack Obama" },
  { title: "The Vanishing Half", author: "Brit Bennett" },
  { title: "Where the Crawdads Sing", author: "Delia Owens" }
];

const jakeBooks: BookRecommendation[] = [
  { title: "High Performance", author: "Jake Humphrey & Prof Damian Hughes" },
  { title: "Legacy", author: "James Kerr" },
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Ego Is the Enemy", author: "Ryan Holiday" },
  { title: "Endure", author: "Alex Hutchinson" },
  { title: "The Chimp Paradox", author: "Prof Steve Peters" },
  { title: "Black Box Thinking", author: "Matthew Syed" },
  { title: "Shoe Dog", author: "Phil Knight" }
];

const harryBooks: BookRecommendation[] = [
  { title: "Explosive Growth", author: "Cliff Lerner" },
  { title: "The Hard Thing About Hard Things", author: "Ben Horowitz" },
  { title: "Zero to One", author: "Peter Thiel and Blake Masters" },
  { title: "The Lean Startup", author: "Eric Ries" },
  { title: "When Breath Becomes Air", author: "Paul Kalanithi" },
  { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
  { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari" },
  { title: "The Innovator's Dilemma", author: "Clayton M. Christensen" },
  { title: "The Art of War", author: "Sun Tzu" }
];

const stevenBooks: BookRecommendation[] = [
  { title: "Shoe Dog", author: "Phil Knight" },
  { title: "Man's Search for Meaning", author: "Viktor E. Frankl" },
  { title: "Becoming", author: "Michelle Obama" },
  { title: "The Courage to Be Disliked", author: "Ichiro Kishimi & Fumitake Koga" },
  { title: "Greenlights", author: "Matthew McConaughey" },
  { title: "Can't Hurt Me", author: "David Goggins" },
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Influence", author: "Robert B. Cialdini" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
  { title: "Daring Greatly", author: "Brené Brown" }
];

const myListBooks: BookRecommendation[] = [
  { title: "Deep Work", author: "Cal Newport" },
  { title: "Digital Minimalism", author: "Cal Newport" },
  { title: "How to Win Friends and Influence People", author: "Dale Carnegie" },
  { title: "Essentialism", author: "Greg McKeown" },
  { title: "The Four Agreements", author: "Don Miguel Ruiz" },
  { title: "The Power of Habit", author: "Charles Duhigg" },
  { title: "Start with Why", author: "Simon Sinek" },
  { title: "Everybody Writes", author: "Ann Handley" }
];

const archetypes: ArchetypeData[] = [
  {
    id: 1,
    imgSrc: "/lovable-uploads/cd3787d9-8b1c-41d7-a0ac-eb6c8f331368.png",
    name: "James Vowles",
    title: "Team Principal @ Williams Racing",
    headerColor: "#00A0DE",
    books: jamesBooks
  }, {
    id: 2,
    imgSrc: "/lovable-uploads/d145f66f-ca4c-4765-ba19-503e508bd56a.png",
    name: "Katty Kay",
    title: "Journalist @ BBC US",
    headerColor: "#BB1919",
    books: kattyBooks
  }, {
    id: 3,
    imgSrc: "/lovable-uploads/cb94ddf7-29a4-46a4-b3d7-888ef998bd8a.png",
    name: "Jake Humphrey",
    title: "Creator @ highperformance",
    headerColor: "#FF5A5F",
    books: jakeBooks
  }, {
    id: 4,
    imgSrc: "/lovable-uploads/c0ba7fa2-66a0-4076-981c-a8f7aea8ec7f.png",
    name: "Harry Stebbings",
    title: "Founder @ 20VC",
    headerImage: "/lovable-uploads/7c8499d6-865d-43de-9753-755c55907dd5.png",
    headerColor: "#94af45",
    books: harryBooks
  }, {
    id: 5,
    imgSrc: "/lovable-uploads/98702e58-a3f6-4d47-8749-ae6e1dc8757c.png",
    name: "Steven Bartlett",
    title: "Founder @ FLIGHTSTORY",
    headerColor: "#6B46C1",
    books: stevenBooks
  }, {
    id: 6,
    imgSrc: "/lovable-uploads/3870710e-fff7-4237-89a0-9d0d01e91158.png",
    name: "Harry Stebbings",
    title: "Founder @ 20VC",
    headerColor: "#94af45",
    books: harryBooks
  }, {
    id: 7,
    imgSrc: "/lovable-uploads/e222bfc7-1fe6-41fb-9e81-d004b180a551.png",
    name: "MY LIST",
    title: "",
    headerColor: "#22C55E",
    books: myListBooks
  }
];

const ArchetypesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = archetypes.length;
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isResetting, setIsResetting] = useState(false);
  const [selectedArchetype, setSelectedArchetype] = useState<ArchetypeData | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setItemsToShow(1);
      else if (window.innerWidth <= 768) setItemsToShow(2);
      else if (window.innerWidth <= 1024) setItemsToShow(3);
      else setItemsToShow(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allItems = [...archetypes, ...archetypes.slice(0, itemsToShow)];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= totalItems - 1) {
        setCurrentIndex(currentIndex + 1);
        setTimeout(() => {
          setIsResetting(true);
          setCurrentIndex(0);
          setTimeout(() => {
            setIsResetting(false);
          }, 50);
        }, 500);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, totalItems]);

  return (
    <div className="w-full py-16" style={{
      background: "linear-gradient(135deg, rgba(229, 222, 255, 0.3) 0%, rgba(253, 225, 211, 0.3) 50%, rgba(242, 252, 226, 0.3) 100%)",
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-newsreader font-semibold text-4xl mb-8 text-black">Book Recommendations From Brilliant Minds</h2>
        
        <div className="carousel-container">
          <div className="carousel-track" style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            transition: isResetting ? 'none' : 'transform 0.5s ease'
          }}>
            {allItems.map((archetype, index) => (
              <div 
                key={`${archetype.id}-${index}`} 
                className="carousel-item"
                onClick={() => setSelectedArchetype(archetype)}
              >
                <div className="aspect-[3/2] w-full relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                  <img src={archetype.imgSrc} alt={`${archetype.name} - ${archetype.title}`} className="carousel-image" />
                  <div className="carousel-caption">
                    <h3 className="font-newsreader text-black">{archetype.name}</h3>
                    {archetype.title && <p className="text-black/80">{archetype.title}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="space-y-2">
            <p className="text-base mb-6 text-black/90 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-base mb-6 text-black/90 font-normal">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-base mb-6 text-black/90 font-normal">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
        
        {selectedArchetype && (
          <BookRecommendationsDialog
            open={!!selectedArchetype}
            onClose={() => setSelectedArchetype(null)}
            personImage={selectedArchetype.imgSrc}
            personName={selectedArchetype.name}
            personTitle={selectedArchetype.title}
            bookRecommendations={selectedArchetype.books}
            headerImage={selectedArchetype.headerImage}
            headerColor={selectedArchetype.headerColor}
          />
        )}
      </div>
    </div>
  );
};

export default ArchetypesCarousel;
