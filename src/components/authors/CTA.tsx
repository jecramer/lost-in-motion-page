
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/5 rounded-full text-sm font-medium text-accent mb-4">
              🎯 Join 500+ Successful Authors
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Ready to Find Your Readers?
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stop guessing and start knowing. Get your custom audience report and transform your book marketing forever.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>24-hour delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-accent" />
                <span>500+ authors served</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent">€39</span>
                <span>one-time payment</span>
              </div>
            </div>
            
            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              >
                Get My Audience Report Now
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Upload your manuscript, get your report in 24 hours. No subscriptions, no hidden fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
