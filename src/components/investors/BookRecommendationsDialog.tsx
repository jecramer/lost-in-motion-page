
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
  headerImage = "/lovable-uploads/68948e18-2e65-4d14-bbfc-130f24b93acb.png"
}) => {
  const bookCovers = useBookCovers(bookRecommendations);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <button onClick={onClose} className="absolute right-4 top-4 z-50 rounded-full bg-black/20 p-2 hover:bg-black/40 transition-colors">
          <X className="h-4 w-4 text-white" />
        </button>

        <div className="flex flex-col max-h-[90vh]">
          <div className="relative">
            <img 
              src={headerImage} 
              alt={personName} 
              className="w-full h-[400px] object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white">{personName}</h3>
              <p className="text-white/80">{personTitle}</p>
            </div>
          </div>

          <div className="p-6 bg-[#94af45] max-h-[600px] flex flex-col">
            <h4 className="text-xl font-semibold mb-4 text-white">{personName}'s Top {bookRecommendations.length} Favourite Books</h4>
            
            <div className="overflow-y-auto flex-1 pr-4 custom-scrollbar">
              <div className="grid grid-cols-5 gap-6 auto-rows-max">
                {bookRecommendations.map((book, index) => (
                  <div key={index} className="flex-shrink-0 transition-all hover:scale-105">
                    <div className="w-full aspect-[2/3] bg-gray-100 rounded-md overflow-hidden shadow-lg">
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

            <style dangerouslySetInnerHTML={{ __html: `
              .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.3);
                border-radius: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.4);
              }
            `}} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookRecommendationsDialog;
