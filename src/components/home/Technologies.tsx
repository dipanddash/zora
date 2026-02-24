import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TECH_STACK = [
  "Amazon Web Services (AWS)",
  "Microsoft Azure",
  "Google Cloud Platform (GCP)",
  "Kubernetes",
  "Firebase",
  "Zora Global AI Intelligence Platform", // ✅ ADDED (company technology)
];

const Technologies: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const tintY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 border-b border-blue-900/40 overflow-hidden isolate"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/backgrounds/technologies-bg.png')",
          y: bgY,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-[#020010]/45" />

      {/* Glow */}
      <motion.div
        className="absolute inset-0 z-[2] pointer-events-none mix-blend-screen opacity-70 will-change-transform"
        style={{
          y: glowY,
          background:
            "radial-gradient(circle at 55% 55%, rgba(255,255,255,0.20), transparent 55%)",
        }}
      />

      {/* Brand Tint */}
      <motion.div
        className="absolute inset-0 z-[3] pointer-events-none opacity-100 will-change-transform"
        style={{
          y: tintY,
          background:
            "radial-gradient(circle at 18% 22%, rgba(125,69,150,0.45), transparent 55%)," +
            "radial-gradient(circle at 85% 70%, rgba(42,237,243,0.35), transparent 60%)," +
            "linear-gradient(to bottom, rgba(2,0,16,0.15), rgba(2,0,16,0.55))",
        }}
      />

      {/* Depth */}
      <div className="absolute inset-0 z-[4] pointer-events-none backdrop-blur-[0.6px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-6">
          Built on a Foundation of Trusted Technologies
        </h2>

        <p className="text-gray-200/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Built on a foundation of trusted technologies and modern engineering
          excellence.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((tool) => (
            <div
              key={tool}
              className="
                group relative
                rounded-2xl
                border border-blue-900/40
                bg-[#0b1220]/55
                backdrop-blur-2xl
                px-6 py-7
                shadow-[0_18px_40px_rgba(0,0,0,0.45)]
                hover:border-[#2aedf3]/50
                hover:bg-[#0b1220]/62
                transition-all duration-300
              "
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(42,237,243,0.20), 0 0 50px rgba(125,69,150,0.18)",
                }}
              />

              <p className="relative text-blue-100 font-semibold tracking-wide">
                {tool}
              </p>

              <p className="relative mt-2 text-xs text-gray-200/70">
                Secure • Scalable • Modern
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;