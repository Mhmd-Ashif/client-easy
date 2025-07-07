"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import * as motion from "motion/react-client";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            service: "",
            message: "",
          });
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = {
    email: "clamstech2025@gmail.com",
    phone: "+91 6383699040 ",
    phone2: "+91 9600638531, +91 7397714467",
    address:
      "Sabol Co-works , 65, 6th St, Tatabad, Coimbatore, Tamil Nadu 641012",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM IST",
  };

  const services = [
    "Complete Account Management",
    "Growth & Marketing Services",
    "Other",
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-12 md:py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4">
              Thank You!
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {`Your message has been sent successfully. We'll get back to you
              within 24 hours.`}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-12 md:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            {`Let's Start Your Project`}
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
            {`Ready to transform your vision into reality? Get in touch with us
            today and let's discuss how we can help your business grow.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                Get in Touch
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                {`We'd love to hear about your project and discuss how we can help
                bring your ideas to life. Choose the best way to reach us, and
                we'll respond promptly.`}
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start space-x-3 md:space-x-4"
              >
                <div className="bg-blue-700 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">
                    Email
                  </h4>
                  <p className="text-blue-100 text-sm md:text-base">
                    {contactInfo.email}
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start space-x-3 md:space-x-4"
              >
                <div className="bg-blue-700 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">
                    Phone
                  </h4>
                  <p className="text-blue-100 text-sm md:text-base">
                    {contactInfo.phone}
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start space-x-3 md:space-x-4"
              >
                <div className="bg-blue-700 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">
                    Phone Alt
                  </h4>
                  <p className="text-blue-100 text-sm md:text-base">
                    {contactInfo.phone2}
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start space-x-3 md:space-x-4"
              >
                <div className="bg-blue-700 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">
                    Address
                  </h4>
                  <a
                    className="text-blue-100 text-sm md:text-base"
                    href="https://maps.app.goo.gl/x7ju1Dg4WcwYfpjx6"
                    target="_blank"
                  >
                    {contactInfo.address}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start space-x-3 md:space-x-4"
              >
                <div className="bg-blue-700 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">
                    Business Hours
                  </h4>
                  <p className="text-blue-100 text-sm md:text-base">
                    {contactInfo.hours}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-sm md:text-base text-black"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-sm md:text-base text-black"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-sm md:text-base text-black"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    required
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-sm md:text-base text-black"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none text-sm md:text-base text-black"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 md:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
