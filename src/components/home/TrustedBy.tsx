import React from "react";

const TRUSTED_BY = [
  "Digital Innovators",
  "Global Finance",
  "Healthcare Systems",
  "Smart Manufacturing",
  "E-Commerce Leaders",
  "SaaS Platforms",
  "Data-Driven Enterprises",
  "Logistics Networks",
  "Cybersecurity Organizations",
  "Business Consultants",
  "Financial Operations Teams",
  "Growing Startups",
  "Corporate Enterprises",
  "Marketing Innovators",
  "Creative Brands",
  "HR & Workforce Leaders",
  "Accounting Professionals",
  "Strategy-Driven Organizations",
  "Service-Based Businesses",
];

const TrustedBy: React.FC = () => {
  // ✅ duplicate list for seamless marquee
  const items = [...TRUSTED_BY, ...TRUSTED_BY];

  return (
    <section className="relative py-24 px-6 border-b border-blue-900/40 overflow-hidden isolate">
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/backgrounds/trusted-bg.png')" }}
      />

      {/* ✅ Lighter dark overlay */}
      <div className="absolute inset-0 z-[1] bg-[#020010]/45" />

      {/* ✅ Highlight boost */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none mix-blend-screen opacity-65"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, rgba(255,255,255,0.18), transparent 55%)",
        }}
      />

      {/* ✅ Stronger Brand tint overlay */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 22% 20%, rgba(125,69,150,0.45), transparent 55%)," +
            "radial-gradient(circle at 85% 72%, rgba(42,237,243,0.35), transparent 60%)," +
            "linear-gradient(to bottom, rgba(2,0,16,0.10), rgba(2,0,16,0.45))",
        }}
      />

      {/* ✅ Smaller blur */}
      <div className="absolute inset-0 z-[4] pointer-events-none backdrop-blur-[0.6px]" />

      {/* ✅ Keyframes */}
      <style>{`
        @keyframes zora-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* ✅ Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-purple-400 mb-4">
          Trusted By Forward-Thinking Enterprises
        </h2>

        <p className="text-gray-200/85 max-w-3xl mx-auto mb-14 leading-relaxed">
          Teams that value reliability, security, and scalable engineering choose
          us to build systems that grow with their business.
        </p>

        {/* ✅ Marquee (FULLY FIXED) */}
        <div
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          {/* edge fade (kept as visual polish) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020010] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#020010] to-transparent z-10" />

          {/* ✅ Track */}
          <div
            className="
              flex w-max gap-3 px-6
              [animation:zora-marquee_30s_linear_infinite]
              hover:[animation-play-state:paused]
            "
          >
            {items.map((item, idx) => (
              <div
                key={`${item}-${idx}`}
                className="
                  px-5 py-3 rounded-full
                  border border-blue-900/40
                  bg-[#0e1626]/70
                  text-blue-100
                  font-semibold text-sm tracking-wide
                  whitespace-nowrap
                  hover:border-[#2aedf3]/55
                  transition-colors duration-300
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;