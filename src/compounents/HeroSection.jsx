import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AiOutlineAudioMuted,
  AiOutlinePauseCircle,
  AiOutlinePlayCircle,
  AiOutlineSound,
} from "react-icons/ai";

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

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
    <section className="relative h-screen pt-24 pb-10 flex items-center bg-grain">
      <motion.div
        className="relative max-w-7xl text-center mx-auto px-6 items-center flex flex-col"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* H2 */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl pb-2 font-bold tracking-tight bg-clip-text text-transparent"
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
          Ai Agents that act and Delver
        </motion.h2>
        {/* bg-gradient-to-l from-[#63A4FA] via-[#f701ff] to-[#63A4FA] */}

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-2xl mx-auto"
          style={{ color: "var(--text-primary)" }}
        >
          We don’t sell tools – We deliver end to end intelligent automation
          solution that run business autonomously
        </motion.p>

        {/* Video */}
        <motion.div
          variants={itemVariants}
          className="cursor-pointer rounded-3xl p-5 backdrop-blur-xl relative group mt-10"
          style={{
            backgroundColor: "var(--card-bg)",
            border: `1px solid var(--card-border)`,
          }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            {/* VIDEO */}
            <video
              ref={videoRef}
              src="/video.mp4"
              autoPlay
              loop
              muted={muted}
              playsInline
              className="w-full h-[40vh] object-cover"
              onTimeUpdate={() => {
                const v = videoRef.current;
                setProgress((v.currentTime / v.duration) * 100);
              }}
            />

            {/* CONTROLS (YouTube Style) */}
            <div
              className="
        absolute bottom-0 left-0 right-0
        bg-gradient-to-t from-black/80 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        p-3
      "
            >
              {/* Progress Bar */}
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => {
                  const v = videoRef.current;
                  v.currentTime = (e.target.value / 100) * v.duration;
                }}
                className="w-full h-1 mb-3 accent-white cursor-pointer"
              />

              {/* Controls Row */}
              <div className="flex items-center justify-between text-white text-sm">
                {/* Left Controls */}
                <div className="flex items-center gap-4">
                  {/* Play / Pause */}
                  <button
                    onClick={() => {
                      if (videoRef.current.paused) {
                        videoRef.current.play();
                        setPlaying(true);
                      } else {
                        videoRef.current.pause();
                        setPlaying(false);
                      }
                    }}
                  >
                    {playing ? (
                      <AiOutlinePauseCircle size={25} />
                    ) : (
                      <AiOutlinePlayCircle size={25} />
                    )}
                  </button>

                  {/* Mute */}
                  <button
                    onClick={() => {
                      videoRef.current.muted = !muted;
                      setMuted(!muted);
                    }}
                  >
                    {muted ? (
                      <AiOutlineAudioMuted size={18} />
                    ) : (
                      <AiOutlineSound size={18} />
                    )}
                  </button>
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-4">
                  {/* Fullscreen */}
                  <button
                    onClick={() => {
                      if (videoRef.current.requestFullscreen) {
                        videoRef.current.requestFullscreen();
                      }
                    }}
                  >
                    ⛶
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Button */}
        <div variants={itemVariants} className="mt-8 relative">
          <Link to="/ConsultationForm">
            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow: "0 0 10px #00ced1, 0 0 20px #00ced1",
              }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-2xl border-2 border-cyan-500 bg-transparent font-bold text-white text-lg transition-all duration-300"
              style={{
                boxShadow: "0 0 2px #00ced1, 0 0 10px #00ced1", // neon glow
              }}
            >
              Discover your benefits →
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* VIDEO MODAL & DEMO FORM MODAL remains unchanged */}
    </section>
  );
};

export default HeroSection;
