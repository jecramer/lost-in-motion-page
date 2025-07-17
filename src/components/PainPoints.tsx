
import { Frown, Target, FileText, Users } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    {
      icon: Frown,
      title: "Marketing feels overwhelming",
      description: "You became a writer to write, not to become a marketing expert. Yet here you are, trying to figure out Facebook ads at 2am."
    },
    {
      icon: Target,
      title: "Ad targeting is a mystery",
      description: "Should you target romance readers? Thriller fans? People who like similar authors? The options are endless and your budget isn't."
    },
    {
      icon: FileText,
      title: "Blurbs that don't convert",
      description: "You've rewritten your book description seventeen times. It still doesn't feel right, and you're not sure what readers actually want to hear."
    },
    {
      icon: Users,
      title: "Who are my readers?",
      description: "You know your characters inside out, but your actual readers? That's a different story. And reaching the wrong audience means wasted time and money."
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              We get it. Marketing your book feels impossible.
            </h2>
            <p className="text-xl text-muted-foreground">
              You're not alone in feeling frustrated. Every indie author faces these same challenges. 
              The good news? There's a clearer way forward.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="A woman sitting on bed using laptop for writing, representing modern authors working from home"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <point.icon className="h-8 w-8 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
