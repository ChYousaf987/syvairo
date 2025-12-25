import React from "react";
import { motion } from "framer-motion";

const openPositions = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-Time",
    description: "Work on building scalable web applications with React.",
  },
  {
    title: "AI Engineer",
    location: "Bangalore, India",
    type: "Full-Time",
    description: "Develop AI agents and automation workflows for clients.",
  },
  {
    title: "Marketing Specialist",
    location: "Hybrid - Madrid, Spain",
    type: "Part-Time",
    description: "Manage campaigns, content, and social media strategy.",
  },
];

const companyValues = [
  "Innovation: We embrace cutting-edge AI & automation technology.",
  "Collaboration: Teamwork makes us stronger across borders.",
  "Integrity: Honest, transparent, and ethical in all we do.",
  "Growth: Personal & professional growth is a priority.",
];

const Careers = () => {
  return (
    <section
      className=""
      style={{
        color: "var(--text-primary)",
      }}
    >
      <div className="py-28 px-6 max-w-7xl mx-auto overflow-hidden">
        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Careers at Syvairo
        </motion.h1>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=""
        >
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Open Positions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-card-bg p-6 rounded-2xl shadow-md cursor-pointer transition"
                style={{ border: `1px solid var(--card-border)` }}
              >
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {position.title}
                </h3>
                <p className="text-secondary mb-1">
                  <strong>Location:</strong> {position.location}
                </p>
                <p className="text-secondary mb-3">
                  <strong>Type:</strong> {position.type}
                </p>
                <p className="text-secondary mb-4">{position.description}</p>
                <a
                  href="mailto:careers@syvairo.com"
                  className="inline-block px-6 py-2 rounded-xl font-semibold"
                  style={{ backgroundColor: "var(--accent)", color: "#000" }}
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Work Culture & Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="my-10"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Work Culture & Values
          </h2>
          <ul className="list-disc list-inside space-y-2 text-secondary text-lg">
            {companyValues.map((value, i) => (
              <li key={i}>{value}</li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">Want to Join Us?</h2>
          <p className="text-secondary mb-6">
            Send your CV and cover letter to{" "}
            <a href="mailto:careers@syvairo.com" className="text-accent">
              careers@syvairo.com
            </a>{" "}
            or upload it directly.
          </p>
          <a
            href="mailto:careers@syvairo.com"
            className="inline-block px-8 py-4 rounded-2xl font-semibold text-lg"
            style={{ backgroundColor: "var(--accent)", color: "#000" }}
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
