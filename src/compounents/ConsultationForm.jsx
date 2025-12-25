import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [1, 2, 3];

export default function ConsultationForm() {
  const [step, setStep] = useState(1);

  const next = () => step < 3 && setStep(step + 1);
  const prev = () => step > 1 && setStep(step - 1);

  return (
    <div className="my-36 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-[#3a1b6e] via-[#2a144f] to-[#0b0714] p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-300">
            Schedule a free consultation
          </h2>
          <p className="text-gray-300 mt-3 max-w-xl mx-auto">
            Discover how Opusmatic can automate your business processes. Book a
            free consultation for a personalized assessment.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            30-minute consultation · No obligations
          </p>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-between mb-10 relative">
          <div className="absolute left-0 right-0 h-[2px] bg-gray-600 top-1/2 -translate-y-1/2" />

          {steps.map((s) => (
            <div
              key={s}
              className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                ${
                  step >= s
                    ? "bg-blue-500 text-white"
                    : "bg-gray-600 text-gray-300"
                }`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Form Content */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Full Name – Mandatory */}
              <Input label="Full Name *" placeholder="Your full name" />

              {/* Company Name – Optional */}
              <Input label="Company Name" placeholder="Your company name" />

              {/* Email Address – Mandatory */}
              <Input
                label="Email Address *"
                placeholder="name@company.com"
                full
              />

              {/* Mobile Number – Optional */}
              <Input
                label="Mobile Number (with country code)"
                placeholder="+92 300 1234567"
                full
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Current Challenges – Optional */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Current Challenges
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your current challenges"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {/* Automation Goals – Optional */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Automation Goals
                </label>
                <textarea
                  rows={4}
                  placeholder="What do you want to automate?"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="text-gray-200"
            >
              Step 3 content (review & submit)
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-10">
          <button
            onClick={prev}
            disabled={step === 1}
            className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-700/40 disabled:opacity-40"
          >
            ← Previous
          </button>

          <button
            onClick={next}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

/* Input Component */
function Input({ label, placeholder, full }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="block text-sm text-gray-300 mb-2">{label}</label>
      <input
        placeholder={placeholder}
        className="
          w-full px-4 py-3 rounded-xl
          bg-black/30 border border-gray-600
          text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-cyan-400
        "
      />
    </div>
  );
}
