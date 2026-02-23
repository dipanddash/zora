import React from "react";
import { useNavigate } from "react-router-dom";

const ITServices: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Website & Web Application Services",
      desc: "Scalable, secure, and high-performance web solutions tailored to modern business needs.",
      slug: "website-web-application-services",
    },
    {
      title: "Mobile Application Development",
      desc: "High-performance mobile applications for Android, iOS, and cross-platform environments.",
      slug: "mobile-application-development",
      featured: true, // ✅ center highlight like reference
    },
    {
      title: "AI & Automation Solutions",
      desc: "Intelligent systems that automate processes and enable data-driven decisions.",
      slug: "ai-automation-solutions",
    },
    {
      title: "Custom Enterprise Software",
      desc: "Enterprise-grade software solutions built for complex business needs.",
      slug: "custom-enterprise-software",
    },
    {
      title: "Cloud & Infrastructure Services",
      desc: "Secure, scalable, and cost-optimized cloud solutions.",
      slug: "cloud-infrastructure-services",
    },
    {
      title: "Cybersecurity Solutions",
      desc: "Comprehensive security strategies to protect digital assets.",
      slug: "cybersecurity-solutions",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#f6f9ff] text-[#08122a] pt-28 pb-24 px-6 overflow-hidden">
      {/* ✅ light grid background like reference */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute -top-64 -left-64 w-[740px] h-[740px] rounded-full bg-blue-300/25 blur-[120px]" />
        <div className="absolute -bottom-72 -right-72 w-[760px] h-[760px] rounded-full bg-indigo-300/25 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-slate-200 text-sm text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Zora Global AI • IT Services
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              IT Services That Scale With Your Business
            </h1>

            <p className="mt-4 text-slate-600 max-w-2xl text-lg leading-relaxed">
              Corporate-grade engineering for web, mobile, AI automation, cloud, and cybersecurity —
              designed for performance, security, and growth.
            </p>
          </div>

          <button
            onClick={() => navigate("/book-appointment")}
            className="w-fit px-6 py-3 rounded-full bg-slate-900 text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            Free Consultation →
          </button>
        </div>

        {/* ✅ Card Grid like reference */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => {
            const featured = (service as any).featured;

            return (
              <div
                key={service.slug}
                className={[
                  "relative rounded-[34px] bg-white border shadow-[0_18px_50px_rgba(2,6,23,0.10)]",
                  featured ? "border-blue-300/70" : "border-slate-200",
                ].join(" ")}
              >
                {/* ✅ dotted pattern ONLY for featured (center) card */}
                {featured && (
                  <div
                    className="absolute inset-0 rounded-[34px] opacity-[0.55] pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(37,99,235,0.22) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                )}

                <div className="relative p-10">
                  <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* button row */}
                  <div className="mt-10 flex justify-start">
                    <button
                      onClick={() => navigate(`/services/it/${service.slug}`)}
                      className={[
                        "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold transition shadow-sm",
                        featured
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-slate-100 text-blue-700 hover:bg-slate-200",
                      ].join(" ")}
                    >
                      View more <span className="translate-y-[1px]">→</span>
                    </button>
                  </div>
                </div>

                {/* subtle hover lift like corporate */}
                <div className="absolute inset-0 rounded-[34px] transition duration-300 hover:shadow-[0_25px_70px_rgba(2,6,23,0.16)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ITServices;