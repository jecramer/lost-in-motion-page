
import { X, CheckCircle } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "Wasting money on broad, ineffective ads",
    "Guessing who your readers actually are", 
    "Writing blurbs that don't convert",
    "Getting lost in endless marketing advice"
  ];

  const solutions = [
    "Precise targeting data for profitable ads",
    "Detailed reader personas and demographics",
    "Copy suggestions that actually sell books", 
    "Clear, actionable marketing roadmap"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Stop Struggling With Book Marketing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most authors waste thousands trying to figure out marketing. We solve that in 24 hours.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
                Without Get Lost, You're Probably...
              </h3>
              
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-4 bg-destructive/5 rounded-xl p-6 border border-destructive/20">
                  <X className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{problem}</span>
                </div>
              ))}
            </div>
            
            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
                With Get Lost, You'll Be...
              </h3>
              
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-4 bg-accent/5 rounded-xl p-6 border border-accent/20">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
