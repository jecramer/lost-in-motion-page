
import { Upload, Brain, FileText } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload your manuscript",
      description: "Simply upload your book file. We accept most formats and keep everything secure and confidential.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Brain,
      title: "Analysis performed using bespoke deep learning technology fused with marketing logic",
      description: "Using advanced LLM gating and recursive learning, our system identifies your book's perfect audience.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: FileText,
      title: "Get your report within 24 hours",
      description: "Receive a comprehensive 6-8 page report with actionable insights tailored specifically to your book.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to understanding your audience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 -mt-12 relative z-10 bg-card border-4 border-card shadow-lg mx-auto">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 transform -translate-y-1/2 z-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
