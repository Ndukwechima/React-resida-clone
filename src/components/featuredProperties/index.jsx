import React from "react";
import "./featuredPropertiesStyle.css";
import FeaturedCard from "shared/featureCard";
import fp1 from "assets/fp1.svg";
import fp2 from "assets/fp2.svg";
import fp3 from "assets/fp3.svg";
import { FaHeart } from "react-icons/fa";

const FeaturedProperties = () => {
  return (
    <main className="parent_container">
      <section className="feature_property_div">
        <h2>Featured Properties</h2>
        <p>
          Explore our curated selection of premier properties, meticulously
          chosen to suit every lifestyle and budget. From luxurious penthouses
          to cozy family homes, our featured listings showcase the best of Lagos
          living.
        </p>
      </section>
      <section className="featured_card_div">
        <FeaturedCard
          title={"Lillian Pepple Estate"}
          icons={<FaHeart color="#797b7c" size={14} />}
          image={fp1}
          buttons={["Duplexes", "Bungalows", "Self-contains"]}
          price={"From NGN500,000/year"}
        />
        <FeaturedCard
          title={"Naanchin Homes"}
          icons={<FaHeart color="#797b7c" size={14} />}
          image={fp2}
          buttons={["3 Bedroom flats", "Bungalows", "Students Accommation"]}
          price={"From NGN500,000/year"}
        />
        <FeaturedCard
          title={"Horeb Accomodations"}
          icons={<FaHeart color="#797b7c" size={14} />}
          image={fp3}
          buttons={["Mansions", "Bungalows", "Office spaces"]}
          price={"From NGN2,500,000/year"}
        />
      </section>
    </main>
  );
};

export default FeaturedProperties;
