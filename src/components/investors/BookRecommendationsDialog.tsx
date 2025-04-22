
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import { useBookCovers } from "@/hooks/useBookCovers";

interface BookRecommendation {
  title: string;
  author: string;
}

interface BookRecommendationsDialogProps {
  open: boolean;
  onClose: () => void;
  personImage: string;
  personName: string;
  personTitle: string;
}

const bookRecommendations: BookRecommendation[] = [
  {
    title: "Explosive Growth",
    author: "Cliff Lerner"
  },
  {
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz"
  },
  {
    title: "Zero to One",
    author: "Peter Thiel and Blake Masters"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries"
  },
  {
    title: "When Breath Becomes Air",
    author: "Paul Kalanithi"
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari"
  },
  {
    title: "The Innovator's Dilemma",
    author: "Clayton M. Christensen"
  },
  {
    title: "The Art of War",
    author: "Sun Tzu"
  }
];

const BookRecommendationsDialog: React.FC<BookRecommendationsDialogProps> = ({
  open,
  onClose,
  personImage,
  personName,
  personTitle
}) => {
  const bookCovers = useBookCovers(bookRecommendations);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <button onClick={onClose} className="absolute right-4 top-4 z-50 rounded-full bg-black/20 p-2 hover:bg-black/40 transition-colors">
          <X className="h-4 w-4 text-white" />
        </button>

        <div className="flex flex-col">
          <div className="relative">
            <img src="/lovable-uploads/7c8499d6-865d-43de-9753-755c55907dd5.png" alt={personName} className="w-[892px] full h-[500px] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white">{personName}</h3>
              <p className="text-white/80">{personTitle}</p>
            </div>
          </div>

          <div className="p-6 bg-[#94af45]">
            <h4 className="text-xl font-semibold mb-4">Harry's Top 10 Favourite Books</h4>
            <ScrollArea className="w-full" style={{ overflow: 'auto' }}>
              <div className="flex gap-4 pb-4 w-max">
                {bookRecommendations.map((book, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div className="w-32 h-48 bg-gray-100 rounded overflow-hidden mb-2">
                      {bookCovers[index].data ? (
                        <img src={bookCovers[index].data} alt={`${book.title} cover`} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gray-200 animate-pulse" />
                      )}
                    </div>
                    <div className="w-32">
                      <p className="font-medium text-sm line-clamp-2">{book.title}</p>
                      <p className="text-xs text-gray-600">{book.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookRecommendationsDialog;
