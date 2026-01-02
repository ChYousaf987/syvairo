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
import ConsultationForm from "./compounents/ConsultationForm";
import Services from "./pages/Services";
import PurpleNeonBlackBackground from "./compounents/PurpleNeonBlackGradient";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="relative bg-black">
        {/* <AnimatedCanvasBackground theme={theme} /> */}
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
            <Route path="/ConsultationForm" element={<ConsultationForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/test" element={<div className="relative h-screen w-full">
              <PurpleNeonBlackBackground />
              <h1>Test</h1>
            </div>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
