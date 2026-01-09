import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCog6Tooth,
  HiOutlineBolt,
  HiOutlineChartBar,
} from "react-icons/hi2";



const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Singh",
    role: "CTO",
    location: "Bangalore, India",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Maria Lopez",
    role: "Head of Marketing",
    location: "Madrid, Spain",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "John Smith",
    role: "Lead Developer",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const About = () => {
  return (
    <>
      <section className="relative h-screen overflow-hidden bgGradient py-24">
        <h1
          className="text-4xl md:text-6xl text-center capitalize my-9 font-bold leading-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
          }}
        >
          about us
        </h1>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
              }}
            >
              Helping Businesses Automate Workflows and Save Costs with AI
              Solutions
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Intelligent Automation | AI Agents | Scalable Growth
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-cyan-400 to-cyan-600 text-black shadow-xl"
            >
              Request a Demo →
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-10 blur-3xl opacity-40 bg-cyan-400/30 rounded-full"></div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden border border-cyan-400/30 shadow-2xl">
              <img
                src="/aboutus.png"
                alt="AI Automation"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <section className="relative overflow-hidden py-24 bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
              }}
            >
              About Syvairo
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Syvairo is an AI automation company focused on helping businesses
              simplify operations, reduce manual effort, and improve efficiency
              through intelligent automation.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We design and implement practical AI solutions such as workflow
              automation, AI agents, and process optimization that integrate
              smoothly with existing systems. Our goal is to deliver real
              business value by saving time, reducing operational costs, and
              enabling scalable growth.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Syvairo follows a lean and flexible delivery approach, allowing us
              to adapt quickly to client needs while maintaining high quality
              and transparency.
            </p>

            {/* ICON FEATURES */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/30 mb-3">
                  <HiOutlineCog6Tooth className="text-cyan-400" size={28} />
                </div>
                <p className="text-sm text-gray-300">Simplify Operations</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/30 mb-3">
                  <HiOutlineBolt className="text-cyan-400" size={28} />
                </div>
                <p className="text-sm text-gray-300">Reduce Manual Work</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/30 mb-3">
                  <HiOutlineChartBar className="text-cyan-400" size={28} />
                </div>
                <p className="text-sm text-gray-300">Improve Efficiency</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-10 blur-3xl opacity-40 bg-cyan-400/20 rounded-full"></div>

            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-cyan-400/30 shadow-2xl">
              <img
                src="/about.png"
                alt="Workflow Automation"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <div className="">
        <img src="/about.png" className="h-screen w-full" alt="" />
      </div>
    </>
  );
};

export default About;
