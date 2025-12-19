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

const Home = () => {
  return (
    <>
      <div className="bg-black text-white">
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
      </div>
    </>
  );
};

export default Home;
