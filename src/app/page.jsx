import Navbar from "./components/NavBar.client";
import WavyBackground from "./components/wavy-background.tsx"
import GlowingStarsBackgroundCard from "./components/glowing-stars.tsx"
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <GlowingStarsBackgroundCard />
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <div className="flex w-full h-5/5 flex-col justify-center z-30">
          <div className="flex flex-row items-center justify-center">
            <h1 className="font-black text-5xl ml-4">Welcome To Logan Logs</h1>
            <Image
              src="/logo.png"
              width={100}
              height={200}
              alt="Logan Logs Logo"
              className="h-auto w-auto"
            ></Image>
          </div>
          <h2 className="mt-4 text-center">
            Here I compile my software/tech knowledge and experiences.
          </h2>
          <div className="text-center mt-12 z-20">
            <h1 className="font-black text-green-800 text-3xl mb-2">My Links</h1>
            <ul className="list-none list-disc text-white z-20">
              <li>
                <a
                  href="https://github.com/Logan-Fouts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/logan-fouts-aab33b230/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
