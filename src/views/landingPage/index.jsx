import React from "react";
import "./landingPageStyle.css";
import SubHeroSection from "components/subHeroSection";
import HeroSection from "components/heroSection";
import OurExperience from "components/ourExperience";
import Header from "shared/header";
import FindYourSpace from "components/findYourSpace";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SubHeroSection />
      <OurExperience />
      <FindYourSpace />
    </div>
  );
};

export default LandingPage;
