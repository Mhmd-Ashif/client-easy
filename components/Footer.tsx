"use client";

import type React from "react";
import { Mail, Phone, MapPin, Instagram, ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import Contact from "./Contact";

const Footer: React.FC = () => {
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services & Products", href: "#products" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Complete Account Management",
    "Growth & Marketing Services",
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") return;

    if (pathname !== "/") {
      window.location.href = `/${href}`;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white">
      <Contact />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Clams Tech Solution
            </h3>
            <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              We transform businesses into E-commerce success stories through
              expert marketplace management and proven growth strategies.
            </p>
            <div className="flex flex-col">
              <h4 className="font-semibold items-center mb-2">Our Socials</h4>
              <a
                href="https://www.instagram.com/clams_tech/"
                className="bg-slate-800 p-2 w-8 md:w-9 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <Instagram size={16} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1 md:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-sm md:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Our Services
            </h4>
            <ul className="space-y-1 md:space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-300 text-sm md:text-base">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start space-x-2 md:space-x-3">
                <MapPin
                  className="text-blue-400 mt-1 flex-shrink-0"
                  size={14}
                />
                <a
                  className="text-slate-300 text-xs md:text-sm"
                  href="https://maps.app.goo.gl/zNHCVofkWkVpMeW5A"
                  target="_blank"
                >
                  Sabol Co-works, 65, 6th St, Tatabad, Coimbatore, Tamil Nadu
                  641012
                </a>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <Phone className="text-blue-400 flex-shrink-0" size={14} />
                <span className="text-slate-300 text-xs md:text-sm">
                  +91 6383699040
                </span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={14} />
                <span className="text-slate-300 text-xs md:text-sm">
                  clamstech2025@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Clams Tech Solution . All rights reserved.
            </p>
            <div className="flex items-center space-x-4 md:space-x-6">
              <button
                onClick={scrollToTop}
                className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
