import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LeftBanner = () => {
  const handleDownload = () => {
    const filePath = "/public/resume.pdf";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Habibul Bashar - Resume.pdf";
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
            cursorColor="#490b6b"
          />
        </h2>
        <p className=" text-lg leading-6 tracking-wide">
          I have dedicated myself to help clients by delivering cutting-edge web
          solutions that drive them to achieve their digital goals.
        </p>
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-purple-900 text-white w-28 rounded"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default LeftBanner;
