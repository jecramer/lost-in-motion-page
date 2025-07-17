
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const Pricing = () => {
  const features = [
    "Complete audience analysis report",
    "Reader demographics & psychographics",
    "Platform-specific targeting filters",
    "Suggested ad copy & book descriptions",
    "Comparable authors & titles",
    "Marketing channel recommendations",
    "24-hour delivery guarantee"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            One Report. One Price. Real Results.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Stop spending months figuring out marketing. Get everything you need in one comprehensive report.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto mb-12">
            {/* Price Card */}
            <div className="bg-gradient-to-br from-accent/5 via-card to-primary/5 border-2 border-accent/20 rounded-3xl p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/5 rounded-full text-sm font-medium text-accent mb-4">
                    Limited Time - First 500 Authors
                  </div>
                  
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-2xl font-bold text-muted-foreground line-through">
                      €119
                    </div>
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      €39
                    </div>
                  </div>
                  
                  <div className="text-muted-foreground mb-2">
                    £34 / $39 USD
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    No subscriptions • No upsells • One-time payment
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group mb-6"
                >
                  Get My Audience Report
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  ⚡ 24-hour delivery • 🔒 Secure processing • 💰 One-time payment
                </div>
              </div>
            </div>
            
            {/* Features list */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-left">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            One comprehensive report with everything you need to understand and reach your readers. 
            Pay once, use the insights forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
