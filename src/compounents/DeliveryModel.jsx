import React from "react";
import { motion } from "framer-motion";

const steps = [
  "Discovery & Use-Case Mapping",
  "Proof of Concept",
  "Deployment & Training",
  "Monitoring & Optimization",
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

const DeliveryModel = () => {
  return (
    <section
      className=" py-20 md:py-28 overflow-hidden"
      style={{
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl pb-2 text-center font-semibold tracking-tight bg-clip-text text-transparent"
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
          Our <span style={{ color: "var(--accent)" }}>4-Step</span> Delivery
          Model
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          {steps.map((s, i) => (
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
              <div
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--accent)" }}
              >
                0{i + 1}
              </div>
              <p style={{ color: "var(--text-secondary)" }}>{s}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryModel;
