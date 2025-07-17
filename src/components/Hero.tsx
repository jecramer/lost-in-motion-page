
import { Button } from "@/components/ui/button";
import { BookOpen, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-muted py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl h-full flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              🎯 Your First Step to 
              <span className="text-primary"> Full-Time Writing Income</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Stop guessing who wants your book. This report is the foundation every successful author needs to turn their passion into a sustainable career. Know your audience, reach the right readers, build your income.
            </p>
            
            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-accent/10 to-secondary/10 p-6 rounded-xl mb-8 border-l-4 border-accent">
              <p className="text-lg font-semibold text-foreground mb-2">
                Upload your book. Get a custom audience report.
              </p>
              <p className="text-muted-foreground">
                Shows you who your readers are, how to reach them, and how to sell more books with less guesswork.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                <BookOpen className="mr-2 h-5 w-5" />
                Get My Audience Report
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200">
                <Download className="mr-2 h-5 w-5" />
                Download Free Sample
              </Button>
            </div>
          </div>
          
          <div className="relative h-full flex items-center justify-center">
            <div className="w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Stack of books and notebooks on a wooden desk with warm lighting, representing the writing and publishing journey" 
                className="rounded-2xl shadow-xl w-full h-[600px] object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full opacity-50 animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;
