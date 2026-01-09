import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChat } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMicrophone } from "react-icons/hi2";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const agents = [
    { name: "AI Chatbot", icon: HiChat },
    { name: "WhatsApp AI", icon: FaWhatsapp },
    { name: "Voice AI Agent", icon: HiOutlineMicrophone },
  ];
  // Motion variants
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18 },
    },
  };
  return (
    <section className="py-20 bgGradient text-white">
      {/* Heading */}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl text-center mb-10 py-2 mt-3 font-semibold bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
        }}
      >
        Contact Syvairo
      </motion.h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-1  gap-16 px-6">
        {/* AI Agents */}
        <div>
          <h2 className="text-2xl text-center md:text-3xl font-semibold mb-4">
            Meet Our AI Workforce
          </h2>
          <p className="text-gray-300 text-center mb-10">
            Experience the power of agents built by our own team, for our own
            business
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 grid md:grid-cols-3  text-center gap-8"
          >
            {agents.map((agent, i) => {
              const Icon = agent.icon;

              return (
                <motion.div
                  key={i}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty(
                      "--x",
                      `${e.clientX - rect.left}px`
                    );
                    e.currentTarget.style.setProperty(
                      "--y",
                      `${e.clientY - rect.top}px`
                    );
                  }}
                  className="
                            group relative rounded-2xl p-8 overflow-hidden
                            transition-all duration-300
                            hover:-translate-y-2 hover:scale-[1.03]
                            hover:shadow-[0_25px_60px_rgba(0,206,209,0.25)]
                            select-none
                          "
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid rgba(0,206,209,0.35)",
                  }}
                >
                  {/* CURSOR GLOW */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `
                                radial-gradient(
                                  180px circle at var(--x) var(--y),
                                  rgba(0,206,209,0.25),
                                  transparent 70%
                                )
                              `,
                    }}
                  />

                  {/* ICON */}
                  <div
                    className="
                              w-12 h-12 mx-auto mb-4 flex items-center justify-center
                              rounded-xl
                              bg-gradient-to-br from-cyan-400 to-cyan-600
                              shadow-[0_0_25px_rgba(0,206,209,0.55)]
                            "
                  >
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* TITLE */}
                  <p className="text-lg font-semibold">{agent.name}</p>

                  {/* SUBTEXT */}
                  <p className="mt-2 text-sm text-gray-300">
                    Live & ready to interact
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="">
          <h2 className="text-2xl text-center md:text-3xl font-semibold mb-4">
            Send a Message
          </h2>
          <p className="text-gray-300 text-center mb-10">
            Fill out the form and our team will reach out within 24 hours.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--card-bg)] max-w-3xl mx-auto p-10 rounded-3xl border border-cyan-400/30 shadow-xl"
          >
            <form className="space-y-6 ">
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-5 py-3 rounded-xl bg-transparent border border-cyan-400/30 focus:border-cyan-400 outline-none transition shadow-[0_0_0_rgba(0,0,0,0)] focus:shadow-[0_0_25px_rgba(0,206,209,0.4)]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@email.com"
                  className="w-full px-5 py-3 rounded-xl bg-transparent border border-cyan-400/30 focus:border-cyan-400 outline-none transition shadow-[0_0_0_rgba(0,0,0,0)] focus:shadow-[0_0_25px_rgba(0,206,209,0.4)]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-3 rounded-xl bg-transparent border border-cyan-400/30 resize-none focus:border-cyan-400 outline-none transition shadow-[0_0_0_rgba(0,0,0,0)] focus:shadow-[0_0_25px_rgba(0,206,209,0.4)]"
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-cyan-400 to-cyan-600 text-black shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
