import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 px-4 py-5 flex flex-col gap-5 xl:gap-0 md:flex-row justify-center items-center violet-gradient"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
