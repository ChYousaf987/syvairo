import React from "react";
import { motion } from "framer-motion";
import { HiClock, HiCog, HiPuzzle, HiScale } from "react-icons/hi";
import { HiBolt, HiRocketLaunch } from "react-icons/hi2";

const benefits = [
  {
    icon: <HiBolt className="w-8 h-8 text-accent" />,
    title: "AI that acts, not just answers",
    description: "Tasks completed end-to-end automatically",
  },
  {
    icon: <HiClock className="w-8 h-8 text-accent" />,
    title: "No missed leads – 24/7",
    description: "Follow-ups & replies anytime",
  },
  {
    icon: <HiRocketLaunch className="w-8 h-8 text-accent" />,
    title: "45+ automation agents ready ",
    description: "Launch in days, not months",
  },
  {
    icon: <HiPuzzle className="w-8 h-8 text-accent" />,
    title: "Integrates with any software",
    description: "API, CRM, ERP, WhatsApp",
  },
  {
    icon: <HiScale className="w-8 h-8 text-accent" />,
    title: "Scalable from SMB → Enterprise ",
    description: "Modular automation architecture",
  },
  {
    icon: <HiCog className="w-8 h-8 text-accent" />,
    title: "Custom AI & RPA solutions ",
    description: "Tailored to your exact workflow",
  },
];

const caseStudies = [
  {
    title: "AI Receptionist (Incoming Calls)",
    client: "Mid-sized E-commerce Retailer — USA",
    challenge: "Long wait times and unanswered calls resulted in lost leads.",
    impact: [
      "**60%** calls handled without human intervention",
      "**30%** increase in leads captured",
      "Staff focused on high-value tasks",
    ],
  },
  {
    title: "AI Appointment Booking",
    client: "Healthcare Clinic — Pakistan",
    challenge:
      "Manual scheduling caused double bookings and missed appointments.",
    impact: [
      "**35%** reduction in no-shows",
      "**25%** more weekly appointments",
      "Admin staff freed for patient care",
    ],
  },
  {
    title: "Follow-Up & Lead Qualification",
    client: "Insurance Provider — India",
    challenge: "Slow manual follow-ups caused leads to cool down.",
    impact: [
      "**40%** more leads converted",
      "**50%** faster response time",
      "Sales workload reduced",
    ],
  },
  {
    title: "Review & Coupon Engagement",
    client: "Restaurant Chain — GCC",
    challenge: "Low customer engagement and online reviews.",
    impact: [
      "**60%** increase in online reviews",
      "**20%** higher repeat customer rate",
      "Improved customer satisfaction",
    ],
  },
  {
    title: "Multi-Agent Workflow Automation",
    client: "Financial Services Firm — UK",
    challenge: "Manual back-office tasks caused errors and delays.",
    impact: ["**40%** faster process completion", "**30%** fewer errors"],
  },
];

const WhyChooseSyvairo = () => {
  return (
    <section
      className=" py-20 md:py-28 overflow-hidden"
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
          className="text-3xl pb-2 md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `
      linear-gradient(
        180deg,
        var(--text-primary),
        var(--accent)
      )
    `,
          }}
        >
          Why Businesses Choose Syvairo
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          We don’t just provide AI tools — we implement fully functional systems
          that run your business workflows autonomously.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 transition-all duration-300
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
              <div className="flex items-center space-x-4 mb-4">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 ">
        {/* Intro Text */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl mt-14 pb-2 text-center font-semibold tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `
      linear-gradient(
        180deg,
        var(--text-primary),
        var(--accent)
      )
    `,
          }}
        >
          CASE STUDIES — Real Results from AI Agents (Cards Recommended)
        </motion.h2>

        {/* Cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 transition-all duration-300
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
              <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
              <p className="text-sm text-accent mb-3">{item.client}</p>

              <p className="text-secondary mb-4">{item.challenge}</p>

              <ul className="space-y-2 text-sm">
                {item.impact.map((item, idx) => (
                  <li
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: `• ${item}` }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSyvairo;
