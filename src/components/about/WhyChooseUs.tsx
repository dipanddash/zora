import { Link } from "react-router-dom";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="mt-44 mb-36 relative w-full overflow-x-clip">
      {/* Top soft wash */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-x-0 top-0 h-[60%] blur-[90px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(125,69,150,0.14), transparent)",
          }}
        />
      </div>

      {/* Outer glow - CLIPPED to prevent overflow */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden rounded-[44px]">
        <div
          className="absolute -inset-1 blur-2xl opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(42,237,243,0.20), rgba(125,69,150,0.25), rgba(124,58,237,0.18))",
          }}
        />
      </div>

      <div className="relative bg-[#0f0b1d]/75 backdrop-blur-3xl border border-white/10 rounded-[44px] p-8 sm:p-10 md:p-16 shadow-[0_0_90px_rgba(125,69,150,0.18)] overflow-hidden">
        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Top gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-80 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(90deg, #2aedf3, #7d4596, #7c3aed)",
          }}
        />

        <div className="relative">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight break-words">
              <span className="text-white">Why Choose </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #2aedf3 0%, #7d4596 55%, #7c3aed 100%)",
                }}
              >
                Zora Global AI
              </span>
            </h2>

            <p className="mt-5 md:mt-6 text-white/75 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-1">
              Enterprise-grade engineering, AI acceleration, and consulting
              discipline delivered with speed, security, and measurable
              outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "48 Services in 48 Hours",
                desc: "Rapid execution powered by automation frameworks, enabling faster delivery without compromising quality.",
              },
              {
                title: "Enterprise Architecture",
                desc: "Systems designed for scalability, security, performance, and long-term maintainability across industries.",
              },
              {
                title: "AI + Business Strategy",
                desc: "We connect AI engineering with business objectives to deliver transformation that drives measurable value.",
              },
              {
                title: "Security & Governance",
                desc: "Responsible AI, compliance readiness, and secure-by-design practices embedded into every solution.",
              },
              {
                title: "End-to-End Delivery",
                desc: "From discovery and design to deployment and optimization — one partner for the complete lifecycle.",
              },
              {
                title: "Long-Term Partnership",
                desc: "We build relationships, not just projects — supporting teams as systems evolve and scale.",
              },
            ].map((item, index) => (
              <div key={index} className="relative group overflow-visible">
                {/* Card glow - safe */}
                <div
                  className="absolute -inset-1 rounded-[28px] blur-xl opacity-25 group-hover:opacity-55 transition pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(42,237,243,0.55), rgba(125,69,150,0.55), rgba(124,58,237,0.45))",
                  }}
                />

                <div className="relative bg-[#0f0b1d]/55 border border-white/10 backdrop-blur-xl rounded-[28px] p-7 sm:p-8 transform group-hover:-translate-y-2 transition duration-500 overflow-hidden">
                  <div
                    className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-2xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(125,69,150,0.20), transparent 70%)",
                    }}
                  />

                  <h3 className="text-lg sm:text-xl font-extrabold" style={{ color: "#e9d7ff" }}>
                    {item.title}
                  </h3>

                  <p className="text-white/75 text-sm mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                  <div
                    className="mt-6 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #2aedf3, #7d4596, #7c3aed)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white/90">
                Ready to accelerate your transformation?
              </h3>
              <p className="text-white/75 mt-2">
                Explore our services or book a consultation with our experts.
              </p>
            </div>

            {/* Buttons wrap safely on mobile */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link
                to="/services"
                className="relative px-6 py-3 rounded-2xl font-semibold group overflow-hidden w-full sm:w-auto text-center"
              >
                <span
                  className="absolute inset-0 blur-lg opacity-60 group-hover:opacity-100 transition"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(42,237,243,0.85), rgba(125,69,150,0.85), rgba(124,58,237,0.85))",
                  }}
                />
                <span
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #2aedf3 0%, #7d4596 55%, #7c3aed 100%)",
                  }}
                />
                <span className="relative z-10 text-[#140a28]">
                  Explore Services
                </span>
              </Link>

              <Link
                to="/book-appointment"
                className="px-6 py-3 rounded-2xl font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition w-full sm:w-auto text-center"
              >
                Book Appointment →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;