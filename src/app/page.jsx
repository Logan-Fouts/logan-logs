import "./globals.css";
import Navbar from "./components/NavBar.client";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen ">
      <Navbar />
      <div className="flex flex-col w-full h-4/5 justify-around mt-16 ml-16">
        <h1 className="font-black text-6xl w-4/5">Welcome To Logan Logs</h1>
        <h2 className="w-3/5">
          Here I compile software and tech knowledge and experiences.
        </h2>
        <a href="https://github.com/Logan-Fouts">My GitHub</a>
      </div>
    </div>
  );
}
