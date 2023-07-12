import React, { useEffect } from "react";
import contact from "../../assets/lottie/contact.json";
import Lottie from "lottie-react";
import Media from "../Media/Media";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactInfo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="md:w-2/5 p-4 flex flex-col items-center"
      data-aos="fade-up-right"
      data-aos-offset="200"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <Lottie className="h-60" animationData={contact} loop={true} />
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-bold my-text">Habibul Bashar</h3>
        <p className="text-lg font-normal my-text-second">
          MERN Stack Developer
        </p>
        <p className="text-base my-text-second flex items-center gap-2">
          Phone: <span className="my-text-second">+880 1613506705</span>
        </p>
        <p className="text-base my-text-second flex items-center gap-2">
          Email:{" "}
          <span className="my-text-second">habibul.bashar434@gmail.com</span>
        </p>
        <Media />
      </div>
    </div>
  );
};

export default ContactInfo;
