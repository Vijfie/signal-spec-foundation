import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, TrendingUp, Zap } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy via-navy/95 to-navy/90 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-success/5 to-tech-accent/5"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Beleggen met vertrouwen.{" "}
                <span className="text-success">Aangestuurd door slimme algoritmes.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
                Volg onze signalen automatisch via je eigen rekening. Start vanaf €2.500.
              </p>
            </div>

            {/* USP Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex-shrink-0 w-6 h-6 bg-success/20 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-success" />
                </div>
                <span className="text-lg font-medium">Automatische uitvoering | Signalen op je eigen rekening</span>
              </div>
              
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex-shrink-0 w-6 h-6 bg-success/20 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-success" />
                </div>
                <span className="text-lg font-medium">Transparant | Inzicht in posities & rendement</span>
              </div>
              
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex-shrink-0 w-6 h-6 bg-success/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
                <span className="text-lg font-medium">Eenvoudig | Start in 10 minuten</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" className="text-lg">
                Start met Beursadvies.nl
                <TrendingUp className="w-5 h-5" />
              </Button>
              
              <Button variant="ghost_navy" size="xl" className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">
                Download de brochure
              </Button>
            </div>

            {/* Trust Row */}
            <div className="pt-8">
              <p className="text-white/60 text-sm font-medium mb-4">Bekend van</p>
              <div className="flex items-center gap-8 opacity-40">
                {/* Placeholder trust logos */}
                <div className="h-8 w-20 bg-white/20 rounded"></div>
                <div className="h-8 w-20 bg-white/20 rounded"></div>
                <div className="h-8 w-20 bg-white/20 rounded"></div>
                <div className="h-8 w-20 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-r from-success/20 to-tech-accent/20 rounded-3xl blur-2xl opacity-50"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <img 
                  src={dashboardMockup}
                  alt="Beursadvies.nl Dashboard Interface"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;