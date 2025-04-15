
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
  { title: "Lost Connections", author: "Johann Hari" },
  { title: "Indistractable", author: "Nir Eyal" },
  { title: "Elon Musk", author: "Ashlee Vance" },
  { title: "The Slight Edge", author: "Jeff Olson" },
  { title: "Outliers", author: "Malcolm Gladwell" },
  { title: "The Social Animal", author: "Elliot Aronson" },
  { title: "The Ride of a Lifetime", author: "Robert Iger" },
  { title: "12 Rules for Life", author: "Jordan Peterson" },
  { title: "The Chimp Paradox", author: "Prof. Steve Peters" },
  { title: "The Psychology of Money", author: "Morgan Housel" },
  { title: "Start with Why", author: "Simon Sinek" },
  { title: "The Coming Wave", author: "Mustafa Suleyman" },
  { title: "The Glucose Goddess Method", author: "Jessie Inchauspé" },
  { title: "Alchemy", author: "Rory Sutherland" },
];

const BookRecommendationsDialog: React.FC<BookRecommendationsDialogProps> = ({
  open,
  onClose,
  personImage,
  personName,
  personTitle,
}) => {
  const bookCovers = useBookCovers(bookRecommendations);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-black/20 p-2 hover:bg-black/40 transition-colors"
        >
          <X className="h-4 w-4 text-white" />
        </button>

        <div className="flex flex-col">
          <div className="relative">
            <img
              src="/lovable-uploads/82516e8c-7793-47c4-b1a9-83599c2e526b.png"
              alt={personName}
              className="w-full h-[400px] object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white">{personName}</h3>
              <p className="text-white/80">{personTitle}</p>
            </div>
          </div>

          <div className="p-6 bg-white">
            <h4 className="text-xl font-semibold mb-4">Book Recommendations</h4>
            <div className="overflow-auto">
              <ScrollArea className="w-full">
                <div className="flex gap-4 pb-4" style={{ minWidth: "min-content" }}>
                  {bookRecommendations.map((book, index) => (
                    <div key={index} className="flex-shrink-0">
                      <div className="w-32 h-48 bg-gray-100 rounded overflow-hidden mb-2">
                        {bookCovers[index].data ? (
                          <img
                            src={bookCovers[index].data}
                            alt={`${book.title} cover`}
                            className="w-full h-full object-cover"
                          />
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookRecommendationsDialog;
