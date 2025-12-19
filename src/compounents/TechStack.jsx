import React from "react";
import { motion } from "framer-motion";

const stacks = [
  {
    title: "AI & LLM Stack",
    items: ["GPT", "Claude", "Llama", "RAG Pipelines"],
  },
  {
    title: "Multi-Agent Architecture",
    items: ["Agent-to-Agent", "Shared Memory", "Autonomous Flows"],
  },
  {
    title: "RPA & Automation",
    items: ["UiPath", "Power Automate", "Robocorp"],
  },
  {
    title: "API & Integrations",
    items: ["CRMs", "ERPs", "WhatsApp API", "Webhooks"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes"],
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

const TechStack = () => {
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
          Tech Stack{" "}
          <span style={{ color: "var(--accent)" }}>Built for Scale</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {stacks.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.04,
                boxShadow: "0 25px 55px rgba(0,206,209,0.18)",
              }}
              className="rounded-2xl p-8 transition"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h3 className="font-semibold mb-3">{s.title}</h3>
              <ul
                className="text-sm space-y-1"
                style={{ color: "var(--text-secondary)" }}
              >
                {s.items.map((it, idx) => (
                  <li key={idx}>• {it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
