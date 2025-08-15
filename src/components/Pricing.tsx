import { Button } from "@/components/ui/button";
import { CheckCircle, Crown, Lock } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Transparante prijzen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kies het abonnement dat bij jou past. Geen verborgen kosten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 1 Year Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-border hover:shadow-hover transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-navy mb-2">Jaarplan</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-navy">€799</span>
                <span className="text-muted-foreground">/jaar</span>
              </div>
              <p className="text-muted-foreground">Start vandaag – opzegbaar per periode</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-foreground">Automatische signaaluitvoering</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-foreground">Volledige transparantie</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-foreground">Nederlandse support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-foreground">Maandelijkse rapportages</span>
              </div>
            </div>

            <Button variant="ghost_navy" size="lg" className="w-full">
              Kies jaarplan
            </Button>
          </div>

          {/* 2 Year Plan - Highlighted */}
          <div className="bg-white rounded-3xl p-8 shadow-hover border-2 border-navy relative">
            {/* Best Choice Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-navy text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Beste keuze
              </div>
            </div>

            <div className="text-center mb-8 pt-4">
              <h3 className="text-2xl font-bold text-navy mb-2">Twee jaar</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold text-navy">€1.279</span>
                <span className="text-muted-foreground">/2 jaar</span>
              </div>
              <div className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                Bespaar €319 (-20%)
              </div>
              <p className="text-muted-foreground">Beste waarde – langetermijn strategie</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-foreground">Automatische signaaluitvoering</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-foreground">Volledige transparantie</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-foreground">Nederlandse support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-foreground">Maandelijkse rapportages</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-foreground font-semibold">Prioritaire ondersteuning</span>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full">
              Kies twee jaar plan
            </Button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Betaling via iDEAL, Bancontact of SEPA. Automatische verlenging. 
            Je behoudt volledige controle en kunt opzeggen voor het einde van de periode.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-8">
          <Button variant="cta" size="xl">
            Aanmelden en starten
          </Button>
          <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" />
            Beveiligde betaling via Stripe
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;