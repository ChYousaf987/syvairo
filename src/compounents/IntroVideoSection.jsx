import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineArrowTrendingUp,
  HiOutlineCpuChip,
  HiOutlineRectangleGroup,
} from "react-icons/hi2";
import { RiRobot2Line } from "react-icons/ri";
import { FcSettings } from "react-icons/fc";
import { TbSettingsAutomation } from "react-icons/tb";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Problem",
    desc: "Missed leads, slow teams, manual operations.",
    icon: TbSettingsAutomation,
  },
  {
    title: "AI Agent Takeover",
    desc: "Agents handle replies, calls, bookings & tasks.",
    icon: RiRobot2Line,
  },
  {
    title: "Result",
    desc: "Faster growth, efficiency & higher profits.",
    icon: HiOutlineArrowTrendingUp,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const item = {
  hidden: { y: 60, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

const IntroVideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="py-20 md:py-28 overflow-hidden"
      style={{
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl pb-2 font-semibold tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to left, var(--from), var(--via), var(--to))",
          }}
        >
          How AI Transforms Your Business
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-2xl mx-auto"
          style={{ color: "var(--text-primary)" }}
        >
          From manual chaos to fully automated operations in 3 steps.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={i}
                className="group rounded-2xl p-8 transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.03]
        hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
        hover:bg-[#00ced1]
        select-none"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: `1px solid var(--card-border)`,
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <div className="flex gap-5 items-center ">
                  {/* Icon */}
                  <div
                    className=" w-12 h-12 flex items-center justify-center rounded-xl
          bg-purple-400/20 text-purple-400
          group-hover:bg-white/20 group-hover:text-white
          transition"
                  >
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>

                {/* Description */}
                <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </motion.div>
        <motion.div variants={container} className="mt-8 relative">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              document
                .getElementById("roi-calculator")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-2xl text-black font-semibold"
            style={{
              backgroundColor: "var(--button)",
            }}
          >
            Calculate Your ROI
          </motion.button>
        </motion.div>

        {/* CTA Button */}
      </div>
    </section>
  );
};

export default IntroVideoSection;
