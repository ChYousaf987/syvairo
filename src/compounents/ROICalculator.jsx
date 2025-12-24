import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROICalculator = () => {
  const [hours, setHours] = useState("");
  const [cost, setCost] = useState("");
  const [open, setOpen] = useState(false);

  // Formatter ($)
  const usd = (val) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);

  // ===== DOCUMENT LOGIC (UNCHANGED) =====
  const automationRate = 0.5;

  const monthlyHours = Number(hours);
  const hourlyCost = Number(cost);

  const hoursSavedMonth = monthlyHours * automationRate;
  const hoursSavedYear = hoursSavedMonth * 12;

  const moneySavedMonth = hoursSavedMonth * hourlyCost;
  const moneySavedYear = moneySavedMonth * 12;

  const monthlyCostBefore = monthlyHours * hourlyCost;
  const yearlyCostBefore = monthlyCostBefore * 12;
  const yearlyCostAfter = yearlyCostBefore * automationRate;

  const roi =
    yearlyCostBefore > 0
      ? Math.round((moneySavedYear / yearlyCostBefore) * 100)
      : 0;

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto text-center">
      {/* TITLE */}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl pb-2 text-center font-semibold tracking-tight bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient( 180deg, var(--text-primary), var(--accent) )`,
        }}
      >
        AI Time & Cost Savings Calculator
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mt-4 max-w-2xl mx-auto"
        style={{ color: "var(--text-secondary)" }}
      >
        Calculate how much time and money AI automation can save for your
        business.
      </motion.p>

      {/* INPUT CARD */}
      <div className="max-w-xl mx-auto mt-14 rounded-3xl p-10 bg-black/40 border border-white/10">
        <div className="space-y-6 text-left">
          <div>
            <label className="text-sm opacity-70">Monthly Working Hours</label>
            <input
              type="number"
              max={744}
              min={0}
              placeholder="e.g. 160"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full mt-2 p-4 rounded-xl bg-white/10 outline-none"
            />
          </div>

          <div>
            <label className="text-sm opacity-70">
              Hourly Employee Cost ($)
            </label>
            <input
              type="number"
              min={0}
              placeholder="e.g. 25"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full mt-2 p-4 rounded-xl bg-white/10 outline-none"
            />
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="mt-8 w-full py-4 rounded-full font-semibold text-lg
          bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90"
        >
          Calculate ROI
        </button>
      </div>

      {/* ===== POPUP ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Popup */}
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-2xl rounded-3xl p-8
        bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-5 text-xl opacity-60 hover:opacity-100"
              >
                ✕
              </button>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-8 text-center">
                AI Time & Cost Savings Calculator
              </h3>

              {/* ===== OUTPUT SECTION (DOCUMENT ORDER) ===== */}
              <div className="space-y-5 mb-8">
                {/* 1️⃣ Hours Saved */}
                <div className="rounded-xl p-5 py-8 bg-[#142846] border border-blue-500/20">
                  <p className="text-sm opacity-70">🎯 Hours Saved per Month</p>
                  <p className="text-2xl font-bold text-blue-400">
                    {hoursSavedMonth} hours
                  </p>
                </div>

                <div className="flex gap-4 w-full">
                  {/* 2️⃣ Money Saved per Month */}
                  <div className="rounded-xl p-5 w-full bg-[#261824] border border-green-500/20">
                    <p className="text-sm opacity-70">
                      💰 Money Saved per Month
                    </p>
                    <p className="text-3xl font-bold text-red-400">
                      {usd(moneySavedMonth)}
                    </p>
                  </div>

                  {/* 3️⃣ Money Saved per Year */}
                  <div className="rounded-xl w-full p-6 bg-[#112327] border border-green-400/30">
                    <p className="text-sm opacity-80">
                      💸 Money Saved per Year
                    </p>
                    <p className="text-3xl font-extrabold text-green-400 mt-1">
                      {usd(moneySavedYear)}
                    </p>
                  </div>
                </div>
              </div>

              {/* WOW TEXT */}
              <p className="mb-8 text-sm opacity-80 text-center">
                Wow! By using AI automation, you free up time for strategic work
                and save money instantly!
              </p>

              {/* OPTIONAL BEFORE / AFTER TABLE */}
              <div className="rounded-xl overflow-hidden border border-white/10">
                <div className="grid grid-cols-3 bg-white/5 text-sm font-semibold">
                  <div className="p-3">Metric</div>
                  <div className="p-3">Before AI</div>
                  <div className="p-3">After AI</div>
                </div>

                <div className="grid grid-cols-3 text-sm border-t border-white/10">
                  <div className="p-3">Monthly Costs</div>
                  <div className="p-3">{usd(monthlyCostBefore)}</div>
                  <div className="p-3 text-green-400">
                    {usd(monthlyCostBefore * 0.5)}
                  </div>
                </div>

                <div className="grid grid-cols-3 text-sm border-t border-white/10">
                  <div className="p-3">Time Spent</div>
                  <div className="p-3">{monthlyHours} hrs</div>
                  <div className="p-3 text-blue-400">{hoursSavedMonth} hrs</div>
                </div>

                <div className="grid grid-cols-3 text-sm border-t border-white/10">
                  <div className="p-3">Savings</div>
                  <div className="p-3">–</div>
                  <div className="p-3 text-green-400">
                    {usd(moneySavedMonth)}
                  </div>
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
