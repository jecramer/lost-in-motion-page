
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalNudge = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          You don't need to figure it all out.
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
          You just need a clear plan tailored to your book.
        </p>
        
        <Button 
          size="lg" 
          className="bg-card text-card-foreground hover:bg-card/90 px-12 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        <p className="text-primary-foreground/80 mt-6 text-lg">
          Join hundreds of authors who've discovered their audience
        </p>
      </div>
    </section>
  );
};

export default FinalNudge;
