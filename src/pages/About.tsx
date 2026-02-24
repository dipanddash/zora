// src/pages/About.tsx
import React, { useEffect } from "react";
import {
  AboutHero,
  WhoWeAre,
  PremiumStats,
  OurCulture,
  LongTermVision,
  WhyChooseUs,
  Leadership,
} from "../components/about";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <section className="relative min-h-screen bg-[#140a28] text-white overflow-x-hidden">
      {/* ✅ Background system for the whole page (behind everything) */}
      <div
        className="absolute inset-0 -z-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 12% 18%, rgba(42,237,243,0.16), transparent 46%),
            radial-gradient(circle at 88% 12%, rgba(125,69,150,0.18), transparent 45%),
            radial-gradient(circle at 52% 90%, rgba(124,58,237,0.14), transparent 55%)
          `,
        }}
      />

      <div
        className="absolute top-0 left-1/2 w-[900px] h-[900px] -translate-x-1/2 blur-[190px] rounded-full animate-[spin_55s_linear_infinite] -z-30"
        style={{
          background:
            "radial-gradient(circle, rgba(125,69,150,0.22), transparent 62%)",
        }}
      />

      <div className="absolute inset-0 -z-30 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* ✅ Fullscreen Animated Hero */}
      <AboutHero />

      {/* ✅ Rest of the page (content sections) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-28">
        <WhoWeAre />
        <PremiumStats />
        <OurCulture />
        <LongTermVision />
        <WhyChooseUs />
        <Leadership />
      </div>
    </section>
  );
};

export default About;