
import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "This report saved me thousands in ad spend. Finally found my readers!",
      author: "Sarah M.",
      genre: "Romance Author",
      rating: 5
    },
    {
      quote: "Tripled my conversion rate with the targeting filters alone.",
      author: "James K.", 
      genre: "Thriller Writer",
      rating: 5
    },
    {
      quote: "Best investment I've made for my writing career. Pure gold.",
      author: "Maria L.",
      genre: "Fantasy Author", 
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-3 text-lg font-semibold text-foreground">4.9/5 from 500+ authors</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Authors Are Getting Results
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <div className="flex space-x-1 ml-auto">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.genre}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
