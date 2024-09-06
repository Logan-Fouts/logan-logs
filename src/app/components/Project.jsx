import React from "react";
import Image from "next/image";

const ProjectCard = ({ children, className }) => (
  <div
    className={`p-6 max-h-[90vh] z-30 flex flex-col md:flex-row max-w-6xl rounded-xl shadow-2xl overflow-hidden mt-8 mb-8 mx-auto w-11/12 bg-white dark:bg-gray-800 dark:text-white transition-all duration-300 ease-in-out hover:shadow-3xl ${className}`}
  >
    {children}
  </div>
);

const ProjectImage = ({ src, alt, priority = false }) => (
  <div className="md:w-2/5 md:h-auto h-64 relative overflow-hidden rounded-xl">
    <Image
      src={src}
      layout="fill"
      objectFit="cover"
      alt={alt}
      className="transition-transform duration-300 ease-in-out hover:scale-105"
      priority={priority}
    />
  </div>
);

const ProjectContent = ({ children }) => (
  <div className="hover:scrollbar-thumb-[#1f2836] active:scrollbar-thumb-sky-400 scrollbar scrollbar-thin scrollbar-thumb-[#1f2836] scrollbar-track-slate-200 dark:scrollbar-track-slate-700 md:w-3/5 flex flex-col justify-between overflow-y-auto md:pl-6 pt-6 md:pt-0">
    {children}
  </div>
);

const ProjectTitle = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <h1 className="font-black text-blue-600 dark:text-blue-400 text-3xl mb-4 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
      {children}
    </h1>
  </a>
);

const ProjectHeading = ({ children }) => (
  <h2 className="text-gray-800 dark:text-gray-200 text-2xl font-bold mb-3">
    {children}
  </h2>
);

const ProjectParagraph = ({ children }) => (
  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
    {children}
  </p>
);

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
    <ProjectCard>
      <ProjectImage src={imgSrc} alt={`${title} - Image`} priority />
      <ProjectContent>
        <div>
          <ProjectTitle href={linkUrl}>{title}</ProjectTitle>
          <ProjectHeading>{heading1}</ProjectHeading>
          <ProjectParagraph>{intro}</ProjectParagraph>
          <ProjectHeading>{heading2}</ProjectHeading>
          <ProjectParagraph>{mainText}</ProjectParagraph>
        </div>
      </ProjectContent>
    </ProjectCard>
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
    <ProjectCard className="md:flex-row-reverse">
      <ProjectImage src={imgSrc} alt={`${title} - Image`} />
      <ProjectContent>
        <div>
          <ProjectTitle href={linkUrl}>{title}</ProjectTitle>
          <ProjectHeading>{heading1}</ProjectHeading>
          <ProjectParagraph>{intro}</ProjectParagraph>
          <ProjectHeading>{heading2}</ProjectHeading>
          <ProjectParagraph>{mainText}</ProjectParagraph>
        </div>
      </ProjectContent>
    </ProjectCard>
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
    <ProjectCard>
      <ProjectImage src={imgSrc1} alt={`${title} - Image 1`} priority />
      <ProjectContent>
        <div>
          <ProjectTitle href={linkUrl}>{title}</ProjectTitle>
          <ProjectHeading>{heading1}</ProjectHeading>
          <ProjectParagraph>{intro}</ProjectParagraph>
          <ProjectHeading>{heading2}</ProjectHeading>
          <ProjectParagraph>{mainText}</ProjectParagraph>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Image
            src={imgSrc2}
            width={300}
            height={300}
            alt={`${title} - Image 2`}
            className="object-cover rounded-lg hover:opacity-90 transition-opacity duration-200"
          />
          <Image
            src={imgSrc3}
            width={300}
            height={300}
            alt={`${title} - Image 3`}
            className="object-cover rounded-lg hover:opacity-90 transition-opacity duration-200"
          />
        </div>
      </ProjectContent>
    </ProjectCard>
  );
};

const Project4 = ({
  title,
  heading1,
  content1,
  heading2,
  content2,
  heading3,
  content3,
  linkUrl,
}) => {
  return (
    <ProjectCard>
      <div className="overflow-auto hover:scrollbar-thumb-[#1f2836] active:scrollbar-thumb-sky-400 scrollbar scrollbar-thin scrollbar-thumb-[#1f2836] scrollbar-track-slate-200 dark:scrollbar-track-slate-700">
        <ProjectTitle href={linkUrl}>{title}</ProjectTitle>
        <ProjectHeading>{heading1}</ProjectHeading>
        <ProjectParagraph>{content1}</ProjectParagraph>
        <ProjectHeading>{heading2}</ProjectHeading>
        <ProjectParagraph>{content2}</ProjectParagraph>
        <ProjectHeading>{heading3}</ProjectHeading>
        <ProjectParagraph>{content3}</ProjectParagraph>
      </div>
    </ProjectCard>
  );
};

export { Project, Project2, Project3, Project4 };
