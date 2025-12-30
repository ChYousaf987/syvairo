import React from "react";
import HerosSection from "../compounents/HeroSection";
import IntroVideoSection from "../compounents/IntroVideoSection";
import WhyChooseSyvairo from "../compounents/WhyChooseSyvairo";
import CaseStudies from "../compounents/CaseStudies";
import ClientTrustLiveAgents from "../compounents/ClientTrustLiveAgents";
import ROICalculator from "../compounents/ROICalculator";
import FAQ from "./FAQ";
import FloatingAgents from "../compounents/FloatingAgents";

const Home = () => {
  return (
    <div className="relative">
      <div className="relative z-10">
        <HerosSection />
        <IntroVideoSection />
        <WhyChooseSyvairo />
        <ClientTrustLiveAgents />
        <ROICalculator/>
        <FAQ/>
        <FloatingAgents/>
      </div>
    </div>
  );
};

export default Home;
