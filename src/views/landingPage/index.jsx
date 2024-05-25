import React from "react";
import "./landingPageStyle.css";
import SubHeroSection from "components/subHeroSection";
import HeroSection from "components/heroSection";
import OurExperience from "components/ourExperience";
import Header from "shared/header";
import FindYourSpace from "components/findYourSpace";
import NotJustApp from "components/notJustApp";
import FeaturedProperties from "components/featuredProperties";
import not_just_app from "assets/not_just_app.png";
import guidemap from "assets/guildmap.svg";

const LandingPage = () => {
  return (
    <main className="landing_page_parent">
      <Header />
      <HeroSection />
      <SubHeroSection />
      <NotJustApp
        title="Resida is Not Just an App"
        subtitle=" We are an ecosystem with you at the center"
        body={`Resida aims to bridge the gap between potential tenants and
               available properties. This app is not just a tool; it's a
              solution for individuals and families who are navigating the
             challenging terrain of apartment hunting in a new or familiar
              city."`}
        image={not_just_app}
        imageStyle={"info_image"}
        imageHeight={"image"}
      />

      <OurExperience />
      <FindYourSpace />
      <NotJustApp
        title="Comprehensive"
        subtitle=" Neighborhood Guides"
        body={` The 'Neighborhood Guides' in Resida are like
         your friendly local experts, giving you the inside
          scoop on the vibe, hotspots, and quirks of each 
          area so you can find your perfect match 
          effortlessly! 🏡✨`}
        image={guidemap}
        imageStyle={"info_image_comprehensive"}
        button={true}
        imageHeight="info_comprehensive_imgheight"
        infoStyle="head_title"
      />
      <FeaturedProperties />
    </main>
  );
};

export default LandingPage;
