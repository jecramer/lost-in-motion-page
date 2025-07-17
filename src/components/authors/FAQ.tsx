
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the analysis work?",
      answer: "Our AI system analyzes your manuscript using advanced natural language processing to identify themes, tone, character types, and plot elements. It then matches these against our database of reader preferences and demographics to create your custom audience profile."
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept most common formats including .docx, .pdf, .txt, and .epub. Your manuscript is processed securely and never stored permanently on our servers."
    },
    {
      question: "How accurate are the targeting recommendations?",
      answer: "Our analysis is based on data from thousands of successful book campaigns and reader surveys. While results may vary, our clients typically see 2-3x improvement in ad performance when using our targeting recommendations."
    },
    {
      question: "Can I use this for multiple books?",
      answer: "Each report is specific to one manuscript. However, many authors find the insights apply broadly to their writing style and can inform future book marketing strategies."
    },
    {
      question: "What if I'm not satisfied with my report?",
      answer: "We're confident you'll love your report, but if you're not completely satisfied, contact us within 7 days and we'll work to make it right."
    },
    {
      question: "Do you work with all genres?",
      answer: "Yes! Our system works across all fiction and non-fiction genres. From romance to sci-fi, business books to memoirs - we've successfully analyzed thousands of books across every category."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Get Lost
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
