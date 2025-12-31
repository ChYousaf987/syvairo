import React from "react";
import { motion } from "framer-motion";
import { HiOutlineChip } from "react-icons/hi";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "TIER-1 · SMB Ready-to-Launch",
    items: [
      "Communication & Support: AI Receptionist",
      "Sales & Marketing: Lead Qualification",
      "Customer Experience: Complaint Handling",
      "HR & Internal: Resume Screening",
      "Operations & Efficiency: AI Meeting Notes",
      "Data & Analytics: And More",
    ],
  },
  {
    name: "TIER-2 · Mid-to-Large Enterprise",
    items: [
      "Multi-Agent Business Assistants",
      "Back-Office Workflow Automation",
      "Enterprise CRM Automation",
      "Contract & Document Extraction",
      "Advanced Reporting & Analytics",
      "And More",
    ],
  },
  {
    name: "TIER-3 · Enterprise Custom Intelligence",
    items: [
      "Enterprise AI Brain (Central Intelligence)",
      "COO-Level Decision Engine",
      "Inter-Department Orchestration",
      "Autonomous Corporate AI Control Tower",
      "Risk, Audit & Compliance Automation",
      "And More",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const TieredSolutions = () => {
  return (
    <>
      <section
        className="py-7 overflow-hidden"
        style={{ color: "var(--text-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* 🔹 TOP BADGE */}
          <span
            style={{
              textShadow:
                "0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)",
            }}
            className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold
                     bg-cyan-500/10 border border-cyan-700"
          >
            <div className="flex items-center gap-2">
              <HiOutlineChip className="text-cyan-400 text-base" />
              <span className="text-cyan-400">Tiered AI Automation Stack</span>
            </div>
          </span>

          {/* Heading */}
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl pb-2 font-semibold tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
              textShadow:
                "0 0 38px rgba(0, 206, 209, 0.35), 0 0 20px rgba(0, 206, 209, 0.2)",
            }}
          >
            OUR AUTOMATION SOLUTIONS — BY TIER
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-2xl mx-auto"
          >
            Scalable AI automation designed for every stage of business growth.
          </motion.p>

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
                className="group rounded-2xl p-6 transition-all duration-300
              hover:-translate-y-2 hover:scale-[1.03]
              hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
              hover:bg-[#00ced1] select-none"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid rgba(0,206,209,0.35)",
                }}
              >
                <h3 className="text-xl text-start font-semibold mb-4">
                  {t.name}
                </h3>

                <ul
                  className="space-y-2 text-start text-sm"
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
            className="mt-14 flex justify-center"
          >
            <Link to="/ConsultationForm">
              <motion.button
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0 0 10px #00ced1, 0 0 20px #00ced1",
                }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full bg-cyan-600 border-2 border-cyan-500 font-bold text-white text-lg transition-all duration-300"
                style={{
                  boxShadow: "0 0 2px #00ced1, 0 0 10px #00ced1", // neon glow
                }}
              >
                → Build Your AI Infrastructure With Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      <hr className="h-px bg-gray-800 my-12 border-0" />
    </>
  );
};

export default TieredSolutions;
