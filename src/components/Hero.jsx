import React from "react";

export const Hero = () => {
  return (
    <div
      className="w-full h-[60vh] bg-black overflow-hidden relative group"
      id="hero"
    >
      <img
        src="https://cutewallpaper.org/28/coding-wallpaper-dual-monitor/1467329796.jpg"
        alt="Hero background coding"
        className="w-full h-full absolute object-cover opacity-30 group-hover:opacity-10 group-hover:scale-125 transition-all"
      />
      <h1 className="absolute left-[50%] translate-x-[-50%] top-[50%] transition-all md:translate-y-[-50%] m-auto group-hover:scale-110 text-white text-5xl md:text-7xl font-bold text-right">
        Desarrollador fullstack de JavaScript y ReactJS.
      </h1>
    </div>
  );
};
