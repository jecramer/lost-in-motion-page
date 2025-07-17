
import { Rocket, TrendingUp, Target } from "lucide-react";

const WhoItsFor = () => {
  const audiences = [
    {
      icon: Rocket,
      title: "Indie authors launching their first book",
      description: "Starting from scratch? Save thousands avoiding trial and error. Sell books from day one.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: TrendingUp,
      title: "Midlist authors looking to scale up",
      description: "Uncover reader clusters and audiences who want to read your books but haven't been able to find them.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Target,
      title: "Writers tired of marketing guesswork",
      description: "Frustrated with random strategies that don't work? Get data-driven insights tailored to your book.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who it's for
          </h2>
          <p className="text-xl text-muted-foreground">
            Authors ready to market smarter, not harder
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={audience.image} 
                  alt={audience.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                  <audience.icon className="h-6 w-6 text-accent" />
                </div>
                
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {audience.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
