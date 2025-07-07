// "use client";
// import type React from "react";
// import { Star, Users, Award } from "lucide-react";
// import { motion } from "motion/react";
// import Image from "next/image";

// const Hero: React.FC = () => {
//   const scrollToProducts = () => {
//     const element = document.querySelector("#products");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div
//       id="home"
//       className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight ">
//             Turn Your Products
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
//               Into Profit Machines
//             </span>
//           </h1>

//           <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto px-4">
//             We handle your complete E-commerce journey on Amazon, Flipkart,
//             Myntra & Ajio and More. You focus on business, we deliver sales.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
//             <button
//               onClick={scrollToProducts}
//               className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
//             >
//               Explore Our Services
//             </button>
//           </div>

//           <div className="mx-auto px-4 text-white">
//             <h4 className="text-xl font-semibold mb-8">
//               We Connect Your Business With Potential Buyers
//             </h4>
//             <div className="grid grid-cols-5 gap-4 items-center justify-items-center max-w-4xl mx-auto mb-10">
//               <div className="flex items-center justify-center h-12 w-20">
//                 <Image
//                   src="https://cdn.brandfetch.io/idawOgYOsG/w/800/h/268/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
//                   alt="Amazon Logo"
//                   width={60}
//                   height={20}
//                   className="object-contain"
//                   unoptimized
//                 />
//               </div>

//               <div className="flex items-center justify-center h-12 w-20">
//                 <Image
//                   src="https://cdn.brandfetch.io/idHyb4lJuH/w/820/h/206/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
//                   alt="Flipkart Logo"
//                   width={70}
//                   height={18}
//                   className="object-contain"
//                   unoptimized
//                 />
//               </div>

//               <div className="flex items-center justify-center h-12 w-20">
//                 <Image
//                   src="https://cdn.brandfetch.io/idDW82Qwj2/w/820/h/359/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
//                   alt="Myntra Logo"
//                   width={55}
//                   height={24}
//                   className="object-contain"
//                   unoptimized
//                 />
//               </div>

//               <div className="flex items-center justify-center h-12 w-20">
//                 <Image
//                   src="https://cdn.brandfetch.io/idr5xgDFc2/w/820/h/238/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
//                   alt="Ajio Logo"
//                   width={50}
//                   height={15}
//                   className="object-contain"
//                   unoptimized
//                 />
//               </div>

//               <div className="flex items-center justify-center h-12 w-20">
//                 <Image
//                   src="https://cdn.brandfetch.io/idyeTDctmi/w/200/h/64/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
//                   alt="Nykaa Logo"
//                   width={50}
//                   height={16}
//                   className="object-contain"
//                   unoptimized
//                 />
//               </div>

//               <div className="flex items-center justify-center h-12 w-20">
//                 <Image
//                   src="https://cdn.brandfetch.io/idRILRSTEh/w/820/h/485/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
//                   alt="Meesho Logo"
//                   width={45}
//                   height={27}
//                   className="object-contain"
//                   unoptimized
//                 />
//               </div>

//               <div className="flex items-center justify-center h-12 w-20">
//                 <Image
//                   src="https://cdn.brandfetch.io/id4jmFAu-B/w/820/h/204/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
//                   alt="Shopify Logo"
//                   width={65}
//                   height={16}
//                   className="object-contain"
//                   unoptimized
//                 />
//               </div>

//               <div className="flex items-center justify-center h-12 w-20">
//                 <Image
//                   src="https://cdn.brandfetch.io/idFqbkpSwN/w/360/h/111/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
//                   alt="Paytm Logo"
//                   width={60}
//                   height={18}
//                   className="object-contain"
//                   unoptimized
//                 />
//               </div>

//               <div className="flex items-center justify-center h-12 w-20">
//                 <Image
//                   src="https://cdn.brandfetch.io/id5gQ3AGLd/w/113/h/41/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
//                   alt="Snapdeal Logo"
//                   width={60}
//                   height={22}
//                   className="object-contain"
//                   unoptimized
//                 />
//               </div>

//               <div className="flex items-center justify-center h-12 w-20">
//                 <Image
//                   src="/jiomart.png"
//                   alt="JioMart Logo"
//                   width={60}
//                   height={24}
//                   className="object-contain"
//                   unoptimized
//                 />
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";
import type React from "react";
import { motion } from "motion/react";
import Image from "next/image";

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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
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
            We handle your complete E-commerce journey on Amazon, Flipkart,
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

          <div className="mx-auto px-4 text-white">
            <h4 className="text-md md:text-xl font-semibold mb-8">
              We Connect Your Business With Potential Buyers
            </h4>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 items-center justify-items-center max-w-4xl mx-auto mb-10">
              {/* Each logo now has a consistent light background */}
              <div className="flex items-center justify-center h-12 w-20 bg-white backdrop-blur-sm rounded-lg p-1">
                <Image
                  src="https://cdn.brandfetch.io/idawOgYOsG/w/800/h/268/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
                  alt="Amazon Logo"
                  width={60}
                  height={20}
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="flex items-center justify-center h-12 w-20 bg-white backdrop-blur-sm rounded-lg p-1 ">
                <Image
                  src="https://cdn.brandfetch.io/idHyb4lJuH/w/820/h/206/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
                  alt="Flipkart Logo"
                  width={70}
                  height={48}
                  className="mr-7"
                  unoptimized
                />
              </div>

              <div className="flex items-center justify-center h-12 w-20 bg-white backdrop-blur-sm rounded-lg p-1">
                <Image
                  src="https://cdn.brandfetch.io/idDW82Qwj2/w/820/h/359/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
                  alt="Myntra Logo"
                  width={55}
                  height={24}
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="flex items-center justify-center h-12 w-20 bg-white backdrop-blur-sm rounded-lg p-1">
                <Image
                  src="https://cdn.brandfetch.io/idr5xgDFc2/w/820/h/238/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
                  alt="Ajio Logo"
                  width={50}
                  height={15}
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="flex items-center justify-center h-12 w-20 bg-white backdrop-blur-sm rounded-lg p-1">
                <Image
                  src="https://cdn.brandfetch.io/idyeTDctmi/w/200/h/64/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
                  alt="Nykaa Logo"
                  width={50}
                  height={16}
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="flex items-center justify-center h-12 w-20 bg-white backdrop-blur-sm rounded-lg p-1">
                <Image
                  src="https://cdn.brandfetch.io/idRILRSTEh/w/820/h/485/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
                  alt="Meesho Logo"
                  width={45}
                  height={27}
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="flex items-center justify-center h-12 w-20 bg-white backdrop-blur-sm rounded-lg p-1">
                <Image
                  src="https://cdn.brandfetch.io/id4jmFAu-B/w/820/h/204/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
                  alt="Shopify Logo"
                  width={65}
                  height={16}
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="flex items-center justify-center h-12 w-20 bg-white backdrop-blur-sm rounded-lg p-1">
                <Image
                  src="https://cdn.brandfetch.io/idFqbkpSwN/w/360/h/111/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
                  alt="Paytm Logo"
                  width={60}
                  height={18}
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="flex items-center justify-center h-12 w-20 bg-white backdrop-blur-sm rounded-lg p-1">
                <Image
                  src="https://cdn.brandfetch.io/id5gQ3AGLd/w/113/h/41/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
                  alt="Snapdeal Logo"
                  width={60}
                  height={22}
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="flex items-center justify-center h-12 w-20 bg-white backdrop-blur-sm rounded-lg p-1 col-start-2 md:col-start-auto">
                <Image
                  src="/jiomart.png"
                  alt="JioMart Logo"
                  width={60}
                  height={24}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
