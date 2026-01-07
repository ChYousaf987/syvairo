import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

export default function ConsultationForm() {
 

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const selectedAgent = location.state?.selectedAgent || "";
  const tier = location.state?.tier || "";
  
   const [goals, setGoals] = useState(() => {
     if (selectedAgent) {
       return `Interested in ${selectedAgent} (${tier}).\n\nMy automation goals are:\n`;
     }
     return "";
   });

  const next = () => {
    if (step < 1) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  


  return (
    <div className="py-20 flex bgGradientOutPadding h- items-center justify-center px-2 md:px-4">
      <div
        className="w-full max-w-2xl bg-gray-600/30 shadow-2xl relative group rounded-2xl py-6 px-3 md:px-8 transition-all duration-300
        hover:-translate-y-2 hover:scale-[1]
        hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
        hover:bg-[#00ced1]
        select-none"
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid rgba(0,206,209,0.35)",
        }}
      >
        {/* Header */}
        {!submitted && (
          <div className="text-center ">
            <div className="flex w-full">
              {!submitted && (
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition mb-"
                >
                  <HiArrowLeft size={18} />
                </Link>
              )}

              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xl md:text-3xl mx-auto text-center font-semibold tracking-tight bg-clip-text text-transparent"
                style={{
                  backgroundImage: `
                         linear-gradient(
                           180deg,
                           var(--text-primary),
                           var(--accent)
                         )
                       `,
                  textShadow: `
                  0 0 38px rgba(0, 206, 209, 0.45),
                  0 0 20px rgba(0, 206, 209, 0.25)
                `,
                }}
              >
                Schedule a free consultation
              </motion.h2>
            </div>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="my-2 max-w-2xl mx-auto"
              style={{ color: "var(--text-primary)" }}
            >
              Discover how Opusmatic can automate your business processes. Book
              a free consultation for a personalized assessment.
            </motion.p>
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
              className="grid grid-cols-1 md:grid-cols-2 gap-2"
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

              <div className="md:col-span-2">
                <label className="block text-sm text-gray-300 mb-2">
                  Challenges & Automation Goals
                </label>

                <textarea
                  rows={4}
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  placeholder="What processes you want to automate"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white placeholder-gray-400
      focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
          <div className="flex justify-end mt-3">
            <motion.button
              onClick={next}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 0 10px #00ced1, 0 0 20px #00ced1",
              }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-2 rounded-full w-full md:w-auto bg-cyan-600 border-2 border-cyan-500 font-bold text-white text-lg transition-all duration-300"
              style={{
                boxShadow: "0 0 2px #00ced1, 0 0 10px #00ced1", // neon glow
              }}
            >
              Submit →
            </motion.button>
          </div>
        )}
        <hr className="mt-5 border-[1] border-gray-600" />
        {/* EXPECTATION SECTION */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400 mb-2">
            Your data will be processed according to our{" "}
            <span className="text-cyan-400 cursor-pointer">Privacy Policy</span>
            .
          </p>

          <h3 className="text-md font-semibold text-white mb-8">
            What you can expect during the consultation:
          </h3>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Card 1 */}
            <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-cyan-400 text-xl">◎</div>
              <div className="text-left">
                <p className="font-semibold text-sm text-white">
                  Analysis of your current processes
                </p>
                <p className="text-xs text-gray-400">
                  Identification of automation opportunities
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-cyan-400 text-xl">✔</div>
              <div className="text-left">
                <p className="font-semibold text-sm text-white">
                  AI solutions explanation
                </p>
                <p className="text-xs text-gray-400">
                  Customized advice for your business
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-cyan-400 text-xl">↗</div>
              <div className="text-left">
                <p className="font-semibold text-sm text-white">
                  ROI calculation and implementation plan
                </p>
                <p className="text-xs text-gray-400">
                  Concrete steps towards results
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-cyan-400 text-xl">◷</div>
              <div className="text-left">
                <p className="font-semibold text-sm text-white">
                  30-minute consultation
                </p>
                <p className="text-xs text-gray-400">
                  No obligations · Directly applicable advice
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            Discover more about our{" "}
            <Link to="/services" className="text-cyan-400 cursor-pointer">
              services and approach
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

/* Input Component */
function Input({ label, placeholder, full }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="block text-sm text-gray-300 mb-1">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
    </div>
  );
}
