import React from "react";
import Image from "next/image";

const Project = ({ title, heading1, intro, heading2, mainText, imgSrc, linkUrl}) => {
  return (
    <div className="z-30 text-center max-full w-3/4 max-w-6xl p-5 bg-white rounded-lg shadow-lg mt-8 mb-8 dark:bg-gray-800 dark:text-white">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <h1 className="font-black text-blue-500 text-2xl mb-4 underline">
          {title}
        </h1>
      </a>
        <Image
          src={imgSrc}
          width={1000}
          height={300}
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

const Project2 = ({ title, heading1, intro, heading2, mainText, imgSrc, linkUrl }) => {
  return (
    <div className="z-30 flex flex-col max-w-6xl md:flex-row bg-white rounded-lg shadow-lg overflow-hidden p-2 mt-8 mb-8 mx-auto w-3/4 dark:bg-gray-800 dark:text-white">
      
      <div className="md:w-1/2 dark:text-white">
        <Image
          src={imgSrc}
          width={700}
          height={700}
          alt={title}
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>
      <div className="md:w-1/2 p-8 dark:text-white">
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <h1 className="font-black text-blue-500 text-2xl mb-4 underline">
            {title}
          </h1>
        </a>
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

const Project3 = ({ title, heading1, intro, heading2, mainText, imgSrc1, imgSrc2, imgSrc3, linkUrl }) => {
  return (
    <div className="z-30 flex flex-col md:flex-row max-w-6xl rounded-lg shadow-lg overflow-hidden mt-8 mb-8 mx-auto w-3/4 dark:bg-gray-800 dark:text-white">      
      <div className="md:w-3/5 dark:text-white">
        <Image
          src={imgSrc1}
          width={700} // Adjusted for a larger display of the main image
          height={700}
          alt={`${title} - Image 1`}
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>
      <div className="md:w-2/5 flex flex-col justify-between dark:text-white">
        <div className="p-8">
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <h1 className="font-black text-blue-500 text-2xl mb-4 underline">
              {title}
            </h1>
          </a>
          <h2 className="text-black text-xl font-black mb-2 dark:text-white">
            {heading1}
          </h2>
          <p className="text-gray-700 mb-4 dark:text-white">{intro}</p>
          <h2 className="text-black text-xl font-black mb-2 dark:text-white">
            {heading2}
          </h2>
          <p className="text-gray-600 dark:text-white">{mainText}</p>
        </div>
        <div className="p-4 md:p-8">
          <Image
            src={imgSrc2}
            width={300}
            height={300}
            alt={`${title} - Image 2`}
            className="object-cover rounded-lg pb-4"
          />
          <Image
            src={imgSrc3}
            width={300}
            height={300}
            alt={`${title} - Image 2`}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export { Project, Project2, Project3 };
