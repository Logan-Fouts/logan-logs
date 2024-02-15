import "./globals.css";
import Navbar from "./components/NavBar.client";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <Navbar />
      <div className="flex w-full h-5/5 flex-col justify-center">
        <div className="flex flex-row items-center justify-center">
          <h1 className="font-black text-5xl ml-4">Welcome To Logan Logs</h1>
          <img src="/logo.png" alt="Logan Logs Logo" className="h-40"></img>
        </div>
        <h2 className="mt-4 text-center">
          Here I compile software and tech knowledge and experiences.
        </h2>
        <div className="text-center mt-12">
          <h1 className="font-black text-green-800 text-3xl mb-2">My Links</h1>
          <ul className="list-none list-disc text-white">
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
                href="https://se.linkedin.com/"
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
  );
}
