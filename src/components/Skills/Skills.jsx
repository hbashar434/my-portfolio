import React from "react";
import html from "../../assets/Icon/html.png";
import css from "../../assets/Icon/css.png";
import tailwind from "../../assets/Icon/tailwind.png";
import bootstrap from "../../assets/Icon/bootstrap.png";
import javascript from "../../assets/Icon/javascript.png";
import reactjs from "../../assets/Icon/reactjs.png";
import nextjs from "../../assets/Icon/nextjs.svg";
import nodejs from "../../assets/Icon/nodejs.png";
import express from "../../assets/Icon/express.png";
import mongodb from "../../assets/Icon/mongodb.png";
import git from "../../assets/Icon/git.png";
import figma from "../../assets/Icon/figma.png";

import Tilt from "react-parallax-tilt";

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstarp",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center md:mx-36">
      {technologies.map((item) => (
        <Tilt
          key={item.name}
          className="w-24 h-24 flex justify-center items-center bg-gray-300 rounded-lg"
        >
          <img src={item.icon} alt="icon" className="h-16 w-16 rounded-md" />
        </Tilt>
      ))}
    </div>
  );
};

export default Skills;
