import React from "react";
import "./landingPageStyle.css";
import SubHeroSection from "components/subHeroSection";
import HeroSection from "components/heroSection";
import OurExperience from "components/ourExperience";
import Header from "shared/header";
import FindYourSpace from "components/findYourSpace";
import NotJustApp from "components/notJustApp";
import FeaturedProperties from "components/featuredProperties";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SubHeroSection />
      <NotJustApp />
      <OurExperience />
      <FindYourSpace />
      <FeaturedProperties />
    </div>
  );
};

export default LandingPage;
