import React from "react";
import { motion } from "framer-motion";
import { Brain, Network, Cpu, Plug, Cloud } from "lucide-react";

const stacks = [
  {
    title: "Process Assessment",
    icon: Brain,
    color: "from-cyan-400 to-blue-500",
    items: [
      {
        focus:
          "Understanding customer needs, identifying automation opportunities, and mapping current processes. We define a proposed solution and detail expected results using KPIs.",
        output:
          "A detailed project proposal with a clear scope, timeline, and defined KPIs.",
      },
    ],
  },
  {
    title: "Pilot",
    icon: Network,
    color: "from-green-400 to-emerald-500",
    items: [
      {
        focus:
          "We build and test a working minimal version of your automation solution with tangible results.",
        output:
          "A validated proof-of-concept demonstrating value and meeting key KPIs.",
      },
    ],
  },
  {
    title: "Go-Live",
    icon: Cpu,
    color: "from-purple-400 to-fuchsia-500",
    items: [
      {
        focus:
          "Rolling out the full validated AI or automation solution including training.",
        output:
          "A fully operational solution delivering immediate business value.",
      },
    ],
  },
  {
    title: "Support & Optimization",
    icon: Plug,
    color: "from-cyan-400 to-teal-500",
    items: [
      {
        focus:
          "Continuous monitoring, maintenance, and refinement of automated processes.",
        output:
          "Guaranteed performance, proactive maintenance, and optimization.",
      },
    ],
  },
];


const DeliveryModel = () => {
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-circle-check-big w-6 h-6 text-white"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
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

                    <div className="">
                      {item.items.map((it, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-start gap-2 text-sm text-gray-300"
                        >
                          <p>
                            <span className="text-[#22D3EE] font-semibold">
                              Focus:
                            </span>{" "}
                            {it.focus}
                          </p>
                          <p>
                            <span className="text-[#22D3EE] font-semibold">
                              Output:
                            </span>{" "}
                            {it.output}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DeliveryModel;
