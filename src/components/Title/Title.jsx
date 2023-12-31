import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 mb-10 px-2 md:px-0">
      <h3 className="text-sm uppercase font-light text-white tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        {des}
      </h1>
    </div>
  );
};

export default Title;
