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
}
import Image from "next/image";

const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Complete Account Management",
      description:
        "End-to-end management of your Amazon, Flipkart, Myntra & Ajio accounts with optimized listings and strategic growth.",
      image: "/p1E.jpg",
      features: [
        "Product Listing Optimization",
        "Inventory Management",
        "Ad Campaign Management",
        "Account Setup & Optimization",
      ],
    },
    {
      id: 2,
      name: "Growth & Marketing Services",
      description:
        "Data-driven advertising and marketing strategies that maximize your ROI across all major E-commerce platforms.",
      image: "/p2E.jpg",
      features: [
        "PPC Campaign Management",
        "SEO Optimization",
        "Performance Analytics",
        "Revenue Growth Strategy",
      ],
    },
  ];

  return (
    <section id="products" className="py-12 md:py-20 bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive design solutions tailored to elevate your brand and
            drive business growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2  gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={800}
                  height={600}
                  quality={95}
                  priority={product.id === 1}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
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
