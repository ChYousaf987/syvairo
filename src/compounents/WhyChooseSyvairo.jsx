import React from "react";
import { motion } from "framer-motion";
import {
  HiClock,
  HiCog,
  HiOutlinePhone,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiScale,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineBanknotes,
  HiRocketLaunch,
  HiBolt,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { HiPuzzle } from "react-icons/hi";
import { TbBolt } from "react-icons/tb";
import { LuClock2 } from "react-icons/lu";
import { IoCogOutline, IoExtensionPuzzleOutline, IoRocketOutline } from "react-icons/io5";

const benefits = [
  {
    icon: <TbBolt size={26} />,
    title: "AI that acts, not just answers",
    description: "Tasks completed end-to-end automatically",
  },
  {
    icon: <LuClock2 size={26} />,
    title: "No missed leads – 24/7",
    description: "Follow-ups & replies anytime",
  },
  {
    icon: <IoRocketOutline size={26} />,
    title: "45+ automation agents ready",
    description: "Launch in days, not months",
  },
  {
    icon: <IoExtensionPuzzleOutline size={26} />,
    title: "Integrates with any software",
    description: "API, CRM, ERP, WhatsApp",
  },
  {
    icon: <HiScale size={26} />,
    title: "Scalable from SMB → Enterprise",
    description: "Modular automation architecture",
  },
  {
    icon: <IoCogOutline size={26} />,
    title: "Custom AI & RPA solutions",
    description: "Tailored to your exact workflow",
  },
];

const caseStudies = [
  {
    icon: HiOutlinePhone,
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
    icon: HiOutlineCalendarDays,
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
    icon: HiOutlineUserGroup,
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
    icon: HiOutlineStar,
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
    icon: HiOutlineBanknotes,
    title: "Multi-Agent Workflow Automation",
    client: "Financial Services Firm — UK",
    challenge: "Manual back-office tasks caused errors and delays.",
    impact: ["**40%** faster process completion", "**30%** fewer errors"],
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "WhatsApp AI Customer Support",
    client: "Real Estate Agency — UAE",
    challenge:
      "High volume of WhatsApp inquiries with delayed responses and missed follow-ups.",
    impact: [
      "**70%** inquiries handled instantly",
      "**45%** faster lead response time",
      "Higher property viewing conversions",
    ],
  },
];

const WhyChooseSyvairo = () => {
  return (
    <section
      className="py-20 md:py-28 overflow-hidden"
      style={{
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <span
          style={{
            textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)`,
          }}
          className="inline-block mb-3 px-4 py-1 rounded-full text-sm font-semibold bg-cyan-500/10 border border-cyan-700"
        >
          <div className="flex items-center gap-2">
            <div className="text-sm font-semibold text-cyan-400">
              ⭐ Why Choose Syvairo
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
            backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
            textShadow: `0 0 38px rgba(0, 206, 209, 0.35), 0 0 20px rgba(0, 206, 209, 0.2)`,
          }}
        >
          Why Businesses Choose Syvairo
        </motion.h2>

        {/* Benefits Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl p-8 transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.03]
        hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
        hover:bg-[#00ced1] select-none"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid rgba(0,206,209,0.35)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl
          bg-cyan-400/20 text-cyan-400
          group-hover:bg-white/20 group-hover:text-white transition"
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-secondary mt-4">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl mt-14 pb-2 text-center font-semibold tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
            textShadow: `0 0 38px rgba(0, 206, 209, 0.35), 0 0 20px rgba(0, 206, 209, 0.2)`,
          }}
        >
          CASE STUDIES — Real Results from AI Agents
        </motion.h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group rounded-2xl p-8 transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.03]
        hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
        hover:bg-[#00ced1] select-none"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid rgba(0,206,209,0.35)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-xl
            bg-cyan-400/20 text-cyan-400
            group-hover:bg-white/20 group-hover:text-white transition"
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-accent">{item.client}</p>
                  </div>
                </div>

                <p className="text-secondary mb-4">{item.challenge}</p>

                <ul className="space-y-2 text-sm">
                  {item.impact.map((impact, idx) => (
                    <li
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: `• ${impact}` }}
                    />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSyvairo;