import React, { useEffect } from "react";

const BookAppointment: React.FC = () => {

  // ✅ Scroll page to top when this page opens
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // change to "smooth" if you want animation
    });
  }, []);

  return (
    <section className="bg-[#0b0618] text-white pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Book a <span className="text-purple-500">Consultation</span>
        </h1>

        <p className="text-gray-400 mb-12 text-lg">
          Schedule a strategic consultation with our experts to explore
          AI-driven transformation and business growth solutions.
        </p>

        {/* Booking Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-lg">
          
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            Free 30-Minute Consultation
          </h2>

          <p className="text-gray-400 mb-8">
            Choose a convenient time slot and connect with our team
            to discuss your business needs.
          </p>

          {/* ✅ UPDATED CALENDLY LINK */}
          <a
            href="https://calendly.com/zoraglobalai/15?month=2026-02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-lg font-medium"
          >
            Schedule Now
          </a>

        </div>

      </div>
    </section>
  );
};

export default BookAppointment;