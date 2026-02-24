import React from "react";
import { Link } from "react-router-dom";
import FloatingLines from "../FloatingLines";

const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center text-center overflow-hidden">
      {/* ✅ FULLSCREEN ANIMATION LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full will-change-transform">
          <FloatingLines
            linesGradient={["#E945F5", "#2F4BC0", "#E945F5"]}
            animationSpeed={1}
            interactive
            bendRadius={5}
            bendStrength={-0.5}
            mouseDamping={0.05}
            parallax
            parallaxStrength={0.2}
          />
        </div>

        {/* optional soft overlay so lines look premium */}
        <div className="absolute inset-0 bg-[#140a28]/40 pointer-events-none" />
      </div>

      {/* ✅ HERO DEPTH GLOW (above lines, behind text) */}
      <div className="absolute inset-0 z-10 flex justify-center pointer-events-none">
        <div
          className="w-[980px] h-[540px] blur-[150px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(42,237,243,0.14), transparent 65%)",
          }}
        />
      </div>

      {/* ✅ CONTENT (top layer) */}
      <div className="relative z-20 px-6 max-w-6xl mx-auto">
        <h1 className="mt-6 text-6xl md:text-8xl font-black leading-tight tracking-tight">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #2aedf3 0%, #7d4596 55%, #7c3aed 100%)",
            }}
          >
            Redefining Intelligence
          </span>
        </h1>

        <p className="mt-8 text-white/80 text-xl max-w-4xl mx-auto leading-relaxed">
          Zora Global AI engineers intelligent digital ecosystems that merge
          artificial intelligence, cloud infrastructure, and enterprise strategy
          into one seamless transformation platform.
        </p>

        <div className="mt-12 flex justify-center gap-8 flex-wrap">
          <Link
            to="/services"
            className="relative px-10 py-4 rounded-2xl font-semibold group overflow-hidden"
          >
            <span
              className="absolute inset-0 blur-lg opacity-60 group-hover:opacity-95 transition"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(42,237,243,0.9), rgba(125,69,150,0.9), rgba(124,58,237,0.9))",
              }}
            />
            <span
              className="absolute inset-0 rounded-2xl"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #2aedf3 0%, #7d4596 55%, #7c3aed 100%)",
              }}
            />
            <span className="relative z-10 text-[#140a28]">Explore Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;