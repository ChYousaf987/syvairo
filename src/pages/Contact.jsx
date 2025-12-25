import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add API or email sending logic
    alert("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="py-28 px-6"
      style={{
        color: "var(--text-primary)",
      }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Contact Syvairo
      </motion.h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Live Agent Widgets */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold mb-4">Chat with Our Agents</h2>
          <p className="text-secondary mb-4">
            Our live agents are here to help you 24/7. Start a conversation
            below.
          </p>

          {/* Example live agent widgets */}
          <div className="flex flex-col gap-4">
            <div
              className="p-4 rounded-xl shadow-md cursor-pointer transition hover:scale-105"
              style={{
                backgroundColor: "var(--card-bg)",
                border: `1px solid var(--card-border)`,
              }}
            >
              <p className="font-semibold">AI Sales Agent</p>
              <p className="text-sm text-secondary">Available Now</p>
            </div>
            <div
              className="p-4 rounded-xl shadow-md cursor-pointer transition hover:scale-105"
              style={{
                backgroundColor: "var(--card-bg)",
                border: `1px solid var(--card-border)`,
              }}
            >
              <p className="font-semibold">Customer Support Agent</p>
              <p className="text-sm text-secondary">Online 24/7</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Send a Message</h2>
          <p className="text-secondary mb-6">
            Fill out the form and our team will reach out within 24 hours.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-xl border"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                color: "var(--text-primary)",
              }}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-xl border"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                color: "var(--text-primary)",
              }}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full px-4 py-2 rounded-xl border resize-none"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                color: "var(--text-primary)",
              }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl font-semibold mt-2"
              style={{ backgroundColor: "var(--accent)", color: "#000" }}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Start Automation Today</h2>
        <p className="text-secondary mb-6">
          Book a strategy call with our experts.
        </p>
        <a
          href="mailto:contact@syvairo.com"
          className="inline-block px-8 py-4 rounded-2xl font-semibold text-lg"
          style={{ backgroundColor: "var(--accent)", color: "#000" }}
        >
          Start Automation → Book a Strategy Call
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
