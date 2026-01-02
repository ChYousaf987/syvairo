import React from "react";
import { motion } from "framer-motion";
import { HiChat, HiOutlineMicrophone, HiPhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const agents = [
  { name: "AI Chatbot", icon: HiChat },
  { name: "WhatsApp AI", icon: FaWhatsapp },
  { name: "Voice AI Agent", icon: HiOutlineMicrophone },
];

// Motion variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

const CaseStudies = () => {
  return (
    <section
      className="py-7 overflow-hidden bgGradient"
      style={{
        color: "var(--text-primary)",
      }}
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
            <HiPhone className="text-cyan-400 text-base" />
            <span className="text-cyan-400">Real-Time AI Workforce</span>
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
            textShadow: `0 0 38px rgba(0, 206, 209, 0.35), 0 0 20px rgba(0, 206, 209, 0.2)`,
          }}
        >
          Meet Our AI Workforce
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-xl mx-auto"
          style={{ color: "var(--text-primary)" }}
        >
          Experience the power of agents built by our own team, for our own
          business
        </motion.p>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl mt-8 pb-2 font-semibold tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
            textShadow: `0 0 38px rgba(0, 206, 209, 0.35), 0 0 20px rgba(0, 206, 209, 0.2)`,
          }}
        >
          Contact Us Through Real AI Systems
        </motion.h2>

        {/* Agents */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid md:grid-cols-3 gap-8"
        >
          {agents.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={i}
                className="rounded-2xl p-8 transition-all duration-300
                       hover:-translate-y-2 hover:scale-[1.03]
                       hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
                       hover:bg-[]
                       select-none"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid rgba(0,206,209,0.35)",
                }}
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl
                    bg-cyan-400/20 text-cyan-400
                    group-hover:bg-white/20 group-hover:text-white transition"
                  >
                    <Icon size={26} />
                  </div>
                  <p className="text-lg font-semibold">{agent.name}</p>
                </div>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  Live & ready to interact
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
