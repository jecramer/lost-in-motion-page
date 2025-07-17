
import { Target, Users, TrendingUp } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Target,
      title: "Laser-Focused Targeting",
      description: "Stop wasting money on broad audiences. Get precise demographic data and targeting filters for your exact readers."
    },
    {
      icon: Users,
      title: "Reader Personas",
      description: "Discover detailed profiles of your ideal readers, including their reading habits, preferences, and buying behavior."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our AI-powered analysis has helped 500+ authors increase their marketing ROI and find their true audience."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Why Authors Choose Get Lost
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your book marketing from guesswork into a data-driven strategy that actually works.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
