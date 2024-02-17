import Navbar from "/src/app/components/NavBar.client";

export default function Blog() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <Navbar imgSrc="logo.png" />
      <h1 className="font-black">Blog Page</h1>
    </div>
  );
}
