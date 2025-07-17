
import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";

const FreeSample = () => {
  const sampleFeatures = [
    "Age, gender, and reading habits breakdown", 
    "Targeting filters for Facebook, BookBub, Amazon", 
    "Reader cluster identification & personas", 
    "Genre analysis and comparable titles"
  ];

  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Person using MacBook Pro for writing and publishing work" 
              className="rounded-2xl shadow-xl w-full h-80 object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
              Curious about what's inside?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Download a sample report to see the kind of demographic and audience insights you'll get. 
              No spam, no obligations.
            </p>
            
            <div className="space-y-4 mb-8">
              {sampleFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-card-foreground text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200">
              <Download className="mr-2 h-5 w-5" />
              Download Sample
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeSample;
