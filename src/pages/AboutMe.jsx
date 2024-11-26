import React from "react";
import Navbar from "/src/app/components/NavBar.client";

const AboutMe = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Navbar />
            <h1 className="text-3xl mt-20">About Me</h1>
        </div>
    );
}

export default AboutMe;
