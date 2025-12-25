import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AutomationCatalogue = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold text-center"
          style={{ color: "var(--text-primary)" }}
        >
          Full AI Automation Catalogue (45+ Agents)
        </motion.h2>

        <p
          className="mt-4 max-w-3xl mx-auto text-center"
          style={{ color: "var(--text-secondary)" }}
        >
          Discover our AI automation solutions across all business needs. Each
          agent is ready to automate, engage, and grow your business.
        </p>

        {/* ===================== TIER 1 ===================== */}
        <div className="mt-20">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl pb-2 text-center font-semibold tracking-tight bg-clip-text text-transparent"
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
            TIER-1 · SMB Ready-to-Launch
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-2xl text-center mb-9 mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Quick-to-deploy solutions for small & medium businesses.
          </motion.p>

          {/* Communication & Support */}
          <Section title="Communication & Support">
            <Agent
              title="WhatsApp AI Receptionist"
              desc="24/7 chat handling, bookings, reminders, and instant answers"
            />
            <Agent
              title="AI Voice Call Center"
              desc="Automated inbound/outbound calls, reminders, and follow-ups"
            />
            <Agent
              title="Website RAG Knowledge Bot"
              desc="Answers queries instantly using company documents"
            />
            <Agent
              title="Multi-Language Chatbots"
              desc="Supports Arabic, English, and other languages"
            />
          </Section>

          {/* Sales & Marketing */}
          <Section title="Sales & Marketing Automation">
            <Agent
              title="Lead Qualification Agent"
              desc="Scores leads, prioritizes, and triggers automatic follow-ups"
            />
            <Agent
              title="Automated Quote / Pricing Agent"
              desc="Generates quotes & PDFs instantly"
            />
            <Agent
              title="Sales Follow-Up & Re-Activation"
              desc="Re-engages dormant leads automatically"
            />
            <Agent
              title="Abandoned Lead Recovery Agent"
              desc="Recovers lost inquiries & missed opportunities"
            />
            <Agent
              title="Social Media Posting Agent"
              desc="Schedules and posts content automatically across platforms"
            />
          </Section>

          {/* Customer Experience */}
          <Section title="Customer Experience">
            <Agent
              title="Review & Promotion Agent"
              desc="Collects reviews and sends coupons automatically (Give a Review → Get Reward)"
            />
            <Agent
              title="Complaint & Return Assistance"
              desc="Manages complaints, returns, and client follow-ups efficiently"
            />
            <Agent
              title="Booking & Appointment Management"
              desc="Schedules appointments and sends reminders to clients"
            />
          </Section>

          {/* HR */}
          <Section title="HR & Internal Workflow">
            <Agent
              title="Resume Screening AI"
              desc="Shortlists candidates automatically"
            />
            <Agent
              title="Employee Onboarding Bot"
              desc="Guides new hires step-by-step"
            />
            <Agent
              title="Attendance & Shift Automation"
              desc="Tracks attendance & manages shifts"
            />
            <Agent
              title="HR FAQ / Policy Bot"
              desc="Answers employee HR questions instantly"
            />
          </Section>

          {/* Operations */}
          <Section title="Operations & Efficiency">
            <Agent
              title="Internal RAG Assistant"
              desc="Answers SOP & workflow queries internally"
            />
            <Agent
              title="Invoice Reading & Processing"
              desc="Automates invoice approvals & processing"
            />
            <Agent
              title="Order & Delivery Management"
              desc="Tracks orders & deliveries automatically"
            />
            <Agent
              title="Inventory Alerts"
              desc="Sends low-stock notifications & triggers reorders"
            />
            <Agent
              title="AI Meeting Notes"
              desc="Converts meeting audio into actionable tasks & summaries"
            />
          </Section>

          {/* Industry */}
          <Section title="Industry-Specific Solutions">
            <Agent
              title="Real Estate Lead Bot"
              desc="Matches clients with property listings"
            />
            <Agent
              title="Clinic Patient Appointment AI"
              desc="Manages patient bookings & reminders"
            />
            <Agent
              title="Restaurant Order & Menu Bot"
              desc="Handles orders & menu updates automatically"
            />
            <Agent
              title="Retail Inventory & Stock Bot"
              desc="Monitors stock levels & updates inventory"
            />
            <Agent
              title="Insurance / Finance Policy Quote AI"
              desc="Generates accurate quotes for clients"
            />
          </Section>

          {/* Data */}
          <Section title="Data & Analytics">
            <Agent
              title="Data Analyst Bot"
              desc="Generates insights from business data"
            />
            <Agent
              title="Automated Dashboard Generator"
              desc="Creates visual KPI dashboards automatically"
            />
            <Agent
              title="Language Translation Agent"
              desc="Translates content instantly between multiple languages"
            />
          </Section>
        </div>

        {/* ===================== TIER 2 ===================== */}
        <div className="mt-24">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl pb-2 text-center font-semibold tracking-tight bg-clip-text text-transparent"
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
            TIER-2 · Mid-to-Large Enterprise Solutions
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-2xl text-center mb-9 mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Scalable automation for growing businesses.
          </motion.p>

          <Section>
            <Agent
              title="Multi-Agent Business Assistant"
              desc="Manages multiple workflows simultaneously"
            />
            <Agent
              title="Department Automation Suite (HR / Finance / Sales)"
              desc="Independent bots handle department-specific tasks"
            />
            <Agent
              title="AI Back-Office Workflows"
              desc="Streamlines approvals, document processing, and repetitive tasks"
            />
            <Agent
              title="Automated Power BI Reporting"
              desc="Generates real-time dashboards & analytics"
            />
            <Agent
              title="Financial Forecasting Intelligent Agent"
              desc="Predicts sales, expenses, and trends"
            />
            <Agent
              title="Enterprise CRM AI Pipeline"
              desc="Automates lead management, follow-ups, and customer engagement"
            />
            <Agent
              title="Contract & Document OCR Extraction AI"
              desc="Reads contracts and extracts key information automatically"
            />
          </Section>
        </div>

        {/* ===================== TIER 3 ===================== */}
        <div className="mt-24">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl pb-2 text-center font-semibold tracking-tight bg-clip-text text-transparent"
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
            TIER-3 · Enterprise Custom Intelligence
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-2xl text-center mb-9 mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Full enterprise AI orchestration & executive-level automation.
          </motion.p>

          <Section>
            <Agent
              title="Enterprise AI Brain"
              desc="Central hub for managing all agents across departments"
            />
            <Agent
              title="AI COO Decision Engine"
              desc="Monitors KPIs & workflows for executive insights"
            />
            <Agent
              title="Audit & Compliance Automation"
              desc="Tracks compliance & performance gaps"
            />
            <Agent
              title="Legal / Contract Understanding AI"
              desc="Reads complex legal & business documents"
            />
            <Agent
              title="Inter-Department Agent Orchestration"
              desc="Coordinates multiple agents efficiently"
            />
            <Agent
              title="Fully Autonomous Corporate AI Control Tower"
              desc="Supervises enterprise-wide operations automatically"
            />
          </Section>
        </div>

        {/* CTA */}
        <div className="mt-24 flex justify-center gap-4 flex-wrap">
          <button
            className="px-8 py-4 rounded-2xl font-semibold"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--bg-primary)",
            }}
          >
            Book Agent Demo
          </button>

          <Link to="/contact"
            className="px-8 py-4 rounded-2xl border" style=
            {{
              borderColor: "var(--accent)",
              color: "var(--text-primary)",
            }}
            > Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ---------- Helper Components ---------- */

const Section = ({ title, children }) => (
  <div className="mb-16">
    {title && (
      <h4
        className="text-2xl  pb-2 font-semibold tracking-tight bg-clip-text text-transparent"
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
        {title}
      </h4>
    )}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
  </div>
);

const Agent = ({ title, desc }) => (
  <motion.div
    className="rounded-2xl p-8 transition-all duration-300
             hover:-translate-y-2 hover:scale-[1.03]
             hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
             hover:bg-[#00ced1]
             select-none"
    style={{
      backgroundColor: "var(--card-bg)",
      border: `1px solid var(--card-border)`,
      WebkitTapHighlightColor: "transparent",
      color: "var(--text-primary)",
    }}
  >
    <h5 className="font-semibold mb-2 ">{title}</h5>
    <p
      className="text-sm text-secondary"
      style={{ color: "var(--text-secondary)" }}
    >
      {desc}
    </p>
  </motion.div>
);

export default AutomationCatalogue;
