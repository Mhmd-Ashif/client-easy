"use client";

import type React from "react";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
  price: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Brand Identity Suite",
      description:
        "Complete brand identity package including logo design, brand guidelines, business cards, and digital assets.",
      image: "/placeholder.svg",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Business Stationery",
        "Digital Assets",
      ],
      price: "Starting at $2,500",
    },
    {
      id: 2,
      name: "Website Design & Development",
      description:
        "Custom website design and development with responsive layouts, modern aesthetics, and optimal user experience.",
      image: "/placeholder.svg",
      features: [
        "Responsive Design",
        "Custom Development",
        "SEO Optimization",
        "CMS Integration",
      ],
      price: "Starting at $5,000",
    },
    {
      id: 3,
      name: "UI/UX Design Services",
      description:
        "User-centered design solutions for mobile apps and web applications with focus on usability and conversion.",
      image: "/placeholder.svg",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
      ],
      price: "Starting at $3,500",
    },
    {
      id: 4,
      name: "E-commerce Solutions",
      description:
        "Complete e-commerce platform design and development with payment integration and inventory management.",
      image: "/placeholder.svg",
      features: [
        "Online Store Design",
        "Payment Integration",
        "Inventory Management",
        "Analytics Setup",
      ],
      price: "Starting at $7,500",
    },
    {
      id: 5,
      name: "Digital Marketing Assets",
      description:
        "Social media graphics, email templates, banner ads, and other digital marketing materials.",
      image: "/placeholder.svg",
      features: [
        "Social Media Graphics",
        "Email Templates",
        "Banner Ads",
        "Marketing Collateral",
      ],
      price: "Starting at $1,200",
    },
    {
      id: 6,
      name: "Print Design Services",
      description:
        "Professional print design for brochures, flyers, posters, packaging, and other marketing materials.",
      image: "/placeholder.svg",
      features: [
        "Brochure Design",
        "Packaging Design",
        "Poster Design",
        "Print Preparation",
      ],
      price: "Starting at $800",
    },
  ];

  return (
    <section id="products" className="py-12 md:py-20 bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4">
            Our Products & Services
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive design solutions tailored to elevate your brand and
            drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-yellow-400 text-slate-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Star size={10} fill="currentColor" />
                  Popular
                </div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-3 md:mb-4">
                  <h4 className="text-xs md:text-sm font-semibold text-slate-800 mb-2">
                    Features included:
                  </h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-xs md:text-sm text-slate-600 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="text-base md:text-lg font-bold text-blue-600">
                    {product.price}
                  </div>
                  <Link
                    href={`/product/${product.id}`}
                    className="bg-blue-600 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base w-full sm:w-auto justify-center"
                  >
                    Learn More
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
