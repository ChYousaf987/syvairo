import React from "react";
import { motion } from "framer-motion";
import { HiClock, HiCog, HiPuzzle, HiScale } from "react-icons/hi";
import { HiBolt, HiRocketLaunch } from "react-icons/hi2";

const benefits = [
  {
    icon: <HiBolt className="w-8 h-8 text-accent" />,
    title: "AI that acts, not just answers",
    description: "Tasks completed end-to-end automatically",
  },
  {
    icon: <HiClock className="w-8 h-8 text-accent" />,
    title: "No missed leads – 24/7",
    description: "Follow-ups & replies anytime",
  },
  {
    icon: <HiRocketLaunch className="w-8 h-8 text-accent" />,
    title: "45+ ready-to-launch agents",
    description: "Launch in days, not months",
  },
  {
    icon: <HiPuzzle className="w-8 h-8 text-accent" />,
    title: "Integrates with any software",
    description: "API, CRM, ERP, WhatsApp",
  },
  {
    icon: <HiScale className="w-8 h-8 text-accent" />,
    title: "Scales SMB → Enterprise",
    description: "Modular automation architecture",
  },
  {
    icon: <HiCog className="w-8 h-8 text-accent" />,
    title: "Custom AI & RPA workflows",
    description: "Tailored to your exact workflow",
  },
];

const WhyChooseSyvairo = () => {
  return (
    <section
      className="py-28 overflow-hidden"
      style={{
        backgroundColor: "var(--section-alt)",
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
          className="text-3xl md:text-5xl font-bold"
        >
          Why Businesses Choose{" "}
          <span style={{ color: "var(--accent)" }}>Syvairo</span>
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-lg md:text-xl text-secondary max-w-2xl mx-auto"
        >
          We don’t just provide AI tools — we implement fully functional systems
          that run your business workflows autonomously.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              tabIndex={0} // Focusable
              className="rounded-2xl p-8 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
              style={{
                backgroundColor: "var(--card-bg)",
                border: `1px solid var(--card-border)`,
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSyvairo;
