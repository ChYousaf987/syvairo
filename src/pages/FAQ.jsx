import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Implementation typically takes 2–6 weeks depending on your workflow complexity.",
  },
  {
    question: "Can Syvairo integrate with existing software?",
    answer:
      "Yes, our AI agents integrate with CRMs, ERPs, WhatsApp, and other enterprise tools.",
  },
  {
    question: "How much cost savings can I expect?",
    answer:
      "Clients typically see 20–50% savings in operational costs within the first 3 months.",
  },
  {
    question: "Do I need technical knowledge to use Syvairo?",
    answer:
      "No, our agents are plug-and-play with intuitive dashboards, requiring minimal technical knowledge.",
  },
  {
    question: "Are enterprise-level solutions available?",
    answer:
      "Absolutely! Our system is modular and scalable to handle SMBs and enterprise needs.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="py-28 px-6"
      style={{
        color: "var(--text-primary)",
      }}
    >
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl border"
            style={{
              borderColor: "var(--card-border)",
              backgroundColor: "var(--card-bg)",
            }}
          >
            <button
              className="w-full flex justify-between items-center p-5 font-semibold text-left"
              onClick={() => toggleIndex(index)}
            >
              {faq.question}
              {activeIndex === index ? (
                <HiChevronUp className="w-6 h-6 text-accent" />
              ) : (
                <HiChevronDown className="w-6 h-6 text-accent" />
              )}
            </button>
            {activeIndex === index && (
              <div className="p-5 pt-0 text-secondary">{faq.answer}</div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
