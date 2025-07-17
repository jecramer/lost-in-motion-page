
import ModernHero from "@/components/authors/ModernHero";
import ValueProposition from "@/components/authors/ValueProposition";
import SocialProof from "@/components/authors/SocialProof";
import ProblemSolution from "@/components/authors/ProblemSolution";
import ProductDemo from "@/components/authors/ProductDemo";
import Features from "@/components/authors/Features";
import Pricing from "@/components/authors/Pricing";
import FAQ from "@/components/authors/FAQ";
import CTA from "@/components/authors/CTA";

const Authors = () => {
  return (
    <div className="min-h-screen bg-background">
      <ModernHero />
      <ValueProposition />
      <SocialProof />
      <ProblemSolution />
      <ProductDemo />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Authors;
