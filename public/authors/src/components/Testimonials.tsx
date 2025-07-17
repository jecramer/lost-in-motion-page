
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This saved me hours.",
      author: "Sarah M.",
      genre: "Romance Author",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Tripled my ad clicks with one change.",
      author: "James K.",
      genre: "Thriller Writer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Finally understood who my readers really are.",
      author: "Maria L.",
      genre: "Fantasy Author",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What authors are saying
          </h2>
          <p className="text-lg text-gray-600">
            Real feedback from authors who've transformed their marketing
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-800 mb-6 font-medium">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.genre}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
