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
import house from "assets/house.svg";
import needOffice from "assets/needOffice.svg";
// import phone1 from "assets/phone1.png";
import Discover from "components/discover";
import FindHome from "components/findHome";
import Footer from "shared/footer";

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
      {/* =================Neiborghood========== */}
      <NotJustApp
        title="Do you have a property?"
        subtitle=" Provide accommodation here in Lagos"
        body={` Own a property in Lagos? Join our platform to 
                effortlessly list your accommodations and connect
                 with eager tenants seeking their perfect home
                  in the vibrant city of Lagos.`}
        image={house}
        imageStyle={"info_image_comprehensive"}
        button={true}
        imageHeight="info_comprehensive_imgheight"
        infoStyle="head_title"
        circle={true}
        circleStyletitle={true}
        circleStyleSubtitle={true}
        reversed
      />

      <Discover />

      <NotJustApp
        title="Need an office space?"
        body={`Seeking office space in Lagos? Look no further!
         Our accommodations offer tailored solutions to meet 
         your workspace needs, ensuring productivity and comfort
          in the heart of Lagos.`}
        image={needOffice}
        imageStyle={"info_image"}
        imageHeight={"image"}
        button={false}
        styledBtn="styled_btn"
      />

      <FindHome />

      <Footer />
    </main>
  );
};

export default LandingPage;
