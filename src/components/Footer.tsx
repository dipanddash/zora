import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const MAP_LINK = "https://maps.app.goo.gl/277Smp18y4DsdMzz6?g_st=aw";
  const MAP_QUERY = "Zora Global AI Technologies Chennai";

  return (
    <footer className="relative isolate mt-auto bg-[#0b0618] text-gray-300 border-t border-white/10">

      {/* Top glow divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        {/* ✅ MAIN GRID */}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-10">

          {/* ================================================= */}
          {/* 1️⃣ Company + Contact (NOW SPANS 2 COLUMNS ✅) */}
          {/* ================================================= */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              Zora Global AI
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-md">
              Empowering enterprises with AI-driven solutions, cloud
              transformation, and strategic consulting.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">
              Contact
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <FaEnvelope className="text-purple-400" />
                <span>info@zoraglobal.ai</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <FaPhoneAlt className="text-purple-400" />
                <span>+91 98765 43210</span>
              </div>

              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-purple-400 transition underline underline-offset-4"
              >
                View Location on Google Maps
              </a>

              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="hover:text-purple-400 transition">
                  <FaLinkedinIn size={18} />
                </a>
                <a href="#" className="hover:text-purple-400 transition">
                  <FaTwitter size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* 2️⃣ Links Wrapper (NOW SPANS 2 COLUMNS ✅) */}
          {/* ================================================= */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="hover:text-purple-400 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-purple-400 transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-purple-400 transition">
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Solutions
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/services/it" className="hover:text-purple-400 transition">
                    IT Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/non-it" className="hover:text-purple-400 transition">
                    Non-IT Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/book-appointment"
                    className="hover:text-purple-400 transition"
                  >
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4">
                Products
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/products/hrms" className="hover:text-purple-400 transition">
                    HRMS
                  </Link>
                </li>
                <li>
                  <Link to="/products/crms" className="hover:text-purple-400 transition">
                    CRMS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/messaging-applications"
                    className="hover:text-purple-400 transition"
                  >
                    Messaging Applications
                  </Link>
                </li>
                <li>
                  <Link to="/products/orbileads" className="hover:text-purple-400 transition">
                    Orbileads
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* ================================================= */}
          {/* 5️⃣ Location */}
          {/* ================================================= */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Location
            </h3>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <iframe
                title="Zora Global AI Location"
                src={`https://www.google.com/maps?output=embed&q=${encodeURIComponent(
                  MAP_QUERY
                )}`}
                className="w-full h-[220px] sm:h-[240px] lg:h-[200px]"
                loading="lazy"
              />
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Zora Global AI Technologies, Chennai
            </p>

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition"
            >
              View on Google Maps ➜
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zora Global AI Technologies. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;