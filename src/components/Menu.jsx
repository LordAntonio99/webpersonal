import React from "react";
import { AiOutlineHome, AiOutlineApi, AiFillCode } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

export const Menu = () => {
  return (
    <div className="w-full bg-black px-12 fixed z-10">
      <div className="w-full h-full flex-col flex md:flex-row items-center justify-center space-x-8 py-4 md:justify-start">
        <h1 className="font-bold transition-all mb-3 md:mb-0 hover:scale-110 ease-in-out text-3xl cursor-pointer text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-cyan-300">
          Antonio Cintora
        </h1>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-8">
          <a
            href="#hero"
            className="text-white/60 hover:text-white text-xl flex flex-row items-center justify-center hover:scale-110 cursor-pointer transition-all"
          >
            <AiOutlineHome className="mr-2" />
            <h1>Inicio</h1>
          </a>
          <a
            href="#tecnologias"
            className="text-white/60 hover:text-white text-xl flex flex-row items-center justify-center hover:scale-110 cursor-pointer transition-all"
          >
            <AiFillCode className="mr-2" />
            <h1>Tecnologías</h1>
          </a>
          <a href="#apis" className="text-white/60 hover:text-white text-xl flex flex-row items-center justify-center hover:scale-110 cursor-pointer transition-all">
            <AiOutlineApi className="mr-2" />
            <h1>APIs</h1>
          </a>
          <div className="text-white/60 hover:text-white text-xl flex flex-row items-center justify-center hover:scale-110 cursor-pointer transition-all">
            <BiWorld className="mr-2" />
            <h1>Webs</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
