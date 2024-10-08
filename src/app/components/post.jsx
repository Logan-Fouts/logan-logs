import React from "react";
import Navbar from "/src/app/components/NavBar.client";
import Link from "next/link";
import Comments from "./Comments";

export default function Post({
  snippet,
  date,
  title,
  tagLine,
  imgSrc,
  imgDescription,
  summary,
  content,
  slug,
}) {
  const Snippet = () => {
    return (
      <div className="w-full md:w-3/4 p-2 md:p-0 space-y-2 max-w-[1000px]">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="font-thin text-sm">{date}</p>
        <p>{tagLine}</p>
        <div className="flex flex-col items-center">
          <img src={imgSrc} alt="Snippet Image" className="max-h-[700px]" />
        </div>
        <p className="italic text-sm text-left">{imgDescription} ^</p>
        <p>{summary}</p>
        <Link href={`/${slug}`}>
          <p className="text-blue-600 hover:text-blue-800 hover:underline">
            Read more
          </p>
        </Link>
      </div>
    );
  };

  const FullPost = () => {
    return (
      <div className="w-screen md:w-11/12 p-2 md:p-8 max-w-[1000px] md:p-0 space-y-4 mt-20">
        <Navbar />
        <Link href={`/projects`}>
          <p className="text-blue-600 hover:text-blue-800 hover:underline">
            Go back
          </p>
        </Link>
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="font-thin text-sm">{date}</p>
        <p className="text-xl">{tagLine}</p>
        <div className="flex flex-col items-center">
          <img src={imgSrc} alt="Post Image" className="max-h-[700px]" />
        </div>
        <p className="italic text-sm mt-2">{imgDescription}</p>
        <div className="w-4/4">{content}</div>
        <Comments slug={slug} />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center text-white">
      {snippet ? <Snippet /> : <FullPost />}
    </div>
  );
}
