
import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";

const ProductDemo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Demo Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8">
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
                  <div className="bg-muted p-4 border-b border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground ml-4">Your Audience Report</span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Reader Demographics</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Ages 25-45</span>
                          <span className="text-sm font-medium">68%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full w-2/3"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Platform Targeting</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-primary/10 rounded-lg p-3 text-center">
                          <div className="text-sm font-medium text-foreground">Facebook</div>
                          <div className="text-xs text-muted-foreground">Ready to use</div>
                        </div>
                        <div className="bg-accent/10 rounded-lg p-3 text-center">
                          <div className="text-sm font-medium text-foreground">Amazon</div>
                          <div className="text-xs text-muted-foreground">Copy & paste</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="rounded-full w-16 h-16 bg-primary/90 hover:bg-primary shadow-2xl">
                  <Play className="h-6 w-6 text-primary-foreground ml-1" />
                </Button>
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  See What You'll Get
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Every report is customized to your specific book and includes everything you need to start marketing effectively.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Detailed reader demographics and psychographics",
                  "Platform-specific ad targeting parameters",
                  "Suggested ad copy and book descriptions",
                  "Comparable authors and titles for reference",
                  "Marketing channel recommendations"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" size="lg" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Download className="mr-2 h-5 w-5" />
                Download Sample Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
