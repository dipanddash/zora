import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { ServiceCategory, ServiceItem } from "../data/itServicesData";
import { IT_HERO_IMAGES } from "../data/itHeroImages";

type Props = {
  category: ServiceCategory;
  backTo: string;
};

const MasterDetailServicePage: React.FC<Props> = ({ category, backTo }) => {
  const navigate = useNavigate();
  const { itemSlug } = useParams();

  const initialItem: ServiceItem =
    category.items.find((i) => i.slug === itemSlug) ?? category.items[0];

  const [selectedSlug, setSelectedSlug] = useState(initialItem.slug);

  // ✅ keep selection in sync if URL changes
  useEffect(() => {
    if (!itemSlug) return;
    setSelectedSlug(itemSlug);
  }, [itemSlug]);

  const selectedItem = useMemo(
    () => category.items.find((i) => i.slug === selectedSlug) ?? category.items[0],
    [category.items, selectedSlug]
  );

  const heroImage = IT_HERO_IMAGES[selectedItem.slug];

  // ✅ scroll helper
  const scrollToTop = () => {
    // handle both window + common scroll containers
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // if your app uses an inner scroll container
    const container =
      document.querySelector<HTMLElement>("#app-scroll") ||
      document.querySelector<HTMLElement>("[data-scroll-container]");
    if (container) container.scrollTop = 0;
  };

  return (
    <section className="relative min-h-screen bg-[#050816] text-white overflow-hidden pt-28 pb-16 px-6">
      {/* Background Glow (UNCHANGED) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-purple-800/25 blur-[180px] rounded-full top-[-260px] left-[-260px]" />
        <div className="absolute w-[850px] h-[850px] bg-blue-700/25 blur-[170px] rounded-full bottom-[-280px] right-[-280px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ================= BREADCRUMB ================= */}
        <div className="text-sm text-gray-400 mb-6">
          <Link to="/services" className="hover:text-purple-300">
            Services
          </Link>
          <span className="mx-2">/</span>
          <Link to={backTo} className="hover:text-purple-300">
            IT Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-200">{category.title}</span>
        </div>

        {/* ================= ✅ CATEGORY HEADER (FIX ADDED) ================= */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            {category.title}
          </h1>

          <p className="mt-4 text-lg text-gray-400 max-w-3xl leading-relaxed">
            {category.desc}
          </p>

          <div className="mt-6 w-24 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        {/* ================= LAYOUT ================= */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT PANEL */}
          <aside className="lg:col-span-4">
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <p className="text-sm text-gray-300">
                  Select a service to view details
                </p>
              </div>

              <div className="p-3 space-y-3">
                {category.items.map((item) => {
                  const active = item.slug === selectedSlug;

                  return (
                    <button
                      key={item.slug}
                      onClick={() => {
                        setSelectedSlug(item.slug);

                        // ✅ FIX: scroll to top when switching item within same route
                        requestAnimationFrame(() => {
                          scrollToTop();
                        });
                      }}
                      className={`w-full text-left rounded-2xl px-6 py-5 transition border ${
                        active
                          ? "bg-gradient-to-r from-blue-600/25 to-purple-600/25 border-white/10"
                          : "bg-[#0b1220]/60 border-white/5 hover:bg-[#0b1220]"
                      }`}
                    >
                      <div className="text-lg font-semibold text-gray-100">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        {item.description}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="p-6 border-t border-white/10">
                <Link
                  to={backTo}
                  className="text-sm text-gray-300 hover:text-purple-300"
                  onClick={() => scrollToTop()} // ✅ optional
                >
                  ← Back to IT Services
                </Link>
              </div>
            </div>
          </aside>

          {/* RIGHT PANEL */}
          <main className="lg:col-span-8 space-y-8">
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden">
              {/* ===== TOP IMAGE BANNER ===== */}
              <div className="relative h-[240px] md:h-[280px]">
                {heroImage && (
                  <img
                    src={heroImage}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/20 via-[#050816]/40 to-[#050816]/90" />
              </div>

              {/* ===== CONTENT ===== */}
              <div className="p-10">
                <p className="text-xs tracking-[0.25em] text-gray-300">
                  ZORA GLOBAL AI
                </p>

                <h2 className="text-3xl md:text-5xl font-extrabold mt-3">
                  {selectedItem.title}
                </h2>

                <p className="text-gray-300 mt-5 text-lg leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Feature Chips */}
                <div className="mt-7 flex flex-wrap gap-3">
                  {selectedItem.features?.map((f, i) => (
                    <span
                      key={i}
                      className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to={`/services/it/${category.slug}/${selectedItem.slug}`}
                    onClick={() => scrollToTop()} // ✅ ensures top on navigation
                    className="px-10 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 font-semibold"
                  >
                    View Service
                  </Link>

                  <Link
                    to="/book-appointment"
                    onClick={() => scrollToTop()} // ✅ ensures top on navigation
                    className="px-10 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 font-semibold"
                  >
                    Book Appointment
                  </Link>

                  <button
                    onClick={() => {
                      scrollToTop(); // ✅ ensure top after back as well
                      navigate(-1);
                    }}
                    className="px-10 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default MasterDetailServicePage;