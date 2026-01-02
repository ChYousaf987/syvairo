import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, FileText, Mic, Brain, Headphones } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const agents = [
  {
    name: "WhatsApp AI Receptionist",
    desc: "Handles queries, bookings, 24/7",
    icon: FaWhatsapp,
  },
  {
    name: "Lead Qualification & Follow-Up",
    desc: "Converts inquiries into customers automatically",
    icon: TrendingUp,
  },
  {
    name: "RAG Website AI Agent",
    desc: "Instantly answers questions using documents",
    icon: Brain,
  },
  {
    name: "AI Call Center Voice Agent",
    desc: "Calls customers, books slots, sends reminders.",
    icon: Mic,
  },
  {
    name: "Automated Quotation Agent",
    desc: "Generates pricing & PDF quotes instantly",
    icon: FileText,
  },
  {
  name: "AI Support & Ticketing Agent",
  desc: "Resolves tickets and syncs with CRM automatically",
  icon: Headphones,
},
  
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const TopHighROIAgents = () => {
  return (
    <>
      <section
        className="pt-20 pb-7 md:pt-28 overflow-hidden bgGradient"
        style={{ color: "var(--text-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* TOP BADGE */}
          <span
            style={{
              textShadow:
                "0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)",
            }}
            className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-cyan-500/10 border border-cyan-700"
          >
            <div className="flex items-center gap-2">
              {/* Gradient Icon */}
              <span className="relative w-4 h-4 inline-block">
                <TrendingUp className="w-4 h-4 text-transparent" />
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 mask-icon" />
              </span>

              <span className="text-cyan-400">High ROI Automation</span>
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
              textShadow:
                "0 0 38px rgba(0, 206, 209, 0.35), 0 0 20px rgba(0, 206, 209, 0.2)",
            }}
          >
            Top High-ROI AI Agents
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-2xl mx-auto"
          >
            Proven agents delivering immediate business impact.
          </motion.p>

          {/* Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {agents.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={i}
                  className="group rounded-2xl p-6 transition-all duration-300
  hover:-translate-y-2 hover:scale-[1.03]
  hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
  hover:bg-[#00ced1] select-none"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid rgba(0,206,209,0.35)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* ICON */}
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-xl
      bg-cyan-400/20 text-cyan-400
      group-hover:bg-white/20 group-hover:text-white transition"
                    >
                      <Icon size={24} />
                    </div>

                    {/* TEXT */}
                    <div className="text-left">
                      <h3 className="font-semibold leading-tight">{a.name}</h3>
                    </div>
                  </div>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {a.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-14 flex justify-center"
          >
            <Link to="/catalogue">
            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow: "0 0 10px #00ced1, 0 0 20px #00ced1",
              }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full bg-cyan-600 border-2 border-cyan-500 font-bold text-white text-lg transition-all duration-300"
              style={{
                boxShadow: "0 0 2px #00ced1, 0 0 10px #00ced1", // neon glow
              }}
            >
              View Full 45+ Agent Catalog
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* <hr className="h-px bg-gray-800 my-12 border-0" /> */}
    </>
  );
};

export default TopHighROIAgents;
