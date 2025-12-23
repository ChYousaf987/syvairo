import React from "react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "TIER-1 · SMB Ready-to-Launch",
    items: [
      "WhatsApp AI",
      "Lead Qualification",
      "Bookings",
      "Invoices",
      "Inventory Alerts",
    ],
  },
  {
    name: "TIER-2 · Mid-to-Large Enterprise",
    items: [
      "Multi-Agent Assistants",
      "Dept Automation",
      "CRM AI",
      "Power BI Reports",
    ],
  },
  {
    name: "TIER-3 · Enterprise Custom Intelligence",
    items: [
      "Enterprise AI Brain",
      "COO Decision Engine",
      "Compliance & Legal AI",
    ],
  },
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
    transition: { type: "spring", stiffness: 85, damping: 16 },
  },
};

const TieredSolutions = () => {
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
          Automation Solutions By Tier
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {tiers.map((t, i) => (
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
              <h3 className="text-xl font-semibold mb-4">{t.name}</h3>
              <ul
                className="space-y-2 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {t.items.map((it, idx) => (
                  <li key={idx}>• {it}</li>
                ))}
              </ul>
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
            Build Your Custom Agent
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.06 }}
            className="px-8 py-4 rounded-2xl border"
            style={{
              borderColor: "var(--accent)",
              color: "var(--text-primary)",
            }}
          >
            View Full Catalog
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TieredSolutions;
