import { motion } from "framer-motion";
import React from "react";

export const Featured = () => {
    
  return (
    <div className="w-full py-20 px-5">
      <div className="w-full border-b-[1px] p-5">
        <h1 className="text-3xl lg:text-5xl text-start mb-7">
          Featured Projects
        </h1>
        <div className="cards w-full border-t-[1px] py-5 flex flex-wrap gap-1 justify-evenly items-center">
          <div className="cardcontainer relative z-50 mb-1  h-50vh w-full lg:w-[49.5%] h-[80vh]">
            <h1 className="absolute flex overflow-hidden z-50 left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[0] lg:text-5xl md:lg:text-5xl text-[#CDEa68] font-medium tracking-tighter">
              {"HEY THERE!".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl hover:scale-90 transition-all duration-500 bg-cover bg-center bg- bg-[url('https://imgs.search.brave.com/atR4KGms9W-oXeP_SCsXN6T3Kmcz9XRvvCTQXx_eX7U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vYmxvZy51/eHR3ZWFrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/Ni9mYWl6dXItcmVo/bWFuLXBIUHpkRUhO/Nk9zLXVuc3BsYXNo/LW1pbi5qcGc_cmVz/aXplPTgwMCw0OTEm/c3NsPTE')]"></div>
          </div>
          <div className="cardcontainer relative mb-1  h-50vh w-full lg:w-[49.5%] h-[80vh] ">
            <h1 className="absolute flex overflow-hidden  z-50 right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[0] lg:text-5xl md:lg:text-5xl text-[#CDEa68] font-medium tracking-tighter">
              {"LET'S GO!".split("").map((item, index) => (
                <motion.span initial={{y:"100%"}} key={index} className="inline-block  ">{item}</motion.span>
                
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl hover:scale-90 transition-all duration-500 bg-cover bg-center bg- bg-[url('https://imgs.search.brave.com/QEQg25AM7yGeqQY9ISjRLycv7bk7IklNXY-uW7KbZ3c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eC11/aS5mci93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNy91eC1y/ZXNlYXJjaGVyLXF1/YWxpdGF0aWYtcXVh/bnRpdGF0aWYuanBn')]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
