import React, { useEffect } from "react";
import Lottie from "lottie-react";
import Title from "../Title/Title";
import developer from "../../assets/lottie/developer.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "../Skills/Skills";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="about" className="w-full md:px-4 pt-20">
      <Title title="INTRODUCTION" des="Overview." />
      <div
        className="p-4 md:p-8 violet-gradient rounded-md"
      >
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="w-full md:px-4 py-5 flex flex-col gap-5 xl:gap-0 md:flex-row justify-center"
        >
          <p className="my-text-second text-lg md:w-1/2">
            I am currently in my final year pursuing a Bachelor of Science
            degree in Computer Science at the Institute of Science and
            Technology. I&apos;m a skilled web developer with expertise in
            Javascript, React, Node.js, Express.js, Mongodb, and Next.js.
            I&apos;m a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. I am constantly exploring new tools and
            techniques to stay up-to-date with the ever-evolving web development
            landscape. My goal is to deliver clean, maintainable code that
            adheres to industry best practices and provides an exceptional user
            experience. When I&apos;m not coding, you can find me exploring
            nature or diving into the pages of a good book. Let&apos;s work
            together to bring your ideas to life!
          </p>
          <div className=" md:w-1/2">
            <Lottie className="md:h-80" animationData={developer} loop={true} />
          </div>
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default About;
