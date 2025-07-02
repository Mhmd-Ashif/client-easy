"use client";
import type React from "react";
import { Star, Users, Award } from "lucide-react";
import { motion } from "motion/react";

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 "
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight ">
            Turn Your Products
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Into Profit Machines
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto px-4">
            We handle your complete e-commerce journey on Amazon, Flipkart,
            Myntra & Ajio and More. You focus on business, we deliver sales.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
            <button
              onClick={scrollToProducts}
              className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Explore Our Services
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <div className="bg-blue-700/30 p-2 md:p-3 rounded-full mb-2 md:mb-3">
                <Star className="text-yellow-400" size={20} />
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">
                5.0
              </div>
              <div className="text-blue-200 text-xs md:text-sm">
                Client Rating
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-700/30 p-2 md:p-3 rounded-full mb-2 md:mb-3">
                <Users className="text-blue-400" size={20} />
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">
                50+
              </div>
              <div className="text-blue-200 text-xs md:text-sm">
                Happy Clients
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-700/30 p-2 md:p-3 rounded-full mb-2 md:mb-3">
                <Award className="text-green-400" size={20} />
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">
                75+
              </div>
              <div className="text-blue-200 text-xs md:text-sm">
                Projects Done
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
