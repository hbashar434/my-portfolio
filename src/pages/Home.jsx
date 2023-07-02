import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Projects from "../components/Projects/Projects";

const Home = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <Navbar />
      <Banner />
      <Projects />
    </div>
  );
};

export default Home;
