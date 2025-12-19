import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Media", path: "/media" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Legal", path: "/legal" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img src="/logoz.png" className="w-36" alt="Syvairo" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm">
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -2, color: "var(--accent)" }}
              className="cursor-pointer"
            >
              <Link to={item.path} style={{ color: "var(--text-secondary)" }}>
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="px-4 py-2 rounded-xl border text-sm"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
          >
            Build My AI System
          </button>

          <button
            className="px-4 py-2 rounded-xl text-sm font-semibold"
            style={{
              backgroundColor: "var(--accent)",
              color: "#000",
            }}
          >
            Book Demo
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 text-xl"
            style={{ color: "var(--text-primary)" }}
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 text-xl"
            style={{ color: "var(--text-primary)" }}
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl"
            style={{ color: "var(--text-primary)" }}
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-card-bg border-t border-card-border"
      >
        <div className="flex flex-col items-center py-4 gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              className="px-6 py-2 rounded-xl border text-sm"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
            >
              Build My AI System
            </button>

            <button
              className="px-6 py-2 rounded-xl text-sm font-semibold"
              style={{
                backgroundColor: "var(--accent)",
                color: "#000",
              }}
            >
              Book Demo
            </button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
