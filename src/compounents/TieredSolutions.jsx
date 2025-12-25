import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "TIER-1 · SMB Ready-to-Launch",
    items: [
      "WhatsApp AI Receptionist & Voice Call Center",
      "Multilanguage Chatbots & Customer Support",
      "Lead Qualification & Sales Follow-Ups",
      "Automated Quotes & Social Media Posting",
      "Review Collection & Complaint Handling",
      "Appointment Booking & Scheduling",
      "Resume Screening & Employee Onboarding",
      "Attendance Management & HR Automation",
      "Dashboards, Reporting & Language Translation",
    ],
  },
  {
    name: "TIER-2 · Mid-to-Large Enterprise",
    items: [
      "Multi-Agent Business Assistants",
      "Department Automation Suites",
      "Back-Office Workflow Automation",
      "Enterprise CRM Automation",
      "Automated Reporting & Analytics",
      "Contract & Document Extraction",
      "Cross-Team Coordination Agents",
    ],
  },
  {
    name: "TIER-3 · Enterprise Custom Intelligence",
    items: [
      "Enterprise AI Brain (Central Intelligence)",
      "COO-Level Decision Engine",
      "Audit, Risk & Compliance Automation",
      "Legal & Contract Understanding AI",
      "Inter-Department Orchestration",
      "Fully Autonomous Corporate AI Control Tower",
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
          OUR AUTOMATION SOLUTIONS — BY TIER
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Explore automation agents across business needs and company sizes.
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
          className="mt-14 flex justify-center gap-4 flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            className="px-8 py-4 rounded-2xl font-semibold"
            style={{ backgroundColor: "var(--accent)", color: "#000" }}
          >
            Build Your Custom Agent
          </motion.button>
          <Link to="/catalogue" className="">
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TieredSolutions;
