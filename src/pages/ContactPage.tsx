import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage: React.FC = () => {
  // ✅ Always start from top
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
    <div className="bg-black text-white">
      <div className="pt-24 px-4 md:px-6 max-w-7xl mx-auto pb-24 md:pb-0">

        {/* ================= HEADER ================= */}
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

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ---------- LEFT : FORM ---------- */}
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
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name */}
                  <Input label="Full Name" name="name" placeholder="Your full name" />

                  {/* Phone */}
                  <Input label="Phone Number" name="phone" placeholder="Enter Your number" />

                  {/* Email */}
                  <div>
                    <Label>Email Address</Label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email address"
                      className={inputStyle}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  {/* Message */}
                  <div>
                    <Label>Message</Label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us what you need..."
                      className={inputStyle}
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  {/* ✅ Smaller Submit Button */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="
                      w-full
                      bg-gradient-to-r from-purple-600 to-blue-600
                      hover:from-purple-700 hover:to-blue-700
                      font-semibold
                      text-sm
                      py-2.5
                      rounded-lg
                      transition-all
                    "
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

          {/* ---------- RIGHT : INFO + CTA ---------- */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-8 mb-10"
            >
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-purple-500/20"
                >
                  <div className="text-3xl mb-4">{info.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">
                    {info.title}
                  </h3>
                  <p className="text-white font-medium">{info.details}</p>
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

              <p className="text-gray-300 mb-8">
                Let's discuss how our AI solutions can help your business grow.
              </p>

              <a
                href="https://calendly.com/zoraglobalai/30?month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg"
              >
                Get an Appointment
              </a>
            </motion.div>
          </div>
        </div>

        {/* Footer spacing */}
        <div className="mt-16 hidden md:block">
          <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="h-16" />
        </div>
      </div>
    </div>
  );
};

/* ---------- Helpers ---------- */

const inputStyle =
  "w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400/30";

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-sm font-medium text-gray-300 mb-2">
    {children}
  </label>
);

const Input = ({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) => (
  <div>
    <Label>{label}</Label>
    <input
      type={type}
      name={name}
      required
      placeholder={placeholder}
      className={inputStyle}
    />
  </div>
);

export default ContactPage;