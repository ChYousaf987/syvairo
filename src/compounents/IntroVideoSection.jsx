import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { title: "Problem", desc: "Missed leads, slow teams, manual operations." },
  {
    title: "AI Agent Takeover",
    desc: "Agents handle replies, calls, bookings & tasks.",
  },
  { title: "Result", desc: "Faster growth, efficiency & higher profits." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const item = {
  hidden: { y: 60, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

const IntroVideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="py-28 overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold"
        >
          How AI Transforms Your Business
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          From manual chaos to fully automated operations in 3 steps.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              className=" rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)] select-none"
              style={{
                backgroundColor: "var(--card-bg)",
                border: `1px solid var(--card-border)`,
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 15px 40px rgba(0, 206, 209, 0.35)",
          }}
          className="mt-16 px-10 py-4 rounded-2xl font-semibold"
          style={{ backgroundColor: "var(--accent)", color: "#000" }}
        >
          ▶ Watch Video — Discover How
        </motion.button>

        {/* Video Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-3xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-0 right-4 text-white text-2xl font-bold z-50"
                >
                  ×
                </button>

                {/* Video */}
                <div className="w-full h-0 pb-[56.25%] relative">
                  <iframe
                    src="/video.mp4"
                    title="Intro Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IntroVideoSection;
