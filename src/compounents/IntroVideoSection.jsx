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
      className="py-20 md:py-28 overflow-hidden"
      style={{
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl pb-2 font-semibold tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `
              linear-gradient(
                180deg,
                var(--text-primary),
                var(--accent)
              )
            `,
          }}
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
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 transition-all duration-300
             hover:-translate-y-2 hover:scale-[1.03]
             hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
             hover:bg-[#00ced1]
             select-none"
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
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
      </div>
    </section>
  );
};

export default IntroVideoSection;
