"use client";
import type React from "react";
import { Target, Eye, Heart, Lightbulb, Shield } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

const About: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="text-yellow-500" size={20} />,
      title: "Innovation",
      amount: 0.2,
      description:
        "We push boundaries and cutting-edge technologies to deliver exceptional results.",
    },
    {
      icon: <Heart className="text-red-500" size={20} />,
      title: "Passion",
      amount: 0.2,
      description:
        "Every project is crafted with love, attention to detail, and genuine care for your success.",
    },
    {
      icon: <Shield className="text-green-500" size={20} />,
      title: "Trust",
      amount: 0.2,
      description:
        "Building relationships through transparency, reliability, and consistent delivery.",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4">
            About Clams Tech Solution
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            We transform businesses into E-commerce success stories through
            expert marketplace management and proven growth strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6">
              Our Story
            </h3>
            <p className="text-slate-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              {`Great products, complex platforms - that's where we come in. We
              help businesses dominate Amazon, Flipkart, Myntra, and Ajio
              without the headaches.`}
            </p>
            <p className="text-slate-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              {`What started as helping local businesses navigate Amazon and
              Flipkart has evolved into a comprehensive E-commerce powerhouse,
              managing end-to-end operations for brands across Amazon, Flipkart,
              Myntra, Ajio, and more. Today, we're the trusted growth partners
              for businesses ready to dominate the digital marketplace.`}
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm">
                <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">
                  2+
                </div>
                <div className="text-xs md:text-sm text-slate-600">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm">
                <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">
                  10+
                </div>
                <div className="text-xs md:text-sm text-slate-600">
                  Team Members
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <Image
              src="/ourstory.png"
              alt="Our team at work"
              width={600}
              height={320}
              className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/ourmission1edited.png"
              alt="Design process"
              width={600}
              height={320}
              className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"
            />
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center mb-4 md:mb-6">
              <Target className="text-blue-600 mr-3" size={20} />
              <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                Our Mission
              </h3>
            </div>
            <p className="text-slate-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              To empower businesses of all sizes to achieve their maximum
              E-commerce potential through expert account management, strategic
              optimization, and data-driven growth tactics that deliver
              measurable results.
            </p>

            <div className="flex items-center mb-4 md:mb-6">
              <Eye className="text-blue-600 mr-3" size={20} />
              <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                Our Vision
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {`To be India's most trusted E-commerce growth partner, setting the
              standard for comprehensive marketplace management and helping
              brands achieve sustainable online success.`}
            </p>
          </motion.div>
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 text-center mb-6 md:mb-8">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: value.amount }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                key={index}
                className="text-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-gray-50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 md:mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
