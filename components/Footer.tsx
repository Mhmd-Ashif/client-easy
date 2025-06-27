"use client";

import type React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { usePathname } from "next/navigation";

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
    "Brand Identity Design",
    "Website Development",
    "UI/UX Design",
    "E-commerce Solutions",
    "Digital Marketing",
    "Print Design",
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
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              EliteDesign
            </h3>
            <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Creating exceptional digital experiences that transform businesses
              and connect brands with their audiences.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <Facebook size={16} className="md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <Twitter size={16} className="md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <Instagram size={16} className="md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <Linkedin size={16} className="md:w-5 md:h-5" />
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
                <span className="text-slate-300 text-xs md:text-sm">
                  123 Design Street
                  <br />
                  Creative District
                  <br />
                  New York, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <Phone className="text-blue-400 flex-shrink-0" size={14} />
                <span className="text-slate-300 text-xs md:text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={14} />
                <span className="text-slate-300 text-xs md:text-sm">
                  hello@elitedesign.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-xs md:text-sm text-center md:text-left">
              © {currentYear} EliteDesign. All rights reserved.
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
