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
          <img src="/logoz.png" alt="Logo" className="w-36 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <AnimatePresence>
          {hovered && (
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
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 5 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full transform mt-2 bg-[#250843cc] rounded-xl overflow-hidden flex flex-col items-center space-y-3 py-3 text-white font-medium min-w-[120px] shadow-lg"
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
        <motion.button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className={`relative w-[68px] h-9 rounded-full p-[3px] backdrop-blur-xl transition-all duration-300 ${
            theme === "dark"
              ? "bg-black/70 border border-white/10"
              : "bg-white/70 border border-black/10"
          } shadow-[0_12px_30px_rgba(0,0,0,0.25)]`}
        >
          {/* Glow */}
          <span
            className={`absolute inset-0 rounded-full blur-lg opacity-40 ${
              theme === "dark" ? "bg-[var(--accent)]" : "bg-yellow-300"
            }`}
          />

          {/* Icons */}
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs opacity-70">
            ☀️
          </span>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs opacity-70">
            🌙
          </span>

          {/* Slider */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 600, damping: 30 }}
            className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-700 to-gray-900"
                : "bg-gradient-to-br from-white to-gray-200"
            } shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),_0_8px_20px_rgba(0,0,0,0.35)] ${
              theme === "dark" ? "ml-[34px]" : "ml-0"
            }`}
          />
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
