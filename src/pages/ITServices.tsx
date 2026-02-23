// src/pages/ITServices.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IT_SERVICE_CATEGORIES } from "../data/itServicesData";

const ITServices: React.FC = () => {
  const navigate = useNavigate();

  // ✅ Always open page from TOP
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // change to "smooth" if you want animation
    });
  }, []);

  // ✅ active selected card highlight
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-[#050816] text-white overflow-hidden pt-28 pb-24 px-6">
      {/* ===== DARK CORPORATE BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-60 -left-60 w-[800px] h-[800px] bg-[#7d4596]/30 blur-[180px] rounded-full" />
        <div className="absolute -bottom-60 -right-60 w-[800px] h-[800px] bg-[#2aedf3]/20 blur-[180px] rounded-full" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:80px_80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            <span className="bg-gradient-to-r from-[#2aedf3] to-[#7d4596] bg-clip-text text-transparent">
              IT Services
            </span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg">
            Explore enterprise-grade solutions designed for scalability,
            performance, and intelligent automation.
          </p>
        </div>

        {/* ===== ADVANCED CORPORATE GRID WRAPPER ===== */}
        <div className="relative">
          {/* decorative grid atmosphere */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,237,243,0.08),transparent_65%)]" />

            <div
              className="absolute inset-0 opacity-[0.05]
              bg-[linear-gradient(135deg,white_1px,transparent_1px)]
              bg-[size:60px_60px]"
            />

            <div className="absolute top-0 left-0 w-96 h-96 bg-[#7d4596]/20 blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2aedf3]/20 blur-[140px]" />
          </div>

          {/* actual grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 relative">
            {IT_SERVICE_CATEGORIES.map((cat) => {
              const isActive = activeSlug === cat.slug;

              return (
                <div
                  key={cat.slug}
                  className={[
                    "relative overflow-hidden rounded-3xl backdrop-blur-xl p-10 transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-br from-[#7d4596]/40 to-[#2aedf3]/30 border border-[#2aedf3] shadow-[0_0_60px_rgba(45,237,243,0.35)]"
                      : "bg-white/5 border border-white/10 hover:border-[#7d4596]/60 hover:shadow-[0_0_50px_rgba(125,69,150,0.25)]",
                  ].join(" ")}
                >
                  {/* light sweep */}
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700
                    bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]
                    translate-x-[-120%] hover:translate-x-[120%]"
                  />

                  {/* Title */}
                  <h3
                    className={[
                      "relative text-2xl font-bold mb-4",
                      isActive
                        ? "text-[#2aedf3]"
                        : "bg-gradient-to-r from-[#2aedf3] to-[#7d4596] bg-clip-text text-transparent",
                    ].join(" ")}
                  >
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="relative text-gray-400 leading-relaxed">
                    {cat.desc}
                  </p>

                  {/* View More Button */}
                  <button
                    onClick={() => {
                      setActiveSlug(cat.slug);
                      navigate(`/services/it/${cat.slug}`);
                    }}
                    className={[
                      "relative mt-8 px-7 py-3 rounded-full font-semibold transition-all duration-300",
                      isActive
                        ? "bg-gradient-to-r from-[#2aedf3] to-[#7d4596] text-black shadow-lg"
                        : "bg-white/10 text-[#2aedf3] hover:bg-[#7d4596]/30",
                    ].join(" ")}
                  >
                    View more →
                  </button>

                  {/* bottom glow line */}
                  <div
                    className={[
                      "relative mt-6 h-[2px] transition-all duration-500",
                      isActive
                        ? "w-full bg-gradient-to-r from-[#2aedf3] to-[#7d4596]"
                        : "w-0",
                    ].join(" ")}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2aedf3] to-[#7d4596] bg-clip-text text-transparent">
            Built for Enterprise Innovation
          </h2>

          <button
            onClick={() => navigate("/book-appointment")}
            className="mt-8 px-8 py-3 rounded-full font-semibold
            bg-gradient-to-r from-[#2aedf3] to-[#7d4596]
            text-black shadow-[0_0_40px_rgba(45,237,243,0.35)]
            hover:scale-105 transition"
          >
            Book Appointment →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ITServices;