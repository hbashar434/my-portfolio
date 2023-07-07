import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({
  title,
  des,
  src,
  githubUrlClient,
  githubUrlServer,
  projectUrl,
}) => {
  return (
    <div className="gradient-border">
      <div className="w-full p-4 xl:px-6 h-auto xl:py-8 flex flex-col violet-gradient group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
        <div className="w-full overflow-hidden rounded-lg">
          <img
            className="w-full h-64 object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={src}
            alt="src"
          />
        </div>
        <div className="w-full mt-5 flex flex-col  gap-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold uppercase my-text">
                {title}
              </h3>
              <div className="flex gap-2">
                <a
                  href={githubUrlClient}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-purple-900 duration-300 cursor-pointer">
                    <BsGithub />
                  </span>
                </a>
                <a
                  href={githubUrlServer}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-purple-900 duration-300 cursor-pointer">
                    <BsGithub />
                  </span>
                </a>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-blue-900 duration-300 cursor-pointer">
                    <FaGlobe />
                  </span>
                </a>
              </div>
            </div>
            <p className="text-sm tracking-wide mt-3 my-text-second duration-300">
              {des}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
