import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROICalculator = () => {
  const [hours, setHours] = useState("");
  const [cost, setCost] = useState("");
  const [showResult, setShowResult] = useState(false);

  // Formatter (USD)
  const usd = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  // Calculations
  const monthlyCost = Number(hours) * Number(cost);
  const yearlyCost = monthlyCost * 12;
  const aiYearlyCost = 2400; // AI automation yearly cost ($)
  const savings = yearlyCost - aiYearlyCost;
  const roi = yearlyCost > 0 ? Math.round((savings / yearlyCost) * 100) : 0;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-center">
      {/* Heading */}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, var(--text-primary), var(--accent))",
        }}
      >
        What Does AI Yield For You?
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mt-4 max-w-2xl mx-auto"
        style={{ color: "var(--text-secondary)" }}
      >
        Calculate how much time and money you can save using intelligent
        automation.
      </motion.p>

      {/* INPUT CARD */}
      <div className="max-w-xl mx-auto mt-16">
        <div
          className="rounded-3xl p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(0,0,0,0.6))",
            backdropFilter: "blur(18px)",
            border: "1px solid var(--card-border)",
          }}
        >
          <h3
            className="text-3xl font-semibold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #8b5cf6, #38bdf8)",
            }}
          >
            Calculate Your Savings
          </h3>

          <p style={{ color: "var(--text-secondary)" }}>
            Discover your potential ROI instantly.
          </p>

          <div className="mt-8 space-y-6 text-left">
            {/* HOURS */}
            <div className="space-y-2">
              <label className="text-sm flex items-center justify-start font-medium text-[var(--text-secondary)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-clock w-4 h-4 mr-2 text-cyan-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>{" "}
                Estimated hours spent on repetitive tasks per month
              </label>

              <input
                type="number"
                placeholder="e.g. 120"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="
        w-full p-4 rounded-xl outline-none transition
        focus:ring-2 focus:ring-[var(--accent)]/40
      "
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid var(--card-border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>

            {/* COST */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--text-secondary)]">
                <span className="text-cyan-500 text-lg">$ </span> Average all-in hourly employee cost
                <span className="opacity-70"> (salary, taxes & overhead)</span>
              </label>

              <input
                type="number"
                placeholder="e.g. $35"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className="
        w-full p-4 rounded-xl outline-none transition
        focus:ring-2 focus:ring-[var(--accent)]/40
      "
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid var(--card-border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowResult(true)}
            className="mt-10 w-full py-4 rounded-full font-semibold text-lg"
            style={{
              background: "linear-gradient(90deg, #2563eb, #0891b2)",
              color: "#fff",
            }}
          >
            📈 Calculate ROI
          </motion.button>
        </div>
      </div>

      {/* RESULT MODAL */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowResult(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.85, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-2xl rounded-3xl p-8"
              style={{
                background:
                  "linear-gradient(180deg, rgba(2,6,23,0.95), rgba(15,23,42,0.95))",
                border: "1px solid var(--card-border)",
              }}
            >
              <button
                onClick={() => setShowResult(false)}
                className="absolute top-4 right-5 text-2xl opacity-70 hover:opacity-100"
              >
                ×
              </button>

              <h3 className="text-xl font-semibold mb-4">
                Your ROI Calculation
              </h3>

              {/* Main Result */}
              <div
                className="p-6 rounded-2xl mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(59,130,246,0.15))",
                }}
              >
                <p className="text-sm opacity-70">Potential Annual Savings</p>
                <p className="text-3xl font-bold mt-2">{usd(savings)} / year</p>
                <p
                  className={`mt-1 text-sm ${
                    roi >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {roi}% ROI
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/30">
                  <p className="text-sm opacity-70">Current Cost</p>
                  <p className="font-semibold">{usd(monthlyCost)} / month</p>
                </div>

                <div className="p-4 rounded-xl bg-black/30">
                  <p className="text-sm opacity-70">Net Savings</p>
                  <p className="font-semibold text-green-400">{usd(savings)}</p>
                </div>
              </div>

              {/* Comparison */}
              <div className="mt-6 text-sm">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Annual Cost (Manual)</span>
                  <span>{usd(yearlyCost)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>With Automation</span>
                  <span>{usd(aiYearlyCost)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Time Saved</span>
                  <span>24 hours / year</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ROICalculator;
