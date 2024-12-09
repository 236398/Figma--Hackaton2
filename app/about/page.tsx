import React from "react";
import AboutHero from "../components/About";
import AboutSection from "../components/AboutSection";
import AboutPopularProduct from "../components/PopularProduct";

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutSection />
      <AboutPopularProduct />
    </div>
  );
};

export default page;
