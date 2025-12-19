import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "AI Projects" },
  { value: "15+", label: "Happy Clients" },
  { value: "22+", label: "Live AI Agents" },
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
      className="py-24 overflow-hidden"
      style={{
        backgroundColor: "var(--section-alt)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center"
        >
          Client Trust &{" "}
          <span style={{ color: "var(--accent)" }}>Live AI Agents</span>
        </motion.h2>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-4 gap-6 text-center"
        >
          {stats.map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6, scale: 1.05 }}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "var(--card-bg)",
                boxShadow: "var(--shadow-soft)",
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

        {/* Agents */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.04,
                boxShadow: "0 20px 45px rgba(0, 206, 209, 0.15)",
              }}
              className="rounded-2xl p-6 text-center transition"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <p className="text-lg font-semibold">{agent}</p>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Live & ready to interact
              </p>
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
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 15px 40px rgba(0, 206, 209, 0.35)",
            }}
            className="px-8 py-4 rounded-2xl font-semibold"
            style={{ backgroundColor: "var(--accent)", color: "#000" }}
          >
            Contact Through AI Agents
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.06 }}
            className="px-8 py-4 rounded-2xl border"
            style={{
              borderColor: "var(--accent)",
              color: "var(--text-primary)",
            }}
          >
            Book Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTrustLiveAgents;
