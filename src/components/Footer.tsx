import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const MAP_LINK =
    "https://maps.app.goo.gl/277Smp18y4DsdMzz6?g_st=aw";

  return (
    <footer className="bg-[#0b0618] text-gray-300 border-t border-white/10">
      {/* ✅ 5 columns — Company | Solutions | Products aligned */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-5">
        {/* 1️⃣ Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Zora Global AI
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering enterprises with AI-driven solutions, cloud
            transformation, and strategic consulting.
          </p>
        </div>

        {/* 2️⃣ Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
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

        {/* ✅ 3️⃣ Solutions (NOW NEXT TO COMPANY) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/services/it"
                className="hover:text-purple-400 transition"
              >
                IT Services
              </Link>
            </li>
            <li>
              <Link
                to="/services/non-it"
                className="hover:text-purple-400 transition"
              >
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

        {/* 4️⃣ Products */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/products/hrms"
                className="hover:text-purple-400 transition"
              >
                HRMS
              </Link>
            </li>
            <li>
              <Link
                to="/products/crms"
                className="hover:text-purple-400 transition"
              >
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
              <Link
                to="/products/orbileads"
                className="hover:text-purple-400 transition"
              >
                Orbileads
              </Link>
            </li>
          </ul>
        </div>

        {/* 5️⃣ Contact + Map (RIGHT SIDE) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>

          {/* Email */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FaEnvelope className="text-purple-400" />
            <span>info@zoraglobal.ai</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
            <FaPhoneAlt className="text-purple-400" />
            <span>+91 98765 43210</span>
          </div>

          {/* Location link */}
          <div className="mt-3 text-sm">
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition underline"
            >
              View Location on Google Maps
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-purple-400 transition">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              <FaTwitter size={18} />
            </a>
          </div>

          {/* ✅ Map placed like reference screenshot */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="Zora Global AI Location"
              src={`https://www.google.com/maps?output=embed&q=${encodeURIComponent(
                MAP_LINK
              )}`}
              className="w-full h-[220px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zora Global AI Technologies. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;