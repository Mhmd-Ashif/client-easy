"use client";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Check, Star, Clock, Users, Award } from "lucide-react";
import { Suspense } from "react";

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const products = [
    {
      id: 1,
      name: "Brand Identity Suite",
      description:
        "Complete brand identity package including logo design, brand guidelines, business cards, and digital assets.",
      longDescription:
        "Our comprehensive Brand Identity Suite is designed to establish a strong, cohesive visual identity for your business. We work closely with you to understand your brand values, target audience, and market positioning to create a unique identity that resonates with your customers and stands out in the marketplace.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Business Stationery",
        "Digital Assets",
      ],
      detailedFeatures: [
        "Custom logo design with multiple variations",
        "Comprehensive brand guidelines document",
        "Business card and letterhead design",
        "Social media profile templates",
        "Email signature design",
        "Brand color palette and typography guide",
        "Logo usage guidelines and restrictions",
        "Vector and raster file formats provided",
      ],
      price: "Starting at $2,500",
      timeline: "2-3 weeks",
      revisions: "3 rounds included",
      deliverables:
        "Logo files, Brand guidelines, Stationery designs, Digital assets",
    },
    {
      id: 2,
      name: "Website Design & Development",
      description:
        "Custom website design and development with responsive layouts, modern aesthetics, and optimal user experience.",
      longDescription:
        "Our website design and development service creates stunning, functional websites that not only look amazing but also perform exceptionally well. We focus on user experience, mobile responsiveness, and search engine optimization to ensure your website drives results for your business.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Responsive Design",
        "Custom Development",
        "SEO Optimization",
        "CMS Integration",
      ],
      detailedFeatures: [
        "Custom responsive web design",
        "Mobile-first development approach",
        "Content Management System integration",
        "Search Engine Optimization (SEO)",
        "Performance optimization",
        "Cross-browser compatibility",
        "SSL certificate setup",
        "Google Analytics integration",
        "Contact forms and lead capture",
        "30 days of post-launch support",
      ],
      price: "Starting at $5,000",
      timeline: "4-6 weeks",
      revisions: "2 rounds included",
      deliverables:
        "Fully functional website, CMS training, SEO setup, Analytics configuration",
    },
    {
      id: 3,
      name: "UI/UX Design Services",
      description:
        "User-centered design solutions for mobile apps and web applications with focus on usability and conversion.",
      longDescription:
        "Our UI/UX design services focus on creating intuitive, user-friendly interfaces that provide exceptional user experiences. We conduct thorough research, create detailed wireframes and prototypes, and test our designs to ensure they meet both user needs and business objectives.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
      ],
      detailedFeatures: [
        "User research and persona development",
        "Information architecture planning",
        "Wireframing and user flow mapping",
        "High-fidelity mockups and prototypes",
        "Interactive prototype development",
        "Usability testing and feedback integration",
        "Design system creation",
        "Responsive design considerations",
        "Accessibility compliance (WCAG)",
        "Developer handoff documentation",
      ],
      price: "Starting at $3,500",
      timeline: "3-5 weeks",
      revisions: "2 rounds included",
      deliverables:
        "Design files, Prototypes, Design system, Developer documentation",
    },
    {
      id: 4,
      name: "E-commerce Solutions",
      description:
        "Complete e-commerce platform design and development with payment integration and inventory management.",
      longDescription:
        "Our e-commerce solutions provide everything you need to sell online successfully. From beautiful storefront designs to robust backend functionality, we create online stores that are easy to manage and provide excellent shopping experiences for your customers.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Online Store Design",
        "Payment Integration",
        "Inventory Management",
        "Analytics Setup",
      ],
      detailedFeatures: [
        "Custom e-commerce website design",
        "Product catalog setup and management",
        "Shopping cart and checkout optimization",
        "Payment gateway integration (Stripe, PayPal)",
        "Inventory management system",
        "Order management and tracking",
        "Customer account functionality",
        "Email marketing integration",
        "SEO optimization for products",
        "Mobile commerce optimization",
        "Security and SSL implementation",
        "Analytics and reporting setup",
      ],
      price: "Starting at $7,500",
      timeline: "6-8 weeks",
      revisions: "2 rounds included",
      deliverables:
        "Complete e-commerce website, Admin training, Payment setup, Analytics configuration",
    },
    {
      id: 5,
      name: "Digital Marketing Assets",
      description:
        "Social media graphics, email templates, banner ads, and other digital marketing materials.",
      longDescription:
        "Our digital marketing assets service provides you with a comprehensive suite of marketing materials designed to maintain brand consistency across all digital channels. From social media graphics to email templates, we create assets that engage your audience and drive conversions.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Social Media Graphics",
        "Email Templates",
        "Banner Ads",
        "Marketing Collateral",
      ],
      detailedFeatures: [
        "Social media post templates (Instagram, Facebook, LinkedIn)",
        "Social media story templates",
        "Email newsletter templates",
        "Banner ads for various platforms",
        "Digital brochures and flyers",
        "Presentation templates",
        "Infographic designs",
        "Web graphics and icons",
        "Brand-consistent color schemes",
        "Template customization guidelines",
      ],
      price: "Starting at $1,200",
      timeline: "1-2 weeks",
      revisions: "2 rounds included",
      deliverables:
        "Design templates, Source files, Usage guidelines, Brand assets",
    },
    {
      id: 6,
      name: "Print Design Services",
      description:
        "Professional print design for brochures, flyers, posters, packaging, and other marketing materials.",
      longDescription:
        "Our print design services ensure your brand looks professional and consistent across all printed materials. We understand the technical requirements of print production and create designs that translate beautifully from screen to paper.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Brochure Design",
        "Packaging Design",
        "Poster Design",
        "Print Preparation",
      ],
      detailedFeatures: [
        "Brochure and catalog design",
        "Business card and stationery design",
        "Poster and banner design",
        "Packaging and label design",
        "Trade show materials",
        "Print-ready file preparation",
        "Color profile optimization",
        "Bleed and margin setup",
        "Print vendor coordination",
        "Quality control and proofing",
      ],
      price: "Starting at $800",
      timeline: "1-3 weeks",
      revisions: "2 rounds included",
      deliverables:
        "Print-ready files, Source files, Print specifications, Vendor recommendations",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <Suspense fallback={<p>Loading....</p>}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-800 mb-4">
              Product not found
            </h1>
            <button
              onClick={() => router.push("/")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Go Back Home
            </button>
          </div>
        </div>
      </Suspense>
    );
  }

  const scrollToContact = () => {
    router.push("/#contact");
    // setTimeout(() => {
    //   const element = document.querySelector("#contact");
    //   if (element) {
    //     element.scrollIntoView({ behavior: "smooth" });
    //   }
    // }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300 mb-6 md:mb-8"
          >
            <ArrowLeft size={20} />
            Back to Services
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                {product.name}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
                {product.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="text-blue-400" size={20} />
                  <span className="text-sm md:text-base">
                    {product.timeline}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-blue-400" size={20} />
                  <span className="text-sm md:text-base">
                    {product.revisions}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-blue-400" size={20} />
                  <span className="text-sm md:text-base">
                    Professional Quality
                  </span>
                </div>
              </div>

              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 md:mb-8">
                {product.price}
              </div>
            </div>

            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg shadow-2xl w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 md:mb-8">
                What's Included
              </h2>
              <div className="space-y-3 md:space-y-4">
                {product.detailedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check
                      className="text-green-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-slate-700 text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6">
                Project Details
              </h3>

              <div className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Timeline
                  </h4>
                  <p className="text-slate-600 text-sm md:text-base">
                    {product.timeline}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Revisions
                  </h4>
                  <p className="text-slate-600 text-sm md:text-base">
                    {product.revisions}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Deliverables
                  </h4>
                  <p className="text-slate-600 text-sm md:text-base">
                    {product.deliverables}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Investment
                  </h4>
                  <p className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </p>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full bg-blue-600 text-white py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 mt-6 md:mt-8 text-sm md:text-base"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4">
              Our Process
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a proven process to ensure your project is delivered on
              time and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We learn about your business, goals, and requirements.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We develop a comprehensive strategy and project plan.",
              },
              {
                step: "03",
                title: "Design",
                description:
                  "We create stunning designs that align with your brand.",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "We deliver your project and provide ongoing support.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
