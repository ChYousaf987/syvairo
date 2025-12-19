import React from "react";
import { motion } from "framer-motion";

const studies = [
  {
    title: "AI Receptionist – E-commerce",
    impact: "60% calls handled automatically",
    desc: "AI voice agent answered calls, routed queries, and captured leads without human staff.",
  },
  {
    title: "AI Appointment Booking – Clinic",
    impact: "35% fewer no-shows",
    desc: "Automated booking, reminders, and rescheduling for patients.",
  },
  {
    title: "Lead Follow-Up Automation – Insurance",
    impact: "40% more conversions",
    desc: "AI qualified and nurtured leads instantly across channels.",
  },
];

// Motion variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

const item = {
  hidden: { y: 60, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

const CaseStudies = () => {
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
          Case Studies{" "}
          <span style={{ color: "var(--accent)" }}>& Proof of Work</span>
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-center max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Real businesses. Real automation. Real measurable results.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {studies.map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 25px 60px rgba(0, 206, 209, 0.15)",
              }}
              className="rounded-2xl p-8 transition"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h3 className="text-xl font-semibold">{itemData.title}</h3>
              <p
                className="mt-3 font-semibold"
                style={{ color: "var(--accent)" }}
              >
                {itemData.impact}
              </p>
              <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
                {itemData.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
