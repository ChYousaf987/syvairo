import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="pt-40 pb-32 flex items-center overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, var(--gradient-from), var(--gradient-to))`,
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            AI Agents That{" "}
            <span style={{ color: "var(--accent)" }}>Act & Deliver</span>
          </h1>

          <p
            className="mt-6 text-lg max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            We don’t sell tools — we deliver end-to-end intelligent automation
            solutions that run your business autonomously.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start items-center">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 1.07 }}
              className="px-3 md:px-8 py-4 rounded-2xl font-semibold"
              style={{
                backgroundColor: "var(--accent)",
                color: "#000",
              }}
            >
              Build My AI System
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.07 }}
              className="px-3 md:px-8 py-4 rounded-2xl border"
              style={{
                borderColor: "var(--accent)",
                color: "var(--text-primary)",
              }}
            >
              Book Demo
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="rounded-3xl p-5 backdrop-blur-xl"
          style={{
            backgroundColor: "var(--card-bg)",
            border: `1px solid var(--border-color)`,
          }}
        >
          <div className="p-0 overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg">
            <video
              src="/video.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
