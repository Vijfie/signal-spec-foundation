import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Mail } from "lucide-react";

const ExecutionMethods = () => {
  const [activeMethod, setActiveMethod] = useState<'automatic' | 'manual'>('automatic');

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Twee manieren om te beleggen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kies de methode die het beste bij jou past. Beide opties bieden volledige transparantie.
          </p>
        </div>

        {/* Toggle Control */}
        <div className="flex justify-center mb-12">
          <div className="bg-cool-gray rounded-2xl p-2 inline-flex">
            <Button
              variant={activeMethod === 'automatic' ? 'cta' : 'ghost'}
              size="lg"
              onClick={() => setActiveMethod('automatic')}
              className="rounded-xl"
            >
              <Zap className="w-5 h-5" />
              Automatische uitvoering
            </Button>
            <Button
              variant={activeMethod === 'manual' ? 'cta' : 'ghost'}
              size="lg"
              onClick={() => setActiveMethod('manual')}
              className="rounded-xl"
            >
              <Mail className="w-5 h-5" />
              Zelf uitvoeren
            </Button>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Automatic Method */}
          <div className={`bg-white rounded-3xl p-8 shadow-card border-2 transition-all duration-300 ${
            activeMethod === 'automatic' 
              ? 'border-navy shadow-hover scale-105' 
              : 'border-border hover:shadow-hover'
          }`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-navy" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy">Automatische uitvoering</h3>
                <p className="text-muted-foreground">Volledig hands-off beleggen</p>
              </div>
            </div>

            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Volledig hands-off; posities automatisch bijgewerkt volgens onze signalen.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Real-time uitvoering</p>
                  <p className="text-sm text-muted-foreground">Signalen worden direct uitgevoerd op je rekening</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Automatisch schalen</p>
                  <p className="text-sm text-muted-foreground">Posities passen zich aan bij bijstorten (opt-in)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Automatische stop</p>
                  <p className="text-sm text-muted-foreground">Systeem stopt bij einde abonnement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Manual Method */}
          <div className={`bg-white rounded-3xl p-8 shadow-card border-2 transition-all duration-300 ${
            activeMethod === 'manual' 
              ? 'border-navy shadow-hover scale-105' 
              : 'border-border hover:shadow-hover'
          }`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-tech-accent/10 rounded-2xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-tech-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy">Zelf uitvoeren</h3>
                <p className="text-muted-foreground">Volledige controle behouden</p>
              </div>
            </div>

            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Ontvang signalen per e-mail. Jij voert de orders zelf uit via je broker.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Transparante signalen</p>
                  <p className="text-sm text-muted-foreground">Ontvang duidelijke koop/verkoop instructies</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Stap-voor-stap instructies</p>
                  <p className="text-sm text-muted-foreground">Exacte uitleg hoe je de orders uitvoert</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Tijdige meldingen</p>
                  <p className="text-sm text-muted-foreground">Direct op de hoogte van nieuwe signalen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionMethods;