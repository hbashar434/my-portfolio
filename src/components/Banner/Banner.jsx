import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import banner from "../../assets/banner/banner.jpg";

const Banner = () => {
  return (
    <section
      id="home"
      style={{ backgroundImage: `url(${banner})` }}
      className="w-full pt-10 pb-20 px-4 py-5 flex flex-col gap-5 xl:gap-0 md:flex-row justify-center items-center"
      
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
