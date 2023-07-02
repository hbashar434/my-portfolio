import React from "react";
import Title from "../Title/Title";
import ProjectsCard from "./ProjectsCard";
import project1 from "../../assets/projects/photographySchool.png";
import project2 from "../../assets/projects/curiousKids.png";
import project3 from "../../assets/projects/chef.png";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-4 py-20"
    >
      <Title
        title="VISIT MY PROJECTS AND KEEP YOUR FEEDBACK"
        des="My Projects."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Photography School"
          des="Capturing moments through the lens, our photography school project explores the art of visual storytelling, equipping aspiring photographers with technical skills and creative vision to bring their imaginations to life!"
          src={project1}
          githubUrl={"https://github.com/hbashar434/photography-school-client"}
          projectUrl={"https://photography-school-61da5.web.app/"}
        />
        <ProjectsCard
          title="Curious Kids"
          des="Unleash the imagination of curious kids with our robot toys project, where playful learning meets cutting-edge technology. Join us on a journey of exploration and discovery as young minds dive into the world of robotics!"
          src={project2}
          githubUrl={"https://github.com/hbashar434/curious-kids-client"}
          projectUrl={"https://curious-kids-e1b3e.web.app/"}
        />
        <ProjectsCard
          title="Chef Recipes"
          des="Delight your taste buds on our chef recipe site, where culinary enthusiasts discover a world of gourmet inspiration, elevating their cooking skills with a collection of top chef-crafted recipes and tantalizing flavors!"
          src={project3}
          githubUrl={"https://github.com/hbashar434/chef-recipe-client"}
          projectUrl={"https://chef-recipes-b1dd7.web.app/"}
        />
      </div>
    </section>
  );
};

export default Projects;
