import React from "react";
import { motion } from "framer-motion";

const agents = [
  {
    name: "WhatsApp AI Receptionist",
    desc: "24/7 queries, bookings & instant replies.",
  },
  {
    name: "Lead Qualification & Follow-Up",
    desc: "Automatically scores & converts leads.",
  },
  {
    name: "RAG Website AI Agent",
    desc: "Answers using your documents & knowledge base.",
  },
  {
    name: "AI Voice Call Center",
    desc: "Inbound/outbound calls, reminders & routing.",
  },
  {
    name: "Automated Quotation Agent",
    desc: "Instant pricing & PDF quote generation.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

const TopHighROIAgents = () => {
  return (
    <section
      className="py-24 overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
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
          Top <span style={{ color: "var(--accent)" }}>High-ROI</span> AI Agents
        </motion.h2>

        <motion.p
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-center max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Proven agents delivering immediate business impact.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-5 gap-6"
        >
          {agents.map((a, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(0, 206, 209, 0.18)",
              }}
              className="rounded-2xl p-6 transition"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h3 className="font-semibold">{a.name}</h3>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {a.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-14 flex justify-center gap-4 flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            className="px-8 py-4 rounded-2xl font-semibold"
            style={{ backgroundColor: "var(--accent)", color: "#000" }}
          >
            View Full 45+ Agent Catalog
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.06 }}
            className="px-8 py-4 rounded-2xl border"
            style={{
              borderColor: "var(--accent)",
              color: "var(--text-primary)",
            }}
          >
            Build My AI
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopHighROIAgents;
