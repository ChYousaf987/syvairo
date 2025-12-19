import React from "react";
import { motion } from "framer-motion";

const ROICalculator = () => {
  return (
    <section
      className="py-24 overflow-hidden"
      style={{
        backgroundColor: "var(--section-alt)",
        color: "var(--text-primary)",
      }}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto px-6 text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold">
          AI ROI <span style={{ color: "var(--accent)" }}>Calculator</span>
        </h2>

        <p className="mt-4" style={{ color: "var(--text-secondary)" }}>
          Estimate your automation savings instantly.
        </p>

        {/* Inputs */}
        <div className="mt-10 space-y-4">
          {["Monthly hours spent", "Employee cost", "Number of employees"].map(
            (placeholder, i) => (
              <motion.input
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileFocus={{ scale: 1.02 }}
                placeholder={placeholder}
                className="w-full p-4 rounded-xl outline-none transition"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  color: "var(--text-primary)",
                }}
              />
            )
          )}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 px-8 py-4 rounded-2xl font-semibold"
          style={{ backgroundColor: "var(--accent)", color: "#000" }}
        >
          Calculate ROI & Schedule Build
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ROICalculator;
