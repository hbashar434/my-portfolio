import React from "react";
import bannerImg from "../../assets/banner/HabibulBashar.png";

const RightBanner = () => {
  return (
    <div className="w-full md:w-4/12 flex justify-center items-center">
      <img
        className=""
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
