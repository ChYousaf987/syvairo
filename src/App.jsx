import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPostPage from "./pages/BlogPostPage";
import Navbar from "./compounents/Navbar";
import Footer from "./compounents/Footer";
import MediaBlog from "./pages/MediaBlog";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Legal from "./pages/Legal";
import AutomationCatalogue from "./pages/AutomationCatalogue";
import AnimatedCanvasBackground from "./compounents/AnimatedCanvasBackground";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="relative">
        <AnimatedCanvasBackground />
        <div className="relative z-10">
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/media" element={<MediaBlog />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/catalogue" element={<AutomationCatalogue />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
