import "./../globals.css";

export default function Navbar() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <nav className="bg-black text-white flex flex-col flex-grow items-center w-2/3">
        <img src="./../favicon.ico" className="w-1/2 my-4" />
        <a href="/documentation" className="my-4 text-lg self-start pl-4">
          Documentationˇ
        </a>
        <a href="/projects" className="my-4 text-lg self-start pl-4">
          Projectsˇ
        </a>
        <a href="/blog" className="my-4 text-lg self-start pl-4">
          Blogˇ
        </a>
      </nav>
    </div>
  );
}
