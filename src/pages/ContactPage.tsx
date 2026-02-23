import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; // ✅ FIXED PATH
import { useForm, ValidationError } from "@formspree/react";

const ContactPage: React.FC = () => {
  // ✅ always start from top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: "contact@zora.com",
      description: "Send us an email anytime!",
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm.",
    },
    {
      icon: "📍",
      title: "Office",
      details: "123 Tech Street, Silicon Valley, CA 94043",
      description: "Come say hello at our HQ.",
    },
  ];

  const [state, handleSubmit] = useForm("xreaoegz");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ✅ Keep Navbar (App.tsx already has Navbar too.
          If you see 2 navbars, remove this one here.)
      */}
      <Navbar />

      <div className="pt-24 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch with our
            experts.
          </p>
        </motion.div>

        {/* ✅ 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* ================= LEFT: FORM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-blue-600/20 to-cyan-600/25 blur-2xl rounded-2xl" />

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-10 rounded-2xl border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Send us a message
              </h2>
              <p className="text-gray-400 mb-8">
                Fill the form and our team will get back to you.
              </p>

              {state.succeeded ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6">
                  <p className="text-emerald-200 font-semibold text-lg">
                    Thanks! Your message has been sent ✅
                  </p>
                  <p className="text-emerald-200/70 mt-2 text-sm">
                    We’ll respond as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/40"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us what you need..."
                      className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400/30 focus:border-purple-400/30"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Sending..." : "Submit"}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to be contacted by Zora Global AI.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* ================= RIGHT: INFO + CTA ================= */}
          <div>
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-8 mb-10"
            >
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{info.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">
                    {info.title}
                  </h3>
                  <p className="text-white font-medium mb-1">{info.details}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-center bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl p-8 md:p-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for a{" "}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Free Consultation
                </span>
                ?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can help your business grow.
                Book a free consultation with our experts.
              </p>
              <a
                href="https://calendly.com/zoraglobalai/30?month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get an Appointment
              </a>
            </motion.div>
          </div>
        </div>

        <div className="h-16" />
      </div>
    </div>
  );
};

export default ContactPage;