// src/pages/NonITServices.tsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Business & Strategy Consulting",
    desc: "Strategic advisory services to optimize operations, efficiency, and long-term growth.",
    slug: "business-strategy-consulting",
  },
  {
    title: "Branding & Creative Services",
    desc: "Creative solutions that strengthen brand identity and market presence.",
    slug: "branding-creative-services",
  },
  {
    title: "Accounting & Financial Operations",
    desc: "Reliable financial management and operational accounting services.",
    slug: "accounting-financial-operations",
  },
  {
    title: "Digital Marketing Services",
    desc: "Performance-driven digital marketing and growth strategies.",
    slug: "digital-marketing-services",
  },
  {
    title: "Staff Augmentation & Workforce Solutions",
    desc: "Flexible staffing solutions to help businesses scale non-IT teams quickly with qualified professionals.",
    slug: "staff-augmentation-workforce-solutions",
  },
];

const NonITServices: React.FC = () => {
  // ✅ Keep your existing behavior (not changing logic)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <section className="relative bg-[#050510] text-white min-h-screen overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[700px] h-[700px] bg-indigo-700 opacity-30 blur-[180px] rounded-full top-[-200px] left-[-200px] animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-25 blur-[150px] rounded-full bottom-[-150px] right-[-150px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Background Typography */}
      <h1 className="absolute text-[22vw] sm:text-[18vw] font-black text-white/5 top-24 sm:top-20 left-1/2 -translate-x-1/2 select-none tracking-widest">
        BUSINESS
      </h1>

      <div className="relative max-w-7xl mx-auto pt-24 sm:pt-32 pb-24 sm:pb-32 px-5 sm:px-8">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 sm:mb-24 md:mb-32"
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Elite Business Division
          </h2>

          <div className="w-24 sm:w-32 md:w-40 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 mx-auto mt-6 sm:mt-8 rounded-full" />
        </motion.div>

        {/* Vertical Flow Layout */}
        <div className="space-y-16 sm:space-y-24 md:space-y-40">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={[
                "relative flex justify-center",
                index % 2 === 0 ? "md:justify-start" : "md:justify-end",
              ].join(" ")}
            >
              <div className="relative w-full md:w-2/3">
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-[32px] sm:rounded-[40px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 blur-xl opacity-40" />

                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] sm:rounded-[40px] p-7 sm:p-10 md:p-14 shadow-[0_0_80px_rgba(79,70,229,0.4)] hover:shadow-[0_0_140px_rgba(59,130,246,0.6)] transition duration-700 group">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-300 to-blue-400 bg-clip-text text-transparent">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {service.desc}
                  </p>

                  {/* View More Button */}
                  <div className="mt-7 sm:mt-10">
                    <Link
                      to={`/services/non-it/${service.slug}`}
                      className="inline-block px-7 sm:px-8 py-3 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition duration-500 text-white font-medium"
                    >
                      View more →
                    </Link>
                  </div>

                  {/* Energy Line */}
                  <div className="mt-7 sm:mt-10 h-[2px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-20 animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NonITServices;