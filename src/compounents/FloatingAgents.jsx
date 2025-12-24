import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const agents = [
  {
    name: "AI Chatbot",
    desc: "Website & support automation",
  },
  {
    name: "WhatsApp AI",
    desc: "Automated WhatsApp conversations",
  },
  {
    name: "Voice AI Agent",
    desc: "Calls, bookings & voice support",
  },
];

const FloatingAgents = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-64 rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            {agents.map((agent, i) => (
              <div
                key={i}
                className="
    rounded-2xl px-5 py-4 cursor-pointer select-none
    transition-all duration-300
    hover:-translate-y-2 hover:scale-[1.03]
    hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
  "
                style={{
                  backgroundColor: "var(--card-bgs)",
                  border: "1px solid var(--card-border)",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <p
                  className="font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {agent.name}
                </p>

                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {agent.desc}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: "var(--accent)",
          color: "#000",
          boxShadow: "0 15px 40px rgba(0,206,209,0.4)",
        }}
        aria-label="AI Agents"
      >
        🤖
      </motion.button>
    </div>
  );
};

export default FloatingAgents;
