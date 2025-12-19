import React from "react";
import { motion } from "framer-motion";

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
    <section
      className="py-28 px-6"
      style={{
        backgroundColor: "var(--section-alt)",
        color: "var(--text-primary)",
      }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        About Us
      </motion.h1>

      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <span className="inline-block mb-3 px-4 py-1 rounded-full text-xl font-semibold bg-cyan-500/10 text-cyan-400">
          OUR MISSION
        </span>
        <h2 className="text-3xl font-semibold mb-4">
          Empower Businesses Through Intelligent Automation
        </h2>
        <p className="text-secondary mb-10">
          To empower businesses with AI-powered solutions that automate
          workflows, enhance efficiency, and drive measurable growth.
        </p>

        {/* Vision */}
        <span className="inline-block mb-3 px-4 py-1 rounded-full text-xl font-semibold bg-purple-500/10 text-purple-400">
          OUR VISION
        </span>
        <h2 className="text-3xl font-semibold mb-4">
          Shaping the Future of AI Automation
        </h2>
        <p className="text-secondary">
          To be the global leader in AI automation, helping organizations of all
          sizes transform digitally and achieve their goals faster.
        </p>
      </motion.div>

      {/* Global Team */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Meet Our Global Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-card-bg rounded-2xl p-6 text-center shadow-md"
              style={{ border: `1px solid var(--card-border)` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3
                className="text-xl font-semibold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {member.name}
              </h3>
              <p className="text-secondary mb-1">{member.role}</p>
              <p className="text-sm text-secondary">{member.location}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Company History / Achievements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl mx-auto mt-24 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">
          Our Journey & Achievements
        </h2>
        <p className="text-secondary mb-4">
          Founded in 2020, Syvairo has rapidly expanded globally with clients
          across 15+ countries. We have launched 45+ AI agents, implemented 200+
          automation workflows, and achieved measurable ROI for our clients.
        </p>
        <p className="text-secondary">
          Our commitment to innovation and excellence has earned us recognition
          in the AI & automation industry as a trusted partner for businesses
          worldwide.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
