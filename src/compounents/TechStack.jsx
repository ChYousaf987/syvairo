import React from "react";
import { motion } from "framer-motion";
import { Brain, Network, Cpu, Plug, Cloud } from "lucide-react";

const stacks = [
  {
    title: "Core AI + LLM Stack",
    icon: Brain,
    color: "from-cyan-400 to-blue-500",
    items: [
      "GPT, Claude, Llama, Mixtral, Gemini",
      "RAG Pipelines (Pinecone, Weaviate, FAISS)",
      "NLP: Summarization, NER, Intent Logic",
      "GenAI: Text → Agent Logic, Voice → Actions",
    ],
  },
  {
    title: "Multi-Agent Architecture",
    icon: Network,
    color: "from-green-400 to-emerald-500",
    items: [
      "Agent-to-Agent Communication",
      "Shared Memory & Persistent State",
      "Autonomous Workflow Pipelines",
      "Human Escalation",
    ],
  },
  {
    title: "RPA + Workflow Layer",
    icon: Cpu,
    color: "from-purple-400 to-fuchsia-500",
    items: [
      "UiPath",
      "Power Automate",
      "Automation Anywhere",
      "IBM RPA, Robocorp",
    ],
  },
  {
    title: "API & Integration Layer",
    icon: Plug,
    color: "from-cyan-400 to-teal-500",
    items: [
      "n8n, Make.com",
      "Webhooks, REST, GraphQL",
      "CRM, ERP, WhatsApp API",
      "Email, SMS, IVR, Payment",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-blue-400 to-indigo-500",
    items: [
      "AWS / Azure / GCP",
      "Docker / Kubernetes",
      "Vercel / Cloudflare",
      "Redis / PostgreSQL / MongoDB",
      "Monitoring & Logging",
    ],
  },
];

const TechStackTimeline = () => {
  return (
    <section
      className="py-20 md:py-28 overflow-hidden"
      style={{ color: "var(--text-primary)" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold mb-16
                     bg-clip-text text-transparent
                     bg-gradient-to-b from-white to-cyan-400"
        >
          TECH STACK — BUILT FOR SCALE
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-[2px]
                          bg-gradient-to-b from-cyan-400/50 via-cyan-400/30 to-transparent"
          />

          <div className="space-y-14">
            {stacks.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-20"
                >
                  {/* Icon */}
                  <div
                    className={`absolute left-0 top-0 w-12 h-12 rounded-full
                    bg-gradient-to-br ${item.color}
                    flex items-center justify-center
                    shadow-[0_0_25px_rgba(34,211,238,0.5)]`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-xl p-6
                    bg-white/5 backdrop-blur
                    border border-white/10
                    hover:border-cyan-400/50
                    hover:bg-cyan-400/5
                    transition-all"
                  >
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {item.items.map((it, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button
            className="px-8 py-4 rounded-full
                             bg-gradient-to-r from-cyan-400 to-blue-500
                             text-black font-semibold
                             hover:scale-105 transition"
          >
            → Build Your AI Infrastructure With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStackTimeline;
