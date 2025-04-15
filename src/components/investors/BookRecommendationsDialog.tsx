
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

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
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-black/20 p-2 hover:bg-black/40 transition-colors"
        >
          <X className="h-4 w-4 text-white" />
        </button>
        
        <div className="grid md:grid-cols-[1fr,400px]">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <img
              src={personImage}
              alt={personName}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white">{personName}</h3>
              <p className="text-white/80">{personTitle}</p>
            </div>
          </div>
          
          <div className="p-6 bg-white">
            <h4 className="text-xl font-semibold mb-4">Book Recommendations</h4>
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-4">
                {bookRecommendations.map((book, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <div className="h-16 w-12 bg-gray-200 rounded flex-shrink-0" />
                    <div>
                      <p className="font-medium">{book.title}</p>
                      <p className="text-sm text-gray-600">{book.author}</p>
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
