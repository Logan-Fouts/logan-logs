import "./../globals.css";

export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen sm:min-h-0 w-full">
      <nav className="bg-black text-white flex flex-col sm:flex-row flex-grow items-center w-2/3">
        <img src="./../favicon.ico" className="my-4 sm: my-0 self-start" /> 
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
