import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const next = () => {
    if (step < 1) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="my-24 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl rounded-3xl  bg-gray-600/30 p-8 shadow-2xl relative">
        {/* Back to Home */}
        {!submitted && (
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition mb-6"
          >
            <HiArrowLeft size={18} />
          </Link>
        )}

        {/* Header */}
        {!submitted && (
          <div className="text-center mb-8">
            <h2
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to left, var(--from), var(--via), var(--to))",
              }}
            >
              Schedule a free consultation
            </h2>
            <p className="text-gray-300 mt-3 max-w-xl mx-auto">
              Discover how Opusmatic can automate your business processes. Book
              a free consultation for a personalized assessment.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              30-minute consultation · No obligations
            </p>
          </div>
        )}

        {/* Content */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Input label="Full Name *" placeholder="Your full name" />
              <Input label="Company Name" placeholder="Your company name" />
              <Input
                label="Email Address *"
                placeholder="name@company.com"
                full
              />
              <Input
                label="Mobile Number (with country code)"
                placeholder="+92 300 1234567"
                full
              />

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
          ) : (
            <motion.div
              key="thankyou"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center py-20"
            >
              {/* Logo */}
              <img src="/logoz.png" alt="Logo" className="w-40 mb-6" />

              <h3 className="text-3xl font-semibold text-cyan-300 mb-4">
                Thank you for contacting us!
              </h3>

              <p className="text-gray-300 max-w-md mb-10">
                We’ve received your request and our team will get back to you as
                soon as possible.
              </p>

              <button
                onClick={() => navigate("/")}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-[1.03] transition"
              >
                Explore More
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        {!submitted && (
          <div className="flex justify-end mt-10">
            <button
              onClick={next}
              className="px-8 py-3 rounded-xl  font-semibold hover:scale-[1.02] transition"
              style={{
                backgroundColor: "var(--button)",
                color: "#000",
              }}
            >
              Submit →
            </button>
          </div>
        )}
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
        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
    </div>
  );
}
