import React, { useState } from "react";
import { motion } from "framer-motion";
import { TIERS } from "../compounents/automationAgents";
import { Link } from "react-router-dom";

export default function AutomationCatalogue() {
  const [selectedAgent, setSelectedAgent] = useState("");

  // Get all agents from TIER-1
  const tier1Agents =
    TIERS.find((tier) => tier.id === "TIER-1")?.sections.flatMap(
      (section) => section.agents
    ) || [];

  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* TOP CTA SECTION */}
        <div className="bg-gray-900 flex justify-between items-center max-w-4xl mx-auto rounded-2xl p-6 mb-20">
          <div className="">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Try Your Agent for
              <br />
              Free
            </h1>
            <p className="text-gray-400 mb-6">
              Experience Clario AI in action — choose an agent and start a live
              demo call
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <select
              className="min-w-[250px] px-6 py-4 text-lg rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none"
              value={selectedAgent}
              onChange={(e) => setSelectedAgent(e.target.value)}
            >
              <option value="">Select an agent</option>
              {tier1Agents.map((agent) => (
                <option key={agent.name} value={agent.name}>
                  {agent.name}
                </option>
              ))}
            </select>

            <button
              disabled={!selectedAgent}
              className={`px-6 py-3 rounded-xl font-semibold transition 
                ${
                  selectedAgent
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-purple-600/50 cursor-not-allowed"
                }`}
            >
              📞 Start Demo Call
            </button>

            <p className="text-gray-500 text-sm mt-3">
              No payment required • Live demo call • Instant connection
            </p>
          </div>
        </div>

        {/* AUTOMATION CATALOGUE */}
        {TIERS.map((tier) => (
          <div key={tier.id} className="mb-32">
            <h2 className="text-3xl md:text-5xl font-semibold text-center">
              {tier.title}
            </h2>
            <p className="mt-4 text-center text-gray-400">{tier.subtitle}</p>

            {tier.sections.map((section, i) => (
              <div key={i} className="mt-16">
                {section.title && (
                  <h3 className="text-2xl mb-8 font-semibold">
                    {section.title}
                  </h3>
                )}

                <div className="grid md:grid-cols-3 gap-8">
                  {section.agents.map((a, idx) => {
                    const Icon = a.icon;

                    return (
                      <motion.div
                        key={idx}
                        onMouseMove={(e) => {
                          const r = e.currentTarget.getBoundingClientRect();
                          e.currentTarget.style.setProperty(
                            "--x",
                            `${e.clientX - r.left}px`
                          );
                          e.currentTarget.style.setProperty(
                            "--y",
                            `${e.clientY - r.top}px`
                          );
                        }}
                        className="group relative rounded-2xl p-6 overflow-hidden hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300"
                        style={{
                          backgroundColor: "var(--card-bg)",
                          border: "1px solid rgba(0,206,209,0.35)",
                        }}
                      >
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
