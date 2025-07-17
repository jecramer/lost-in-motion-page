
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
          One Report. One Price.
        </h2>
        
        <div className="bg-gradient-to-br from-accent/10 to-secondary/10 p-8 rounded-2xl shadow-lg max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-3xl font-bold text-muted-foreground line-through">
              €119
            </div>
            <div className="text-6xl font-bold text-primary">
              €39
            </div>
          </div>
          <div className="text-muted-foreground mb-2">
            £34 / $39
          </div>
          <div className="text-sm text-accent font-semibold mb-2">
            For the first 500 authors only
          </div>
          <div className="text-sm text-muted-foreground">
            No subscriptions, no upsells
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Order My Report
        </Button>
        
        <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
          One comprehensive report with everything you need to understand and reach your readers. 
          Pay once, use the insights forever.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
