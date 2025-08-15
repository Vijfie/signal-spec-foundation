import { Linkedin, Mail, Phone, Send, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gold mb-2">Blijf op de hoogte</h3>
            <p className="text-white/80">
              Ontvang wekelijks marktinzichten en updates over onze strategieën
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input 
                type="email" 
                placeholder="Jouw e-mailadres"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-gold"
              />
              <Button variant="hero" size="default" className="shrink-0">
                <Send className="w-4 h-4 mr-2" />
                Aanmelden
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gold mb-4">Beursadvies.nl</h3>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Professioneel beleggen met slimme algoritmes. Automatische uitvoering via je eigen rekening 
              met volledige transparantie en Nederlandse support.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/20 hover:scale-110 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 group-hover:text-gold transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/20 hover:scale-110 transition-all duration-300 group">
                <Facebook className="w-5 h-5 group-hover:text-gold transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/20 hover:scale-110 transition-all duration-300 group">
                <Twitter className="w-5 h-5 group-hover:text-gold transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/20 hover:scale-110 transition-all duration-300 group">
                <Instagram className="w-5 h-5 group-hover:text-gold transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Navigatie</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#home" className="hover:text-gold transition-colors hover:translate-x-1 transform duration-200 block">Home</a></li>
              <li><a href="#rendement" className="hover:text-gold transition-colors hover:translate-x-1 transform duration-200 block">Rendement</a></li>
              <li><a href="#wie-zijn-wij" className="hover:text-gold transition-colors hover:translate-x-1 transform duration-200 block">Wie zijn wij</a></li>
              <li><a href="#werkwijze" className="hover:text-gold transition-colors hover:translate-x-1 transform duration-200 block">Werkwijze</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors hover:translate-x-1 transform duration-200 block">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Juridisch</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-gold transition-colors hover:translate-x-1 transform duration-200 block">Algemene voorwaarden</a></li>
              <li><a href="#" className="hover:text-gold transition-colors hover:translate-x-1 transform duration-200 block">Privacy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors hover:translate-x-1 transform duration-200 block">Disclaimer</a></li>
              <li><a href="#" className="hover:text-gold transition-colors hover:translate-x-1 transform duration-200 block">Herroepingsrecht</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-white/80">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold" />
              <span>+31 85 000 0000</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gold" />
              <span>info@beursadvies.nl</span>
            </div>
            <div className="text-sm">
              <p>KvK: 12345678</p>
              <p>BTW: NL123456789B01</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>&copy; {currentYear} Beursadvies.nl. Alle rechten voorbehouden.</p>
          <p>Vestigingsadres: Amsterdam, Nederland</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;