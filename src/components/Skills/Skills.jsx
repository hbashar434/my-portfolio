import React, { useEffect } from "react";
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
import Title from "../Title/Title";

import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="w-full md:px-4 pt-20">
      <Title title="What I Bring to the Table" des="My Skills." />
      <div
        className="flex flex-wrap gap-8 justify-center items-center md:mx-36"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        {technologies.map((item) => (
          <Tilt
            key={item.name}
            className="w-24 h-24 flex justify-center items-center bg-skill rounded-lg"
          >
            <img src={item.icon} alt="icon" className="h-16 w-16 rounded-md" />
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
