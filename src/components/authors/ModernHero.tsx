
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, CheckCircle } from "lucide-react";

const ModernHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/10 py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent-foreground">
                🎯 For Authors Who Want Real Results
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">Get Lost:</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Find Your Readers
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Stop guessing who wants your book. Get a custom audience report that shows you exactly who your readers are and how to reach them.
              </p>
              
              {/* Key benefits */}
              <div className="space-y-3">
                {[
                  "Know your exact reader demographics",
                  "Get copy-paste ad targeting",
                  "Receive platform-specific marketing tips"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Get My Report Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-muted-foreground/20 hover:border-accent hover:bg-accent/5 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  <Download className="mr-2 h-5 w-5" />
                  See Sample Report
                </Button>
              </div>
              
              {/* Social proof */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">500+</span> authors served
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">24-hour</span> delivery
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">€39</span> one-time
                </div>
              </div>
            </div>
            
            {/* Right Content - Visual */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground ml-4">Audience Report Preview</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-4 bg-accent/20 rounded w-3/4"></div>
                      <div className="h-4 bg-primary/20 rounded w-1/2"></div>
                      <div className="h-4 bg-muted rounded w-2/3"></div>
                      
                      <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                        <div className="h-3 bg-accent/30 rounded w-full"></div>
                        <div className="h-3 bg-accent/30 rounded w-4/5"></div>
                        <div className="h-3 bg-accent/30 rounded w-3/5"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <div className="h-3 bg-primary/40 rounded w-full mb-2"></div>
                          <div className="h-2 bg-primary/30 rounded w-3/4"></div>
                        </div>
                        <div className="bg-accent/10 rounded-lg p-3">
                          <div className="h-3 bg-accent/40 rounded w-full mb-2"></div>
                          <div className="h-2 bg-accent/30 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-2xl rotate-12 blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-3xl -rotate-12 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
