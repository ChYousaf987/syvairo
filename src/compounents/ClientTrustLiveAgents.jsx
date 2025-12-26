import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "AI Projects" },
  { value: "15+", label: "Happy Clients" },
  { value: "22+", label: "Live AI Agents" },
  { value: "3+", label: "mid-enterprise solutions deployed" },
  { value: "🌍", label: "Global Clients" },
];

const agents = [
  "AI Chatbot",
  "WhatsApp AI",
  "Voice AI Agent",
  "Appointment Scheduler",
];

// Motion variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 15 },
  },
};

const ClientTrustLiveAgents = () => {
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
            backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
            textShadow: `0 0 38px rgba(0, 206, 209, 0.35), 0 0 20px rgba(0, 206, 209, 0.2)`,
          }}
        >
          Client Trust & Live AI Agents
        </motion.h2>
        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-5 gap-6 text-center"
        >
          {stats.map((itemData, i) => (
            <motion.div
              key={i}
              className="group rounded-2xl p-8 transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.03]
        hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
        hover:bg-[#00ced1] select-none"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid rgba(0,206,209,0.35)",
              }}
            >
              <p
                className="text-3xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                {itemData.value}
              </p>
              <p style={{ color: "var(--text-secondary)" }}>{itemData.label}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex justify-center gap-4 flex-wrap"
        >
          {/* <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 15px 40px rgba(0, 206, 209, 0.35)",
            }}
            className="px-8 py-4 rounded-2xl font-semibold"
            style={{ backgroundColor: "var(--accent)", color: "#000" }}
          >
            Contact Through AI Agents
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTrustLiveAgents;
