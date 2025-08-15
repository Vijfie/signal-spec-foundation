import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, Send } from "lucide-react";
import professionalInvestor from "@/assets/professional-investor.jpg";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    targetAmount: '',
    experience: '',
    agreePrivacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-cool-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Download onze uitgebreide brochure
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Krijg volledig inzicht in onze strategie, historische resultaten en werkwijze. 
                Inclusief een persoonlijk gesprek met een van onze specialisten.
              </p>
            </div>

            <div className="relative">
              <img 
                src={professionalInvestor}
                alt="Professional financial advisor"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-semibold">Persoonlijk adviesgesprek</p>
                <p className="text-white/80 text-sm">Plan een gratis kennismaking</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-8 shadow-hover border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                <Download className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy">Gratis brochure</h3>
                <p className="text-muted-foreground">Ontvang binnen 2 minuten</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-navy font-medium">Voornaam *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-navy font-medium">Achternaam *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-navy font-medium">E-mailadres *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-navy font-medium">Telefoonnummer</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+31 6 12345678"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="targetAmount" className="text-navy font-medium">Doelvermogen</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, targetAmount: value })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecteer bedrag" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2500-10000">€2.500 - €10.000</SelectItem>
                    <SelectItem value="10000-25000">€10.000 - €25.000</SelectItem>
                    <SelectItem value="25000-50000">€25.000 - €50.000</SelectItem>
                    <SelectItem value="50000-100000">€50.000 - €100.000</SelectItem>
                    <SelectItem value="100000+">€100.000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience" className="text-navy font-medium">Beleggingservaring</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecteer ervaring" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-2 jaar)</SelectItem>
                    <SelectItem value="intermediate">Ervaren (2-5 jaar)</SelectItem>
                    <SelectItem value="advanced">Gevorderd (5+ jaar)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="privacy"
                  checked={formData.agreePrivacy}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreePrivacy: checked as boolean })}
                />
                <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                  Ik ga akkoord met de <a href="#" className="text-navy underline hover:no-underline">privacyverklaring</a> 
                  en het ontvangen van informatie over Beursadvies.nl.
                </Label>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={!formData.agreePrivacy}
              >
                <Send className="w-5 h-5" />
                Download gratis brochure
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              We gebruiken je gegevens uitsluitend om je aanvraag en abonnement te beheren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;