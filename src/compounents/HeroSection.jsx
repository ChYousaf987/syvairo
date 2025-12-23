import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative pt-24 md:pt-48 pb-10 flex items-center overflow-hidden bg-grain">
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
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

          <div className="mt-8 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-2xl font-semibold"
              style={{
                backgroundColor: "var(--accent)",
                color: "#000",
              }}
            >
              Build My AI System → Book Demo
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT — CLICKABLE VIDEO */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          onClick={() => setIsOpen(true)}
          className="cursor-pointer rounded-3xl p-5 backdrop-blur-xl relative group"
          style={{
            backgroundColor: "var(--card-bg)",
            border: `1px solid var(--card-border)`,
          }}
        >
          {/* Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(6px)",
              }}
            >
              <span className="text-white text-2xl ml-1">▶</span>
            </motion.div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <video
              src="/video.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </motion.div>
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-10 right-0 text-white text-3xl"
              >
                ×
              </button>

              {/* Video */}
              <div className="relative w-full pb-[56.25%]">
                <video
                  src="/video.mp4"
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
