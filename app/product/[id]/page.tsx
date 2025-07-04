"use client";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Clock,
  Award,
  TrendingUp,
  Target,
} from "lucide-react";
import { Suspense } from "react";
import Image from "next/image";

export default function ServiceDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const services = [
    {
      id: 1,
      name: "Complete Account Management",
      description:
        "End-to-end management of your Amazon, Flipkart, Myntra & Ajio accounts with optimized listings and strategic growth.",
      longDescription:
        "Our comprehensive account management service takes care of every aspect of your e-commerce presence across major platforms. From initial setup to ongoing optimization, we ensure your products are positioned for maximum visibility and sales. Our team of experts manages your accounts daily, handling everything from inventory updates to customer service coordination.",
      image: "/p1p.png",
      features: [
        "Product Listing Optimization",
        "Inventory Management",
        "Ad Campaign Management",
        "Account Setup & Optimization",
      ],
      detailedFeatures: [
        "Complete account setup and verification across all platforms",
        "Product listing creation with SEO-optimized titles and descriptions",
        "High-quality product photography and image optimization",
        "Inventory tracking and automated restocking alerts",
        "Daily account monitoring and performance tracking",
        "Customer review management and response",
        "Brand storefront design and optimization",
        "Compliance management for platform policies",
        "Regular reporting and analytics insights",
        "24/7 account monitoring and issue resolution",
      ],
      timeline: "Ongoing monthly service",
      revisions: "Unlimited optimizations",
      deliverables:
        "Fully managed accounts, Monthly reports, Performance analytics, Optimization recommendations",
      platforms: ["Amazon", "Flipkart", "Myntra", "Ajio"],
    },
    {
      id: 2,
      name: "Growth & Marketing Services",
      description:
        "Data-driven advertising and marketing strategies that maximize your ROI across all major e-commerce platforms.",
      longDescription:
        "Our growth and marketing services are designed to scale your e-commerce business through strategic advertising and marketing campaigns. We use advanced analytics and market insights to create campaigns that not only drive traffic but convert visitors into loyal customers. Our approach is data-driven, ensuring every marketing dollar is optimized for maximum return on investment.",
      image: "/p2p.png",
      features: [
        "PPC Campaign Management",
        "SEO Optimization",
        "Performance Analytics",
        "Revenue Growth Strategy",
      ],
      detailedFeatures: [
        "Strategic PPC campaign setup and management",
        "Keyword research and optimization for maximum visibility",
        "Ad copy creation and A/B testing for better conversion",
        "Budget optimization and bid management",
        "Product SEO optimization for organic ranking",
        "Competitor analysis and market research",
        "Performance tracking with detailed analytics",
        "Revenue optimization strategies",
        "Customer acquisition cost optimization",
        "Conversion rate optimization across all touchpoints",
        "Seasonal campaign planning and execution",
        "Multi-platform advertising coordination",
      ],
      timeline: "3-6 months for optimal results",
      revisions: "Continuous optimization",
      deliverables:
        "Campaign setup, Performance reports, ROI analysis, Growth recommendations",
      platforms: ["Amazon Ads", "Flipkart Ads", "Google Ads", "Facebook Ads"],
    },
  ];

  const service = services.find((s) => s.id === parseInt(id || "0"));

  if (!service) {
    return (
      <Suspense fallback={<p>Loading....</p>}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-800 mb-4">
              Service not found
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
                {service.name}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
                {service.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="text-blue-400" size={20} />
                  <span className="text-sm md:text-base">
                    {service.timeline}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-blue-400" size={20} />
                  <span className="text-sm md:text-base">
                    {service.revisions}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-blue-400" size={20} />
                  <span className="text-sm md:text-base">
                    Expert Management
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {service.platforms.map((platform, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={"E-commerce Service"}
                width={800}
                height={600}
                quality={95}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg shadow-2xl w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Explanation Section */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center">
              Understanding Our Service Timeline
            </h2>

            {service.id === 1 ? (
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    🛠️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Complete Account Management
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      Timeline: Ongoing monthly service
                    </p>
                    <p className="text-slate-600 mb-4">
                      {`This is a <strong>continuous, long-term service</strong>{" "}
                      that operates on a <strong>month-to-month basis</strong>.
                      There's no fixed end date — instead, it's a recurring
                      partnership where the service is consistently delivered
                      every month.`}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Month 1 – Onboarding & Setup
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Initial consultation and goal setting</li>
                      <li>• Complete account setup/audit</li>
                      <li>• Optimized product listings upload</li>
                      <li>• Brand storefront design</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Month 2 & Onward – Optimization
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Daily account monitoring</li>
                      <li>• Inventory sync and alerts</li>
                      <li>• Review management</li>
                      <li>• Strategy updates</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Every Month – Reporting
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Monthly performance reports</li>
                      <li>• Campaign and listing reviews</li>
                      <li>• Improvement suggestions</li>
                      <li>• New growth opportunities</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    ✅ This model is ideal for businesses looking for{" "}
                    <strong>hands-free, expert-led account handling</strong>{" "}
                    across multiple e-commerce platforms.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    📈
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Growth & Marketing Services
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      Timeline: 3–6 months for optimal results
                    </p>
                    <p className="text-slate-600 mb-4">
                      This is a <strong>short-to-medium term engagement</strong>{" "}
                      designed to deliver measurable marketing growth. It
                      typically runs for <strong>3 to 6 months</strong>, during
                      which advertising strategies are tested, refined, and
                      scaled.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Week 1–2 – Strategy & Setup
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Market and competitor analysis</li>
                      <li>• PPC campaign setup</li>
                      <li>• Keyword research</li>
                      <li>• SEO audit</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Month 1 – Testing & Optimization
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Launch A/B tested ads</li>
                      <li>• Monitor ROI metrics</li>
                      <li>• SEO adjustments</li>
                      <li>• Performance tracking</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Month 2–3 – Scaling Campaigns
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Scale best-performing ads</li>
                      <li>• Adjust budgets for high-ROI</li>
                      <li>• Integrate customer feedback</li>
                      <li>• Expand reach</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg md:col-span-2 lg:col-span-2">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Month 4–6 – Sustained Growth
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>
                        • Fine-tune ongoing campaigns • Expand into seasonal
                        campaigns
                      </li>
                      <li>
                        • Focus on revenue growth and cost-efficiency • Optimize
                        for long-term success
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Ongoing Options
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Extended retainer model</li>
                      <li>• Continuous optimization</li>
                      <li>• Long-term partnership</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 md:mb-8">
                {`What's Included`}
              </h2>
              <div className="space-y-3 md:space-y-4">
                {service.detailedFeatures.map((feature, index) => (
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
                Service Details
              </h3>

              <div className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Service Duration
                  </h4>
                  <p className="text-slate-600 text-sm md:text-base">
                    {service.timeline}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Optimization
                  </h4>
                  <p className="text-slate-600 text-sm md:text-base">
                    {service.revisions}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Deliverables
                  </h4>
                  <p className="text-slate-600 text-sm md:text-base">
                    {service.deliverables}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Supported Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.platforms.map((platform, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full bg-blue-600 text-white py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 mt-6 md:mt-8 text-sm md:text-base"
              >
                Get Started Today
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
              We follow a proven methodology to ensure your e-commerce success
              and maximize your return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Analysis",
                description:
                  "We analyze your current performance and identify growth opportunities.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We develop a customized strategy tailored to your business goals.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "We execute the strategy with precision and attention to detail.",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "We continuously monitor and optimize for maximum performance.",
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

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              We deliver measurable results that drive your e-commerce growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Target className="text-blue-600" size={48} />,
                title: "Expert Management",
                description:
                  "Our team of certified e-commerce specialists manages your accounts with proven strategies.",
              },
              {
                icon: <TrendingUp className="text-green-600" size={48} />,
                title: "Proven Results",
                description:
                  "We've helped businesses increase their revenue by 150% on average within 6 months.",
              },
              {
                icon: <Award className="text-yellow-600" size={48} />,
                title: "24/7 Support",
                description:
                  "Round-the-clock monitoring and support to ensure your business never misses an opportunity.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Ready to Scale Your E-commerce Business?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
            {`Let's discuss how we can help you achieve your growth goals and maximize your e-commerce potential.`}
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
