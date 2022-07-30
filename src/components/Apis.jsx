import React from "react";
import { apis } from "../data/apis";

export const Apis = () => {
  return (
    <div
      className="w-full bg-black pt-12 scroll-m-48 md:scroll-m-12"
      id="apis"
    >
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-white text-5xl font-semibold">APIs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apis.map((api) => (
          <div className="h-96 relative rounded-lg flex flex-col items-center justify-center px-8">
            <img src={api.logo} alt="Logo del proyecto" className="w-24 h-24" />
            <h1 className="text-white text-2xl mt-4 mb-2">{api.name}</h1>
            <p className="text-white">{api.description}</p>
            <div className="absolute bottom-0 flex flex-row space-x-4">
              <a href={api.github} target="_blank" rel="noreferrer">
                <button className="px-4 py-2 bg-black rounded-lg text-white border border-white hover:scale-110 hover:bg-white hover:text-black transition-all">
                  Github
                </button>
              </a>
              <a href={api.link} target="_blank" rel="noreferrer">
                <button className="px-4 py-2 bg-black rounded-lg text-blue-500 border border-blue-500 hover:scale-110 hover:bg-blue-500 hover:text-white transition-all">
                  RapidAPI
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
