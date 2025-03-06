import React, { useState } from "react";
import myImage from "../assets/mypic_1.png";
import myImage2 from "../assets/mypic_2.png";
import myImage3 from "../assets/mypic_3.png";
// import videoBg from "../assets/Freddie Dredd - Limbo (Lyrics).mp4";
import videoBg from "../assets/ZN FODÃ_STICA 2 - TIKTOK VERSION.mp4";




export const HeroSection = () => {
  const [musicOn, setMusicOn] = useState(false);
  // useEffect(() => {
  //   setMusicOn(false);
  // },musicOn);
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-full px-0 flex flex-wrap justify-center items-center overflow-hidden ">
     <video
        className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
        src={videoBg}
        autoPlay
        loop
         muted={musicOn ? false : true}
      ></video>


      {/* Text Section */}
      <div className="lg:w-1/2 md:w-1/2 w-full text-start font-bold bg-[#00000051] h-screen md:leading-[70px] px-7 py-20">
      <button onClick={()=>setMusicOn(!musicOn)} className="text-xs px-3 py-2 outline-dashed outline-green-500 rounded-full">{musicOn?"STOP THE MUSIC":"PLAY THE MUSIC!!"}</button>
        <h1 className="text-[12vw] md:text-[8vw] lg:text-[5vw] leading-10 lg:leading-[60px] mt-2 text-zinc-400 ">
          <span className="hover:text-white">HEY, I'M</span> {""}
          <div className="flex">
            <span className="text-[#9aba28] drop-shadow-md hover:drop-shadow-xl hover:text-green-600 hover:scale-105  transition-all duration-800">
              MANISH PATEL
            </span>{" "}
          </div>
          <span className="hover:text-white">& I AM A</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9aba28] to-[#004d43]">
            {" "}
            UI
          </span>
          /
          <span
            style={{ WebkitTextStroke: "2px white" }}
            className="text-[#00000000]"
          >
            UX
          </span>
          <div className="flex">
            <span className="text-[#9aba28] hover:text-green-600 hover:scale-110 transition-all duration-800">
              DEV!
            </span>
          </div>
        </h1>
        <button className="px-5 py-5 lg:px-12 lg:py-0  bg-zinc-800 mt-5 rounded-sm  hover:text-black hover:border-none hover:bg-[#9aba28]">
          Contact
        </button>
      </div>

      <div className="w-[0] md:1/2 lg:w-1/2 flex  justify-center items-center gap-2 ">
        {/* First Image */}
        <div
          className="w-[390px] h-screen transition-transform duration-500 grayscale hover:grayscale-0  opacity-5 hover:opacity-100  "
          style={{
            backgroundImage: `url(${myImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: "0 0 200px rgba(0,0,0,8) inset"
          }}
        ></div>
        <div
          className="w-[390px] h-screen transition-transform duration-500 grayscale hover:grayscale-0  opacity-5 hover:opacity-100  "
          style={{
            backgroundImage: `url(${myImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: "0 0 200px rgba(0,0,0,8) inset"
          }}
        ></div>

      



      </div>
      
    </div>
  );
};
