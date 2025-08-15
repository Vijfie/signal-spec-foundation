import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PerformanceSection from "@/components/PerformanceSection";
import HowItWorks from "@/components/HowItWorks";
import ExecutionMethods from "@/components/ExecutionMethods";
import TrustSection from "@/components/TrustSection";
import Pricing from "@/components/Pricing";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PerformanceSection />
      <HowItWorks />
      <ExecutionMethods />
      <TrustSection />
      <Pricing />
      <LeadForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
