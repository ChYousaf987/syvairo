import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlinePhone,
  HiOutlineCalendarDays,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineBanknotes,
  HiOutlineChartBar,
  HiOutlineCog,
  HiOutlineBuildingOffice2,
  HiOutlineRocketLaunch,
  HiOutlineStar,
} from "react-icons/hi2";

/* ---------------- PAGE ---------------- */

const AutomationCatalogue = () => {
  return (
    <section className="py-20 md:py-28 text-white text-center bgGradient">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-center
                     bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(180deg, var(--text-primary), var(--accent))",
            textShadow:
              "0 0 38px rgba(0,206,209,0.35), 0 0 18px rgba(0,206,209,0.2)",
          }}
        >
          Full AI Automation Catalogue (45+ Agents)
        </motion.h2>

        <p
          className="mt-5 max-w-3xl mx-auto text-center"
          style={{ color: "var(--text-secondary)" }}
        >
          Discover enterprise-grade AI agents designed to automate, engage, and
          scale across every business function.
        </p>

        {/* ===================== TIER 1 ===================== */}
        <Tier
          title="TIER-1 · SMB Ready-to-Launch"
          subtitle="Quick-to-deploy solutions for small & medium businesses."
        >
          <Section title="Communication & Support">
            <Agent
              icon={HiOutlineChatBubbleLeftRight}
              title="WhatsApp AI Receptionist"
              desc="24/7 chat handling, bookings & instant replies"
            />
            <Agent
              icon={HiOutlinePhone}
              title="AI Voice Call Center"
              desc="Automated inbound & outbound calls"
            />
            <Agent
              icon={HiOutlineBuildingOffice2}
              title="Website Knowledge Bot"
              desc="Answers queries using your documents"
            />
            <Agent
              icon={HiOutlineUserGroup}
              title="Multi-Language Chatbots"
              desc="Arabic, English & more"
            />
          </Section>

          <Section title="Sales & Marketing">
            <Agent
              icon={HiOutlineBriefcase}
              title="Lead Qualification Agent"
              desc="Scores & prioritizes leads automatically"
            />
            <Agent
              icon={HiOutlineBanknotes}
              title="Pricing & Quote Generator"
              desc="Instant quotes & PDFs"
            />
            <Agent
              icon={HiOutlineRocketLaunch}
              title="Sales Follow-Ups AI"
              desc="Re-engages cold & warm leads"
            />
          </Section>

          <Section title="Customer Experience">
            <Agent
              icon={HiOutlineStar}
              title="Review & Coupon Agent"
              desc="Collects reviews & sends rewards"
            />
            <Agent
              icon={HiOutlineCalendarDays}
              title="Appointment Booking AI"
              desc="Schedules & reminds customers"
            />
          </Section>
        </Tier>

        {/* Divider */}
        <Divider />

        {/* ===================== TIER 2 ===================== */}
        <Tier
          title="TIER-2 · Mid-to-Large Enterprises"
          subtitle="Scalable automation for growing organizations."
        >
          <Section>
            <Agent
              icon={HiOutlineCog}
              title="Multi-Agent Business Assistant"
              desc="Manages multiple workflows at once"
            />
            <Agent
              icon={HiOutlineChartBar}
              title="Automated BI Reporting"
              desc="Live dashboards & KPIs"
            />
            <Agent
              icon={HiOutlineBriefcase}
              title="CRM AI Pipeline"
              desc="Automated lead & customer flows"
            />
            <Agent
              icon={HiOutlineBanknotes}
              title="Finance Automation Suite"
              desc="Invoices, forecasting & approvals"
            />
          </Section>
        </Tier>

        {/* Divider */}
        <Divider />

        {/* ===================== TIER 3 ===================== */}
        <Tier
          title="TIER-3 · Enterprise Custom Intelligence"
          subtitle="Executive-level AI orchestration & control."
        >
          <Section>
            <Agent
              icon={HiOutlineBuildingOffice2}
              title="Enterprise AI Brain"
              desc="Central intelligence hub"
            />
            <Agent
              icon={HiOutlineRocketLaunch}
              title="AI COO Decision Engine"
              desc="Executive insights & optimization"
            />
            <Agent
              icon={HiOutlineCog}
              title="Compliance & Audit Automation"
              desc="Tracks policies & performance"
            />
          </Section>
        </Tier>

        {/* CTA */}
        <div className="mt-24 flex justify-center gap-5 flex-wrap">
          <button
            className="px-8 py-4 rounded-2xl font-semibold transition
                       hover:scale-105"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--bg-primary)",
              boxShadow: "0 0 30px rgba(0,206,209,0.4)",
            }}
          >
            Book Agent Demo
          </button>

          <Link
            to="/contact"
            className="px-8 py-4 rounded-2xl border font-semibold
                       transition hover:bg-[#00ced1] hover:text-black"
            style={{
              borderColor: "var(--accent)",
              color: "var(--text-primary)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ---------------- HELPERS ---------------- */

const Tier = ({ title, subtitle, children }) => (
  <div className="mt-24">
    <motion.h3
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-semibold text-center
                 bg-clip-text text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(180deg, var(--text-primary), var(--accent))",
        textShadow: "0 0 32px rgba(0,206,209,0.25)",
      }}
    >
      {title}
    </motion.h3>

    <p
      className="mt-4 max-w-2xl mx-auto text-center"
      style={{ color: "var(--text-secondary)" }}
    >
      {subtitle}
    </p>

    <div className="mt-16">{children}</div>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mb-20">
    {title && (
      <h4
        className="text-2xl mb-8 font-semibold bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, var(--text-primary), var(--accent))",
        }}
      >
        {title}
      </h4>
    )}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {children}
    </div>
  </div>
);

const Agent = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 220, damping: 18 }}
    className="group relative rounded-2xl p-8 select-none"
    style={{
      backgroundColor: "var(--card-bg)",
      border: "1px solid rgba(0,206,209,0.35)",
    }}
  >
    {/* Neon Glow */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0  blur-xl transition"
      style={{ backgroundColor: "#00ced1" }}
    />

    <div className="relative">
      <div
        className="w-12 h-12 mb-4 flex items-center justify-center mx-auto rounded-xl bg-cyan-400/20 text-cyan-400 group-hover:bg-white/20 group-hover:text-white transition"
      >
        <Icon size={24} />
      </div>

      <h5 className="text-lg font-semibold mb-2 group-hover:text-white transition">
        {title}
      </h5>

      <p className="text-sm text-secondary group-hover:text-white/90 transition">
        {desc}
      </p>
    </div>
  </motion.div>
);

const Divider = () => (
  <div
    className="my-24 h-px w-full bg-gradient-to-r
                  from-transparent via-cyan-400/40 to-transparent"
  />
);

export default AutomationCatalogue;
