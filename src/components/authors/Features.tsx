
import { Zap, Shield, Clock, RefreshCw, Users, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning analyzes your manuscript to identify your perfect audience"
    },
    {
      icon: Clock,
      title: "24-Hour Delivery",
      description: "Upload today, get your comprehensive report tomorrow. No waiting weeks for insights"
    },
    {
      icon: Target,
      title: "Platform-Specific Targeting",
      description: "Ready-to-use filters for Facebook, Amazon, BookBub, and other major platforms"
    },
    {
      icon: Users,
      title: "Detailed Reader Personas",
      description: "Know exactly who your readers are, what they like, and how they discover books"
    },
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Your manuscript is processed securely and never shared or stored permanently"
    },
    {
      icon: RefreshCw,
      title: "Actionable Insights",
      description: "No fluff - just clear, implementable strategies you can use immediately"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive analysis gives you all the tools to turn your book into a marketing success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
