import { Shield, Lock, FileText, Headphones } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Eigen rekening & controle",
    description: "Je behoudt altijd volledige controle over je vermogen"
  },
  {
    icon: Lock,
    title: "Veilige verbindingen & encryptie",
    description: "Alle data wordt versleuteld en veilig opgeslagen"
  },
  {
    icon: FileText,
    title: "Transparante rapportages",
    description: "Volledige inzage in alle posities en transacties"
  },
  {
    icon: Headphones,
    title: "Nederlandstalige support",
    description: "Persoonlijke hulp in het Nederlands"
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-cool-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Vertrouwen & Veiligheid
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jouw veiligheid en vertrouwen staan voorop in alles wat we doen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-card border border-border hover:shadow-hover transition-all duration-300">
                <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Legal microcopy */}
        <div className="mt-12 text-center">
          <p className="text-sm text-warning max-w-4xl mx-auto leading-relaxed">
            Beleggen brengt risico's met zich mee. Je kunt (een deel van) je inleg verliezen. 
            Lees onze <a href="#" className="underline hover:no-underline">disclaimer</a>, 
            <a href="#" className="underline hover:no-underline"> algemene voorwaarden</a> en 
            <a href="#" className="underline hover:no-underline"> privacyverklaring</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;