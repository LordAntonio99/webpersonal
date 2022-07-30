import React from "react";
import { webs } from "../data/webs";

export const Webs = () => {
  return (
    <div
      className="w-full h-screen bg-black pt-12 scroll-m-48 md:scroll-m-12"
      id="webs"
    >
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-white text-5xl font-semibold">Webs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {webs.map((web) => (
          <div className="h-[500px] relative rounded-lg flex flex-col items-center justify-center px-8 overflow-hidden">
            <img
              src={web.image}
              alt="Logo del proyecto"
              className="h-56 w-full object-cover"
            />
            <h1 className="text-white text-2xl mt-4 mb-2">{web.name}</h1>
            <p className="text-white">{web.description}</p>
            <div className="absolute bottom-0 flex flex-row space-x-4">
              <a href={web.github} target="_blank" rel="noreferrer">
                <button className="px-4 py-2 bg-black rounded-lg text-white border border-white hover:scale-110 hover:bg-white hover:text-black transition-all">
                  Github
                </button>
              </a>
              <a href={web.link} target="_blank" rel="noreferrer">
                <button className="px-4 py-2 bg-black rounded-lg text-purple-500 border border-purple-500 hover:scale-110 hover:bg-purple-500 hover:text-white transition-all">
                  Demo
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
