import React, { useState } from "react";
import behanceProfile from "../assets/behanceProfile.png";

export const About = () => {
  const [smallDiv, setSmallDiv] = useState("w-3 h-3 right-2");
  return (
    <div className="w-full bg-[#CDEa68] px-10 py-10 text-black">
      {/* Main Heading */}
      <h1 className="text-[3vw] leading-[2.8vw] font-medium tracking-tighter">
      Hi, I'm Manish Patel. I hold a Master's degree in Computer Applications, which gave me a strong foundation in technology and problem-solving. After completing my degree, I pursued a specialized course in UI/UX design to combine my technical expertise with creative design skills. Today, I create user-centered designs that are not only visually appealing but also functional and intuitive.
      </h1>

      {/* Content Section */}
      <div className="w-full  border-2 border-[#9aba28] mt-10 p-5 flex flex-wrap rounded-lg">
        {/* Left Section: Text and Button */}
        <div className="w-full md:w-1/2 p-5">
          <h1 className="text-2xl leading-7 font-semibold">Check out my Behance Profile</h1>

          <button
            onMouseEnter={() => setSmallDiv("w-full h-14 right-0")}
            onMouseLeave={() => setSmallDiv("w-3 h-3 right-2")}
            className="bg-black hover:bg-white relative w-[200px] overflow-hidden lg:w-1/3 h-12 rounded-full text-white  mt-2 flex justify-between items-center  hover:text-black transition-all duration-300"
          >
            <h2 className="absolute z-50 ml-5 font-semibold"> <a href="https://www.behance.net/mannujr">Go to Behance</a></h2>
            <div
              className={`${smallDiv} absolute   bg-zinc-100 rounded-full transition-all duration-300`}
            ></div>
          </button>
        </div>

        {/* Right Section: Behance Embed */}
        <div className="w-full md:w-1/2 h-auto bg-gray-50 rounded-lg flex justify-center items-center">
          {/* Fallback: Image with Link */}
          <a
            href="https://www.behance.net/mannujr"
            target="_blank"     
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <img
              src={behanceProfile}
              alt="Behance Profile"
              className="w-full h-full object-cover rounded-lg"
              style={{ backgroundSize: "center" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
