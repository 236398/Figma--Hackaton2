import React from "react";
import AboutHero from "../components/about";
import AboutSection from "../components/aboutSection";
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
