import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TIERS } from "../compounents/automationAgents";
import { Link } from "react-router-dom";
import { HiChevronDown, HiCheck } from "react-icons/hi2";

export default function AutomationCatalogue() {
  const [selectedAgent, setSelectedAgent] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const tier1Sections = TIERS.find((t) => t.id === "tier1")?.sections || [];

  return (
    <section className="bgGradient text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* AUTOMATION CATALOGUE */}
        {TIERS.map((tier) => (
          <div key={tier.id} className="mb-32 text-center">
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
              {tier.title}
            </motion.h2>
            <p className="mt-4 text-center text-gray-400">{tier.subtitle}</p>

            {/* TOP CTA */}
            {tier.id === "tier1" && (
              <motion.div
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
                className="group relative mt-16 max-w-4xl mx-auto my-4 grid grid-cols-2 gap-8 rounded-2xl p-6 overflow- transition-all duration-300  shadow-[0_12px_30px_rgba(0,206,209,0.3)] select-none"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid rgba(0,206,209,0.35)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0  group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: ` radial-gradient(200px circle at var(--x) var(--y), rgba(0,206,209,0.25), transparent 70%)`,
                  }}
                />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Try Your Agent for Free
                  </h1>
                  <p className="text-gray-400 text-lg">
                    Experience Clario AI in action — choose an agent and start a
                    live demo call
                  </p>
                </div>

                {/* CUSTOM DROPDOWN */}
                <div className="flex flex-col px-6 justify-center gap-4">
                  <div ref={dropdownRef} className="relative">
                    {/* Trigger */}
                    <motion.button
                      onClick={() => setOpen(!open)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full px-6 py-4 rounded-xl text-left flex items-center justify-between overflow-hidden"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        border: "1px solid rgba(0,206,209,0.35)",
                      }}
                    >
                      {/* Glow */}
                      <div
                        className="absolute inset-0 opacity-0 hover:opacity-100 transition"
                        style={{
                          background:
                            "radial-gradient(220px circle at center, rgba(0,206,209,0.25), transparent 70%)",
                        }}
                      />

                      <span className="relative z-10 text-lg text-white">
                        {selectedAgent || "Select an agent"}
                      </span>

                      <HiChevronDown
                        className={`relative z-10 transition ${
                          open ? "rotate-180" : ""
                        }`}
                        size={22}
                      />
                    </motion.button>

                    {/* Dropdown Panel */}
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.95 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 22,
                          }}
                          className="absolute z-50 mt-3 w-full rounded-2xl overflow-hidden backdrop-blur-xl"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(0,0,0,0.9), rgba(10,10,10,0.85))",
                            border: "1px solid rgba(0,206,209,0.35)",
                            boxShadow: "0 20px 60px rgba(0,206,209,0.25)",
                          }}
                        >
                          <div className="max-h-[340px] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/40">
                            {tier1Sections.map((section, sIdx) => (
                              <div key={section.title} className="px-4 py-3">
                                {/* Section Title */}
                                <div className="text-xs uppercase tracking-wider text-cyan-400 mb-2">
                                  {section.title}
                                </div>

                                {/* Agents */}
                                <div className="space-y-1">
                                  {section.agents?.map((agent) => {
                                    const isActive =
                                      selectedAgent === agent.name;

                                    return (
                                      <motion.button
                                        key={agent.name}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => {
                                          setSelectedAgent(agent.name);
                                          setOpen(false);
                                        }}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition
                      ${
                        isActive
                          ? "bg-cyan-500/15 text-cyan-300"
                          : "hover:bg-cyan-500/10 text-gray-200"
                      }
                    `}
                                      >
                                        <div>
                                          <div className="font-medium">
                                            {agent.name}
                                          </div>
                                          {agent.desc && (
                                            <div className="text-xs text-gray-400 mt-0.5">
                                              {agent.desc}
                                            </div>
                                          )}
                                        </div>

                                        {isActive && (
                                          <HiCheck
                                            size={18}
                                            className="text-cyan-400 shrink-0"
                                          />
                                        )}
                                      </motion.button>
                                    );
                                  })}
                                </div>

                                {/* Divider */}
                                {sIdx !== tier1Sections.length - 1 && (
                                  <div className="mt-4 border-t border-white/5" />
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* BUTTON */}
                  <Link to="/ConsultationForm" className="w-full block">
                    <motion.button
                      whileHover={{
                        scale: 1.07,
                        boxShadow: "0 0 10px #00ced1, 0 0 20px #00ced1",
                      }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full px-8 py-4 rounded-2xl bg-cyan-600 border-2 border-cyan-500 font-bold text-white text-lg transition-all duration-300"
                      style={{
                        boxShadow: "0 0 2px #00ced1, 0 0 10px #00ced1",
                      }}
                    >
                      📞 Contact Agent
                    </motion.button>
                  </Link>

                  <p className="text-gray-500 text-sm text-center">
                    No payment required • Live demo call • Instant connection
                  </p>
                </div>
              </motion.div>
            )}

            {tier.sections.map((section, i) => (
              <div key={i} className="mt-16">
                {section.title && (
                  <motion.h6
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-4xl pb-10 font-semibold tracking-tight bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
                      textShadow:
                        "0 0 38px rgba(0, 206, 209, 0.35), 0 0 20px rgba(0, 206, 209, 0.2)",
                    }}
                  >
                    {section.title}
                  </motion.h6>
                )}

                <div className="grid md:grid-cols-3 gap-8">
                  {section.agents.map((a, idx) => {
                    const Icon = a.icon;

                    return (
                      <motion.div
                        key={idx}
                        onMouseMove={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          e.currentTarget.style.setProperty(
                            "--x",
                            `${e.clientX - rect.left}px`
                          );
                          e.currentTarget.style.setProperty(
                            "--y",
                            `${e.clientY - rect.top}px`
                          );
                        }}
                        className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] select-none"
                        style={{
                          backgroundColor: "var(--card-bg)",
                          border: "1px solid rgba(0,206,209,0.35)",
                        }}
                      >
                        <div
                          className="pointer-events-none absolute inset-0 opacity-0  group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: ` radial-gradient(150px circle at var(--x) var(--y), rgba(0,206,209,0.25), transparent 70%)`,
                          }}
                        />
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                          style={{
                            background:
                              "radial-gradient(220px circle at var(--x) var(--y), rgba(0,206,209,0.25), transparent 70%)",
                          }}
                        />

                        {a.badge && (
                          <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
                            {a.badge}
                          </span>
                        )}

                        <div className="relative">
                          <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_25px_rgba(0,206,209,0.55)]">
                            <Icon className="text-white" size={22} />
                          </div>

                          <h4 className="text-lg font-semibold">{a.name}</h4>
                          <p className="mt-2 text-sm text-gray-400">{a.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="mt-20 flex justify-center gap-6">
          <Link
            to="/ConsultationForm"
            className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
          >
            Book Agent Demo
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-2xl border border-cyan-400 font-semibold hover:bg-cyan-500 hover:text-black transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
