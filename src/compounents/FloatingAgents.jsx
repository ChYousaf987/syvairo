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
    px-5 py-4 cursor-pointer transition-all duration-200
    hover:translate-x-1
  "
                style={{
                  backgroundColor: "var(--bg-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
                  e.currentTarget.style.boxShadow =
                    "inset 0 0 0 1px var(--card-border)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bg-primary)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <p className="font-semibold">{agent.name}</p>
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
