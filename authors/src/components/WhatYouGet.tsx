
import { CheckCircle } from "lucide-react";

const WhatYouGet = () => {
  const benefits = [
    "Clear reader profiles and personas",
    "Suggested copy for ads and blurbs",
    "Keyword and genre analysis",
    "Comparable titles and authors",
    "Platform-specific ad tips",
    "Targeting filters for ad platforms"
  ];

  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            What you get
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to market your book effectively
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-accent/10 rounded-lg">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-card-foreground font-medium text-lg">{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-secondary/10 p-6 rounded-xl max-w-2xl mx-auto">
            <p className="text-lg text-secondary font-medium">
              Plus: Optional bonus targeting filters ready to copy-paste into your ad platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
