import { Button } from "@/components/ui/button";
import { LinkIcon, Zap, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: LinkIcon,
    title: "Koppel je rekening",
    description: "Veilig via onze broker-partners. Jij houdt de regie.",
    color: "tech-accent"
  },
  {
    icon: Zap,
    title: "Activeer automatische uitvoering",
    description: "Onze signalen worden realtime toegepast.",
    color: "gold"
  },
  {
    icon: BarChart3,
    title: "Volg je posities",
    description: "Volledig inzicht in actuele posities en historie.",
    color: "success"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-cool-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Hoe het werkt
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In drie eenvoudige stappen ben je klaar om te starten met automatisch beleggen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-8 z-10">
                    <div className="h-0.5 bg-gradient-to-r from-navy/30 to-navy/10 relative">
                      <ArrowRight className="absolute -right-2 -top-3 w-6 h-6 text-navy/30" />
                    </div>
                  </div>
                )}
                
                <div className="bg-white rounded-3xl p-8 text-center shadow-card border border-border hover:shadow-hover transition-all duration-300 relative z-20">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                    step.color === 'tech-accent' ? 'bg-tech-accent/10' :
                    step.color === 'gold' ? 'bg-gold/10' :
                    'bg-success/10'
                  }`}>
                    <IconComponent className={`w-10 h-10 ${
                      step.color === 'tech-accent' ? 'text-tech-accent' :
                      step.color === 'gold' ? 'text-gold' :
                      'text-success'
                    }`} />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-navy mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="minimal" size="lg" className="group">
            Bekijk het systeem
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;