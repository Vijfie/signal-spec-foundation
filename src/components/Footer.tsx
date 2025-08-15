import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gold mb-4">Beursadvies.nl</h3>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Professioneel beleggen met slimme algoritmes. Automatische uitvoering via je eigen rekening 
              met volledige transparantie en Nederlandse support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-gold transition-colors">Over ons</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Werkwijze</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Het systeem</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Juridisch</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-gold transition-colors">Algemene voorwaarden</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Herroepingsrecht</a></li>
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