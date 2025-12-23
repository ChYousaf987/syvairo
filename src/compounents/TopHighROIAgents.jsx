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
          Top High-ROI AI Agents
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-2xl mx-auto"
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

          
        </motion.div>
      </div>
    </section>
  );
};

export default TopHighROIAgents;
