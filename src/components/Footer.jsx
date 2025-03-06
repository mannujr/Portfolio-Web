import React from "react";

export const Footer = () => {
  return (
    <div className="w-full h-auto bg-white p-6 pt-20 flex flex-wrap">
      <div className="w-full lg:w-1/2">
        <h1 className="text-black text-5xl lg:text-[5vw] font-extrabold tracking-tighter">
          EYE- <br /> OPENING
        </h1>
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="text-black text-5xl text-wrap lg:text-[5vw] font-extrabold tracking-tighter">
          PRESENTATION!
        </h1>
        <div className="w-full flex-wrap font-regular flex lg:flex-row justify-start items-center">
          <ul className="text-black  w-1/2 mt-7 mb-4">
            <li className="mb-3">M:</li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Our Work</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
          </ul>
          <ul className="text-black w-1/2 mt-7 mb-4">
            <li className="mb-3">S:</li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Behance</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Linkedin</a>
            </li>
          </ul>
          <ul className="text-black w-full mt-7 mb-4">
            <li className="mb-3">L:</li>
            <li>375,Kundan Villa</li>
            <li>Katwaria Sarai,South Delhi</li>
            <li>110017</li>
          </ul>
          <ul className="text-black w-full mt-7 mb-4">
            <li className="mb-3">E:</li>
            <li>
              <a href="">manishp02051999@gmail.com</a>
            </li>
          </ul>
        </div>


      </div>
        <div className="logo w-full bg-black flex flex-col">
          <h1 className="font-semibold">MANNU</h1>
          <span className="text-xl font-semibold ">UI/UX</span>
        </div>
        <h3 className=" text-start mt-5 mb-5 text-zinc-500">Design and Developed By Manish Patel</h3>
    </div>
  );
};
