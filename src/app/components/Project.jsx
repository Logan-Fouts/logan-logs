import React from "react";
import Image from "next/image";

const Project = ({
  title,
  heading1,
  intro,
  heading2,
  mainText,
  imgSrc,
  linkUrl,
}) => {
  return (
    <div className="p-4 max-h-svh z-30 flex flex-col md:flex-row max-w-6xl rounded-lg shadow-lg overflow-hidden mt-8 mb-8 mx-auto w-11/12 dark:bg-gray-800 dark:text-white">
      <div className="md:w-3/5 md:h-auto h-1/4">
        <Image
          src={imgSrc}
          width={700}
          height={700}
          alt={`${title} - Image`}
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>
      <div className="hover:scrollbar-thumb-[#1f2836] active:scrollbar-thumb-sky-400 scrollbar scrollbar-thumb-[#1f2836] scrollbar-track-slate-700 overflow-y-scroll md:w-2/5 flex flex-col justify-between">
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
      </div>
    </div>
  );
};

const Project2 = ({
  title,
  heading1,
  intro,
  heading2,
  mainText,
  imgSrc,
  linkUrl,
}) => {
  return (
    <div className="p-4 max-h-svh z-30 flex flex-col md:flex-row max-w-6xl rounded-lg shadow-lg overflow-hidden mx-auto mt-8 mb-8 w-11/12 dark:bg-gray-800 dark:text-white">
      <div className="md:w-3/5 md:h-auto h-1/4">
        <Image
          src={imgSrc}
          width={700}
          height={700}
          alt={`${title} - Image`}
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>
      <div className="hover:scrollbar-thumb-[#1f2836] active:scrollbar-thumb-sky-400 scrollbar scrollbar-thumb-[#1f2836] scrollbar-track-slate-700 overflow-y-scroll md:w-2/5 flex flex-col justify-between">
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
      </div>
    </div>
  );
};

const Project3 = ({
  title,
  heading1,
  intro,
  heading2,
  mainText,
  imgSrc1,
  imgSrc2,
  imgSrc3,
  linkUrl,
}) => {
  return (
    <div className="p-4 max-h-svh z-30 flex flex-col md:flex-row max-w-6xl rounded-lg shadow-lg overflow-hidden mx-auto mt-8 mb-8 w-11/12 dark:bg-gray-800 dark:text-white">
      <div className="md:w-3/5 md:h-auto h-1/4">
        <Image
          src={imgSrc1}
          width={700}
          height={700}
          alt={`${title} - Image 1`}
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>
      <div className="hover:scrollbar-thumb-[#1f2836] active:scrollbar-thumb-sky-400 scrollbar scrollbar-thumb-[#1f2836] scrollbar-track-slate-700 overflow-y-scroll md:w-2/5 flex flex-col justify-between">
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
        <div className="p-8">
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
            alt={`${title} - Image 3`}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export { Project, Project2, Project3 };
