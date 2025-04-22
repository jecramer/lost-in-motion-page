import React, { useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
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
  bookRecommendations: BookRecommendation[];
  headerImage?: string;
}

const BookRecommendationsDialog: React.FC<BookRecommendationsDialogProps> = ({
  open,
  onClose,
  personImage,
  personName,
  personTitle,
  bookRecommendations,
  headerImage = "/lovable-uploads/7c8499d6-865d-43de-9753-755c55907dd5.png"
}) => {
  const bookCovers = useBookCovers(bookRecommendations);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 300; // Adjust this value to control scroll distance
    const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    scrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <button onClick={onClose} className="absolute right-4 top-4 z-50 rounded-full bg-black/20 p-2 hover:bg-black/40 transition-colors">
          <X className="h-4 w-4 text-white" />
        </button>

        <div className="flex flex-col max-h-[90vh]">
          <div className="relative">
            <img src={headerImage} alt={personName} className="w-[892px] h-[500px] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white">{personName}</h3>
              <p className="text-white/80">{personTitle}</p>
            </div>
          </div>

          <div className="p-6 bg-[#94af45] relative">
            <h4 className="text-xl font-semibold mb-4 text-white">{personName}'s Top {bookRecommendations.length} Favourite Books</h4>
            
            <button 
              onClick={() => handleScroll('left')} 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="h-6 w-6 text-white" />
            </button>
            
            <button 
              onClick={() => handleScroll('right')} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="h-6 w-6 text-white" />
            </button>

            <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 min-w-max">
                {bookRecommendations.map((book, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div className="w-48 h-72 bg-gray-100 rounded-md overflow-hidden">
                      {bookCovers[index].data ? (
                        <img 
                          src={bookCovers[index].data} 
                          alt={`${book.title} cover`} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/200x300?text=No+Cover";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center text-gray-400 text-sm text-center p-2">
                          Loading...
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookRecommendationsDialog;
