import React from "react";
import { motion } from "framer-motion";

const MediaPreview = () => {
  return (
    <section
      className="py-24 overflow-hidden"
      style={{
        backgroundColor: "var(--section-alt)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center"
        >
          Media & <span style={{ color: "var(--accent)" }}>Insights</span>
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{
                y: -10,
                scale: 1.04,
                boxShadow: "0 25px 55px rgba(0,206,209,0.18)",
              }}
              className="rounded-2xl p-6 transition"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div
                className="h-32 rounded-xl mb-4"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              />
              <h3 className="font-semibold">AI Automation Trends {i}</h3>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Latest insights on AI-driven workflows.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPreview;
