import React from "react";
import { motion } from "framer-motion";
import { Brain, Cloud, Cpu, Network, Plug } from "lucide-react";
import { HiOutlineChip } from "react-icons/hi";

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
  // ✅ NEW STACK ADDED
  {
    title: "Security & Compliance",
    icon: HiOutlineChip, // you can pick any icon you like
    color: "from-red-400 to-pink-500",
    items: [
      "IAM & Role-Based Access Control",
      "Data Encryption & Secrets Management",
      "Audit Logs & Compliance Checks",
      "Vulnerability Scanning & Threat Detection",
    ],
  },
];


const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

const TechStack = () => {
  return (
    <>
      <section
        className="py-7 overflow-hidden"
        style={{ color: "var(--text-primary)" }}
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
              <Brain size={15} className=" text-base" />
              <span className="text-cyan-400">Core AI + LLM Stack</span>
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
            Tech Stack Built for Scale
          </motion.h2>

          {/* Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            {stacks.map((s, i) => (
              <motion.div
                key={i}
                variants={item}
                className="group rounded-2xl p-6 transition-all duration-300
              hover:-translate-y-2 hover:scale-[1.03]
              hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
              hover:bg-[#00ced1] select-none"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid rgba(0,206,209,0.35)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* ICON */}
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl
      bg-cyan-400/20 text-cyan-400
      group-hover:bg-white/20 group-hover:text-white transition"
                  >
                    <s.icon size={24} />
                  </div>

                  {/* TEXT */}
                  <div className="text-left">
                    <h3 className="font-semibold leading-tight">{s.title}</h3>
                  </div>
                </div>

                <ul
                  className="text-sm space-y-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {s.items.map((it, idx) => (
                    <li key={idx}>• {it}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <hr className="h-px bg-gray-800 my-12 border-0" />
    </>
  );
};

export default TechStack;
