import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "../Media/Media";
import { HiOutlineDownload } from "react-icons/hi";

const LeftBanner = () => {
  const handleDownload = () => {
    const filePath = "/public/resume.pdf";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Habibul Bashar - Resume";
    link.click();
  };

  const [text] = useTypewriter({
    words: ["Frontend Developer.", "MERN Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl md:text-5xl font-bold my-text">
          Hi, I&apos;m
          <span className="pl-4">Habibul Bashar</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-bold my-text">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#F266AB"
          />
        </h2>
        <p className=" text-lg leading-6 tracking-wide capitalize my-text-second">
          I have dedicated myself to help clients by delivering cutting-edge web
          solutions that drive them to achieve their digital goals.
        </p>
        <div>
          <button
            onClick={handleDownload}
            className="rounded-md px-3.5 py-2 mb-4 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
              <span className="flex justify-center items-center gap-2">
                Get Resume <HiOutlineDownload className=" animate-bounce duration-300" />
              </span>
            </span>
          </button>
          <Media />
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
