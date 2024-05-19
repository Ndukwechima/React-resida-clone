import React from "react";
import "./landingPageStyle.css";
import SubHeroSection from "components/subHeroSection";
import HeroSection from "components/heroSection";
import OurExperience from "components/ourExperience";
import Header from "shared/header";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SubHeroSection />
      <OurExperience />
    </div>
  );
};

export default LandingPage;
