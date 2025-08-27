import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Rendement", href: "#rendement" },
    { name: "Wie zijn wij", href: "#wie-zijn-wij" },
    { name: "Werkwijze", href: "#werkwijze" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/d173fcb9-d901-41f0-b2a8-0912d5faa6af.png" 
              alt="Beursadvies Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <Button variant="hero" size="default" className="ml-4">
              Aanmelden
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:text-success hover:bg-navy/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-success"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:text-success hover:bg-navy/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 px-3">
                <Button variant="hero" size="default" className="w-full">
                  Aanmelden
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;