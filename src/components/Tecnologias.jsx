import React from "react";
import { tecnologias } from "../data/tecnologias";

export const Tecnologias = () => {
  return (
    <div className="w-full h-full bg-black px-12 py-8 scroll-m-48 md:scroll-m-12" id="tecnologias">
      <div className="mt-12 flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-semibold mb-12">Tecnologías</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-8">
          {tecnologias.map((tecnologia) => (
            <div className="flex flex-col justify-center items-center" key={tecnologia.id}>
              <a href={tecnologia.link} target="_blank" rel="noreferrer">
                <img
                  src={tecnologia.logo}
                  alt={tecnologia.name}
                  className="w-24 h-24 mb-2 object-contain hover:scale-110 transition-all"
                />
              </a>
              <p className="text-white text-2xl font-semibold">
                {tecnologia.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
