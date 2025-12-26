import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = ({ theme, setTheme }) => {
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Media", path: "/media" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  // Close mobile menu if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full z-40 flex justify-center mt-4">
      <div
        className="flex items-center p-2 bg-[#250843cc] rounded-full space-x-4 relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src="/shortlogo.png"
            alt="Logo"
            className="w-12 cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <AnimatePresence>
          {hovered && (
            <>
              <motion.ul
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden md:flex items-center space-x-6 text-white font-medium overflow-hidden"
              >
                {menuItems.map((item, index) => (
                  <li key={index} className="hover:text-accent cursor-pointer">
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </motion.ul>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-12 h-7 rounded-full overflow-hidden backdrop-blur-2xl shadow-xl border border-white/10"
              >
                {/* Track background */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-700 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-gray-900 via-purple-900/20 to-gray-900"
                      : "bg-gradient-to-r from-gray-100 via-blue-100/50 to-gray-100"
                  }`}
                />

                {/* Moving glow */}
                <motion.div
                  animate={{ x: theme === "dark" ? "100%" : "-100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`absolute inset-0 rounded-full blur-2xl opacity-50 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600"
                      : "bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400"
                  }`}
                />

                {/* Slider Knob - Ab position Motion se control ho rahi hai */}
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  animate={{
                    x: theme === "dark" ? 24 : 0, // 24px = w-12 (48px) - w-6 (24px) knob width
                  }}
                  className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full shadow-2xl backdrop-blur-xl border"
                  style={{
                    background:
                      theme === "dark"
                        ? "rgba(0,0,0,0.6)"
                        : "rgba(255,255,255,0.8)",
                    borderColor:
                      theme === "dark"
                        ? "rgba(168, 85, 247, 0.3)"
                        : "rgba(96, 165, 250, 0.3)",
                  }}
                >
                  {/* Inner AI glow dot */}
                  <div
                    className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-purple-400 to-cyan-400 shadow-lg shadow-cyan-400/50"
                        : "bg-gradient-to-br from-blue-400 to-cyan-300 shadow-lg shadow-blue-400/40"
                    }`}
                  />

                  {/* Glass highlight */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Floating particles in dark mode only */}
                {theme === "dark" && (
                  <>
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                      }}
                      className="absolute top-1.5 left-2 w-0.5 h-0.5 bg-cyan-300/80 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                      className="absolute bottom-2 left-4 w-0.5 h-0.5 bg-purple-300/60 rounded-full"
                    />
                  </>
                )}
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white cursor-pointer relative"
          ref={menuRef}
        >
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <HiOutlineX size={30} />
            ) : (
              <HiOutlineMenu size={30} />
            )}
          </button>

          {/* Dropdown below the icon */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 5 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full -right-5 mt-2
bg-[#250843cc] rounded-xl overflow-hidden
flex flex-col items-center space-y-3 py-3
text-white font-medium min-w-[140px] shadow-lg"
              >
                {menuItems.map((item, index) => (
                  <li key={index} className="hover:text-accent">
                    <Link to={item.path} onClick={() => setMobileOpen(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Light/Dark Mode Button */}
      </div>
    </div>
  );
};

export default Navbar;
