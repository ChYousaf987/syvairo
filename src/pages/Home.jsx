import React from "react";
import HerosSection from "../compounents/HeroSection";
import IntroVideoSection from "../compounents/IntroVideoSection";
import WhyChooseSyvairo from "../compounents/WhyChooseSyvairo";
import CaseStudies from "../compounents/CaseStudies";
import ClientTrustLiveAgents from "../compounents/ClientTrustLiveAgents";
import TopHighROIAgents from "../compounents/TopHighROIAgents";
import TieredSolutions from "../compounents/TieredSolutions";
import TechStack from "../compounents/TechStack";
import ROICalculator from "../compounents/ROICalculator";
import DeliveryModel from "../compounents/DeliveryModel";
import MediaPreview from "../compounents/MediaPreview";
import AnimatedBackground from "../compounents/AnimatedBackground";
import FloatingAgents from "../compounents/FloatingAgents";

const Home = () => {
  return (
    <div
      className="relative"
      style={{
        background: `linear-gradient(to left, var(--gradient-from), var(--gradient-to))`,
        color: "var(--text-primary)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HerosSection />
      <IntroVideoSection />
      <WhyChooseSyvairo />
      <CaseStudies />
      <ClientTrustLiveAgents />
      <TopHighROIAgents />
      <TieredSolutions />
      <TechStack />
      <ROICalculator />
      <DeliveryModel />
      <MediaPreview />

      <FloatingAgents />
    </div>
  );
};

export default Home;
