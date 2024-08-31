import React from "react";
import Navbar from "/src/app/components/NavBar.client";
import Link from 'next/link';
import Image from 'next/image';

export default function Post({
  snippet,
  date,
  title,
  tagLine,
  imgSrc,
  imgDescription,
  summary,
  content,
  slug
}) {
  const Snippet = () => {
    return (
      <div className="w-3/4 space-y-2">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="font-thin text-sm">{date}</p>
        <p>{tagLine}</p>
        <div>
          <Image src={imgSrc} alt="Snippet Image" width={500} height={300} layout="responsive" />
          <p className="italic text-sm">{imgDescription}</p>
        </div>
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
      <div className="w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="font-thin text-sm">{date}</p>
        <p className="text-xl">{tagLine}</p>
        <div>
          <Image src={imgSrc} alt="Post Image" width={800} height={400} layout="responsive" />
          <p className="italic text-sm mt-2">{imgDescription}</p>
        </div>
        <div className="prose prose-invert lg:prose-xl">
          {content}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-white mt-10">
      <Navbar />
      {snippet ? <Snippet /> : <FullPost />}
    </div>
  );
}
