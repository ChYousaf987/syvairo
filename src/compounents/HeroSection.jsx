import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const videoRef = useRef(null);


  const [form, setForm] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    description: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!\n" + JSON.stringify(form, null, 2));
    setIsDemoOpen(false);
    setForm({ name: "", company: "", mobile: "", email: "", description: "" });
  };

  // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, // stagger by 0.3s
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative pt-24 md:pt-60 pb-10 flex items-center bg-grain">
      <motion.div
        className="relative max-w-7xl text-center mx-auto px-6 items-center flex flex-col"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* H2 */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl pb-2 font-bold tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
          }}
        >
          Ai Agents that act and Delver
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          We don’t sell tools – We deliver end to end intelligent automation
          solution that run business autonomously
        </motion.p>

        {/* Video */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          onClick={() => setIsVideoOpen(true)}
          className="cursor-pointer rounded-3xl p-5 backdrop-blur-xl relative group mt-20"
          style={{
            backgroundColor: "var(--card-bg)",
            border: `1px solid var(--card-border)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(6px)",
              }}
            >
              <span className="text-white text-2xl ml-1">▶</span>
            </motion.div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <video
              src="/video.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </motion.div>

        {/* Button */}
        <motion.div variants={itemVariants} className="mt-8 relative">
          {/* <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-2xl font-semibold"
            style={{
              backgroundColor: "var(--accent)",
              color: "#000",
            }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Build My AI System → Book Demo
          </motion.button> */}
          <Link to="/ConsultationForm">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-2xl font-semibold"
              style={{
                backgroundColor: "var(--accent)",
                color: "#000",
              }}
            >
              Discover your benefits →
            </motion.button>
          </Link>

          {/* Dropdown */}
          {/* <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-56 rounded-2xl z-20 transition-all duration-300"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <button
                  className="w-full text-left px-4 py-3 transition-all duration-300 hover:bg-[var(--bg-secondary)]"
                  style={{ color: "var(--text-primary)" }}
                  onClick={() => {
                    setDropdownOpen(false);
                    setIsDemoOpen(true);
                  }}
                >
                  Book a Demo
                </button>
                <div style={{ borderTop: "1px solid var(--card-border)" }} />
                <button
                  className="w-full text-left px-4 py-3 transition-all duration-300 hover:bg-[var(--bg-secondary)]"
                  style={{ color: "var(--text-primary)" }}
                  onClick={() => alert("AI Agent Inquiry clicked")}
                >
                  AI Agent Inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence> */}
        </motion.div>
      </motion.div>

      {/* VIDEO MODAL & DEMO FORM MODAL remains unchanged */}
    </section>
  );
};

export default HeroSection;
