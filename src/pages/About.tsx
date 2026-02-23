import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  // ✅ Always start from top when About page opens
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // change to "smooth" if you want
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-[#140a28] text-white overflow-hidden">
      {/* ================= BACKGROUND SYSTEM (PURPLE + CYAN THEME) ================= */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 12% 18%, rgba(42,237,243,0.16), transparent 46%),
            radial-gradient(circle at 88% 12%, rgba(125,69,150,0.18), transparent 45%),
            radial-gradient(circle at 52% 90%, rgba(124,58,237,0.14), transparent 55%)
          `,
        }}
      />

      <div
        className="absolute top-0 left-1/2 w-[900px] h-[900px] -translate-x-1/2 blur-[190px] rounded-full animate-[spin_55s_linear_infinite]"
        style={{
          background:
            "radial-gradient(circle, rgba(125,69,150,0.22), transparent 62%)",
        }}
      />

      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32">
        {/* ================= HERO ================= */}
        <div className="relative text-center mb-36">
          {/* hero depth glow */}
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div
              className="w-[980px] h-[540px] blur-[150px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(42,237,243,0.14), transparent 65%)",
              }}
            />
          </div>

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
            artificial intelligence, cloud infrastructure, and enterprise
            strategy into one seamless transformation platform.
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
              <span className="relative z-10 text-[#140a28]">
                Explore Services
              </span>
            </Link>
          </div>
        </div>

        {/* ================= WHO WE ARE ================= */}
        <div className="relative mb-44">
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-24 w-[70%] h-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent, rgba(42,237,243,0.35), transparent)",
            }}
          />

          <div
            className="absolute -inset-1 rounded-[40px] blur-2xl opacity-35"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(42,237,243,0.18), rgba(125,69,150,0.20), rgba(124,58,237,0.10))",
            }}
          />

          <div className="relative bg-[#121026]/70 backdrop-blur-3xl border border-white/10 rounded-[40px] p-16 shadow-[0_0_70px_rgba(125,69,150,0.18)]">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-bold">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #2aedf3 0%, #7d4596 70%, #7c3aed 100%)",
                    }}
                  >
                    Who We Are
                  </span>
                </h2>

                <p className="text-white/80 text-lg leading-relaxed">
                  At <strong>Zora Global AI Technologies Pvt Ltd</strong>, we
                  provide{" "}
                  <strong>
                    48 professional services delivered within 48 hours
                  </strong>{" "}
                  using intelligent AI automation frameworks designed to ensure
                  fast, accurate, and complete end-to-end business solutions.
                </p>

                <p className="text-white/75 leading-relaxed">
                  Our approach integrates advanced artificial intelligence,
                  enterprise automation, and strategic consulting to help
                  organizations scale efficiently while maintaining operational
                  clarity and measurable business outcomes.
                </p>

                <div className="pt-4 flex flex-wrap gap-3">
                  {["Delivery Speed", "Security by Design", "Outcome Focused"].map(
                    (t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/75"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="space-y-8">
                {[
                  "AI & Machine Learning Systems",
                  "Enterprise Automation Architecture",
                  "Cloud-Native Infrastructure",
                  "Strategic Digital Consulting",
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div
                      className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-50 transition"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(42,237,243,0.45), rgba(125,69,150,0.40), rgba(124,58,237,0.35))",
                      }}
                    />
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl transform group-hover:scale-[1.03] transition duration-500">
                      <div className="flex items-center gap-3">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: "#2aedf3" }}
                        />
                        <span className="text-white/85">{item}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= PREMIUM STATS ================= */}
        <div className="relative mb-44">
          <div
            className="absolute inset-0 -z-10 rounded-[48px] blur-[80px]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(42,237,243,0.10), rgba(125,69,150,0.10), rgba(124,58,237,0.08))",
            }}
          />

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { number: "150+", label: "Enterprise Clients" },
              { number: "400+", label: "AI Projects Delivered" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "24/7", label: "Global Operations" },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div
                  className="absolute -inset-1 rounded-3xl blur opacity-20 group-hover:opacity-45 transition"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(42,237,243,0.45), rgba(125,69,150,0.45), rgba(124,58,237,0.35))",
                  }}
                />
                <div className="relative bg-[#0f0b1d]/70 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 text-center transform group-hover:-translate-y-2 transition duration-500">
                  <h3 className="text-6xl font-extrabold">
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #2aedf3 0%, #7d4596 55%, #7c3aed 100%)",
                      }}
                    >
                      {stat.number}
                    </span>
                  </h3>
                  <p className="text-white/75 mt-4">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= OUR CULTURE ================= */}
        <div className="mt-44 relative">
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute left-[-10%] top-20 w-[620px] h-[620px] blur-[190px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(42,237,243,0.12), transparent 65%)",
              }}
            />
            <div
              className="absolute right-[-10%] bottom-0 w-[620px] h-[620px] blur-[190px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(125,69,150,0.14), transparent 65%)",
              }}
            />
          </div>

          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #2aedf3 0%, #7d4596 70%, #7c3aed 100%)",
                }}
              >
                Our Culture
              </span>
            </h2>

            <p className="text-white/75 mt-6 max-w-3xl mx-auto leading-relaxed">
              We operate with technical rigor, architectural clarity, and a bias
              toward measurable execution. Innovation at Zora Global AI is
              intentional — driven by research, discipline, and accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
            {[
              {
                title: "Deep Technical Ownership",
                desc: "Engineering responsibility and precision guide every solution we build.",
              },
              {
                title: "Executive-Level Thinking",
                desc: "Technology decisions aligned directly with business strategy.",
              },
              {
                title: "Long-Term Partnerships",
                desc: "We grow with clients through sustained collaboration and trust.",
              },
              {
                title: "Responsible AI Governance",
                desc: "Security, ethics, and compliance embedded into every AI system.",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div
                  className="absolute -inset-1 rounded-[28px] blur-xl opacity-25 group-hover:opacity-55 transition duration-500"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(42,237,243,0.55), rgba(125,69,150,0.50), rgba(124,58,237,0.45))",
                  }}
                />

                <div className="relative bg-[#0f0b1d]/55 border border-white/10 backdrop-blur-3xl rounded-[28px] p-8 overflow-hidden transform transition duration-500 group-hover:-translate-y-3">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[linear-gradient(120deg,transparent,rgba(42,237,243,0.12),transparent)] translate-x-[-120%] group-hover:translate-x-[120%]" />

                  <div className="relative mb-6 inline-flex items-center gap-2">
                    <span
                      className="text-sm font-semibold tracking-wider"
                      style={{ color: "#2aedf3" }}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className="h-[1px] w-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(42,237,243,0.95), rgba(125,69,150,0.55), transparent)",
                      }}
                    />
                  </div>

                  <h3
                    className="relative text-xl font-extrabold"
                    style={{ color: "#e9d7ff" }}
                  >
                    {item.title}
                  </h3>

                  <p className="relative text-white/75 mt-4 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  <div
                    className="relative mt-6 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #2aedf3, #7d4596, #7c3aed)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= LONG TERM VISION ================= */}
        <div className="mt-40 text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-8">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #2aedf3 0%, #7d4596 55%, #7c3aed 100%)",
              }}
            >
              Building for the Next Decade
            </span>
          </h2>

          <p className="text-white/75 text-lg leading-relaxed">
            Our long-term focus is on adaptive AI ecosystems capable of evolving
            alongside technological advancements, regulatory shifts, and
            enterprise complexity. We design systems that are future-ready by
            architecture — not by trend.
          </p>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="mt-44 mb-36 relative">
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-x-0 top-0 h-[60%] blur-[90px]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(125,69,150,0.14), transparent)",
              }}
            />
          </div>

          <div
            className="absolute -inset-1 rounded-[44px] blur-2xl opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(42,237,243,0.20), rgba(125,69,150,0.25), rgba(124,58,237,0.18))",
            }}
          />

          <div className="relative bg-[#0f0b1d]/75 backdrop-blur-3xl border border-white/10 rounded-[44px] p-10 md:p-16 shadow-[0_0_90px_rgba(125,69,150,0.18)] overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.10]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />

            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-80"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #2aedf3, #7d4596, #7c3aed)",
              }}
            />

            <div className="relative">
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black tracking-tight">
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

                <p className="mt-6 text-white/75 text-lg max-w-3xl mx-auto leading-relaxed">
                  Enterprise-grade engineering, AI acceleration, and consulting
                  discipline — delivered with speed, security, and measurable
                  outcomes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  <div key={index} className="relative group">
                    <div
                      className="absolute -inset-1 rounded-[28px] blur-xl opacity-25 group-hover:opacity-55 transition"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(42,237,243,0.55), rgba(125,69,150,0.55), rgba(124,58,237,0.45))",
                      }}
                    />

                    <div className="relative bg-[#0f0b1d]/55 border border-white/10 backdrop-blur-xl rounded-[28px] p-8 transform group-hover:-translate-y-2 transition duration-500 overflow-hidden">
                      <div
                        className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-2xl"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(125,69,150,0.20), transparent 70%)",
                        }}
                      />

                      <h3
                        className="text-xl font-extrabold"
                        style={{ color: "#e9d7ff" }}
                      >
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

              <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white/90">
                    Ready to accelerate your transformation?
                  </h3>
                  <p className="text-white/75 mt-2">
                    Explore our services or book a consultation with our experts.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Link
                    to="/services"
                    className="relative px-6 py-3 rounded-2xl font-semibold group overflow-hidden"
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
                    className="px-6 py-3 rounded-2xl font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    Book Appointment →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FOUNDERS (KEEP PURPLE) ================= */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Meet Our <span className="text-purple-400">Leadership</span>
            </h2>

            <p className="text-purple-200 mt-4 max-w-2xl mx-auto">
              Vision-driven leaders shaping the future of AI innovation,
              enterprise transformation, and global digital growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-purple-700 rounded-[32px] blur-2xl opacity-20 group-hover:opacity-40 transition" />

              <div className="relative bg-[#1b1033]/90 backdrop-blur-3xl border border-purple-700/30 rounded-[32px] p-10 text-center transform group-hover:-translate-y-3 transition duration-500 shadow-[0_0_40px_rgba(124,58,237,0.25)]">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-purple-600/40 blur-2xl rounded-full" />

                  <img
                    src="/founders/ceo.jpg"
                    alt="CEO"
                    className="relative w-full h-full object-cover rounded-full border border-purple-500/40"
                  />
                </div>

                <h3 className="text-2xl font-bold">CEO Name</h3>
                <p className="text-purple-400 mb-4">Chief Executive Officer</p>

                <p className="text-purple-200 text-sm leading-relaxed">
                  Driving strategic vision and innovation while leading
                  enterprise AI transformation through scalable intelligent
                  systems and future-focused technology leadership.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-purple-700 rounded-[32px] blur-2xl opacity-20 group-hover:opacity-40 transition" />

              <div className="relative bg-[#1b1033]/90 backdrop-blur-3xl border border-purple-700/30 rounded-[32px] p-10 text-center transform group-hover:-translate-y-3 transition duration-500 shadow-[0_0_40px_rgba(124,58,237,0.25)]">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-purple-600/40 blur-2xl rounded-full" />

                  <img
                    src="/founders/md.jpg"
                    alt="Managing Director"
                    className="relative w-full h-full object-cover rounded-full border border-purple-500/40"
                  />
                </div>

                <h3 className="text-2xl font-bold">Managing Director Name</h3>
                <p className="text-purple-400 mb-4">Managing Director</p>

                <p className="text-purple-200 text-sm leading-relaxed">
                  Leads operational excellence and execution strategy, ensuring
                  delivery precision, innovation continuity, and long-term
                  enterprise partnerships.
                </p>
              </div>
            </div>
          </div>

          <div className="h-10" />
        </div>
      </div>
    </section>
  );
};

export default About;