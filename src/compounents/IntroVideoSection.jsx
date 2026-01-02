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
import { IoMdBusiness } from "react-icons/io";
import PurpleNeonBlackGradient from "./PurpleNeonBlackGradient";
import PurpleNeonBlackBackground from "./PurpleNeonBlackGradient";

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
    <>
        {/* <PurpleNeonBlackBackground /> */}
      <section
        className="relative py-7 overflow-hidden bgGradient"
        style={{
          color: "var(--text-primary)", 
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span
            style={{
              textShadow: `
      0 0 38px rgba(0, 206, 209, 0.45),
      0 0 20px rgba(0, 206, 209, 0.25)
    `,
            }}
            className="inline-block mb-3 px-4 py-1 rounded-full text-sm font-semibold bg-cyan-500/10 border border-cyan-700"
          >
            <div className="flex items-center gap-2">
              <IoMdBusiness />
              <div className="text-sm font-semibold text-cyan-400">
                Business Solutions
              </div>
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
              backgroundImage: `
             linear-gradient(
               180deg,
               var(--text-primary),
               var(--accent)
             )
           `,
              textShadow: `
      0 0 38px rgba(0, 206, 209, 0.45),
      0 0 20px rgba(0, 206, 209, 0.25)
    `,
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
                    border: "1px solid rgba(0,206,209,0.35)",
                  }}
                >
                  <div className="flex gap-5 items-center ">
                    {/* Icon */}
                    <div
                      className=" w-12 h-12 flex items-center justify-center rounded-xl
          bg-cyan-400/20 text-cyan-400
          group-hover:bg-white/20 group-hover:text-white
          transition"
                    >
                      <Icon size={26} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>

                  {/* Description */}
                  <p
                    className="mt-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
          <motion.div variants={container} className="mt-8 relative">
            <motion.button
              onClick={() => {
                document
                  .getElementById("roi-calculator")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
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
              Calculate Your ROI
            </motion.button>
          </motion.div>

          {/* CTA Button */}
        </div>
      </section>
      {/* <hr className="h-px bg-gray-800 my-12 border-0" /> */}
    </>
  );
};

export default IntroVideoSection;
