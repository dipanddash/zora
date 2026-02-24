import React from "react";
import ColorBends from "../ColorBends";

const ServicesHero: React.FC = () => {
  return (
    <section
      className="
        relative left-1/2 w-screen -translate-x-1/2
        min-h-screen overflow-hidden
        -mt-20
      "
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ColorBends
          rotation={45}
          speed={0.2}
          colors={["#ab0d8e", "#3b38cc", "#113e97"]}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-[#020010]/35" />

      {/* Content (push down ONLY the text, not the background) */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6 text-white">
            Advanced Service Architecture
          </h1>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
            Enterprise-grade solutions engineered for high-performance,
            scalable, and secure digital ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;