
import Categories from "./components/Categories";
import CompanyLogo from "./components/CompanyLogo";

import Hero from "./components/Hero";
import HotProduct from "./components/HotProducts";
import OurProduct from "./components/OurProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      

      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}
