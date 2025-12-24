import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    description: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!\n" + JSON.stringify(form, null, 2));
    setIsDemoOpen(false);
    setForm({ name: "", company: "", mobile: "", email: "", description: "" });
  };

  return (
    <section className="relative pt-24 md:pt-48 pb-10 flex items-center bg-grain">
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            AI Agents That{" "}
            <span style={{ color: "var(--accent)" }}>Act & Deliver</span>
          </h1>

          <p
            className="mt-6 text-lg max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            We don’t sell tools — we deliver end-to-end intelligent automation
            solutions that run your business autonomously.
          </p>

          <div className="mt-8 relative">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-2xl font-semibold"
              style={{
                backgroundColor: "var(--accent)",
                color: "#000",
              }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Build My AI System → Book Demo
            </motion.button>

            {/* Dropdown */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="
        absolute top-full left-0 mt-2 w-56 rounded-2xl z-20
        transition-all duration-300
      "
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  {/* ITEM */}
                  <button
                    className="
          w-full text-left px-4 py-3
          transition-all duration-300
          hover:bg-[var(--bg-secondary)]
        "
                    style={{ color: "var(--text-primary)" }}
                    onClick={() => {
                      setDropdownOpen(false);
                      setIsDemoOpen(true);
                    }}
                  >
                    Book a Demo
                  </button>

                  {/* DIVIDER */}
                  <div style={{ borderTop: "1px solid var(--card-border)" }} />

                  {/* ITEM */}
                  <button
                    className="
          w-full text-left px-4 py-3
          transition-all duration-300
          hover:bg-[var(--bg-secondary)]
        "
                    style={{ color: "var(--text-primary)" }}
                    onClick={() => alert("AI Agent Inquiry clicked")}
                  >
                    AI Agent Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* RIGHT — CLICKABLE VIDEO */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          onClick={() => setIsVideoOpen(true)}
          className="cursor-pointer rounded-3xl p-5 backdrop-blur-xl relative group"
          style={{
            backgroundColor: "var(--card-bg)",
            border: `1px solid var(--card-border)`,
          }}
        >
          {/* Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(6px)",
              }}
            >
              <span className="text-white text-2xl ml-1">▶</span>
            </motion.div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <video
              src="/video.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </motion.div>
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-10 right-0 text-white text-3xl"
              >
                ×
              </button>

              <div className="relative w-full pb-[56.25%]">
                <video
                  src="/video.mp4"
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DEMO FORM MODAL */}
      <AnimatePresence>
        {isDemoOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDemoOpen(false)}
          >
            <motion.div
              className=" relative z-50 w-[90%] md:w-full max-w-lg rounded-2xl px-8 py-4 transition-all duration-300
             hover:-translate-y-2 hover:scale-[1.03]
             hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
             hover:bg-[#00ced1]
             select-none"
              style={{
                background: `linear-gradient(to top, var(--gradient-from), var(--gradient-to))`,
                color: "var(--text-primary)",
                backgroundAttachment: "fixed", // This keeps the background fixed
                backgroundSize: "cover", // Optional: ensures full coverage
                backgroundPosition: "center", // Optional: center the background
                border: `1px solid var(--card-border)`,
                WebkitTapHighlightColor: "transparent",
              }}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsDemoOpen(false)}
                className="absolute top-4 right-4 text-black dark:text-white text-2xl"
              >
                ×
              </button>

              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Book a Demo
              </h2>

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
                  required
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={form.mobile}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
                  required
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={form.description}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
                  rows={4}
                />
                <button
                  type="submit"
                  className="px-6 py-3 mt-2 rounded-2xl font-semibold bg-accent text-black"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
