import React from "react";
import "./../../app/globals.css";

const Project = ({ title, heading1, intro, heading2, mainText, imgSrc }) => {
  return (
    <div className="text-center max-full w-3/4 p-5 bg-white rounded-lg shadow-lg mt-8 mb-8 dark:bg-gray-800 dark:text-white">
      <h1 className="font-black text-black dark:text-white text-2xl mb-4">
        {title}
      </h1>
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-96 object-cover object-center rounded-lg"
      />
      <div className="p-5 dark:text-white">
        <h2 className="text-black text-xl font-black dark:text-white">
          {heading1}
        </h2>
        <p className="text-gray-700 mb-4 dark:text-white">{intro}</p>
        <h2 className="text-black text-xl font-black dark:text-white">
          {heading2}
        </h2>
        <p className="text-gray-600 dark:text-white">{mainText}</p>
      </div>
    </div>
  );
};

const Project2 = ({ title, heading1, intro, heading2, mainText, imgSrc }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden p-2 mt-8 mb-8 mx-auto w-3/4 dark:bg-gray-800 dark:text-white">
      <div className="md:w-1/2 dark:text-white">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>
      <div className="md:w-1/2 p-8 dark:text-white">
        <h1 className="font-black text-black text-2xl mb-4 dark:text-white">
          {title}
        </h1>
        <div className="mb-6 dark:text-white">
          <h2 className="text-black text-xl font-black mb-2 dark:text-white">
            {heading1}
          </h2>
          <p className="text-gray-700 dark:text-white">{intro}</p>
        </div>
        <div>
          <h2 className="text-black text-xl font-black mb-2 dark:text-white">
            {heading2}
          </h2>
          <p className="text-gray-600 dark:text-white">{mainText}</p>
        </div>
      </div>
    </div>
  );
};

export { Project, Project2 };
