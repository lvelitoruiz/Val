import React from "react";

import Button from "../components/Button";
import HoverImg from "./HoverImg";

const InfoDepart = () => {
  const handleCustomClick = (event: string) => {
    console.log("custom click: ", event);
  };

  const data = [
    {
      imgUrl: "/static/images/dep-1.jpg",
      info: "Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios",
      blockStyles:"col-span-10 md:col-span-6",
      imgStyles: "h-[300px] lg:h-[490px]",
    },
    {
      imgUrl: "/static/images/dep-2.jpg",
      info: "Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios",
      blockStyles:"col-span-10 md:col-span-3",
      imgStyles: "h-[300px] lg:h-[490px]",
    },
    {
      imgUrl: "/static/images/dep-3.jpg",
      info: "Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios",
      blockStyles:"col-span-10 md:col-span-3",
      imgStyles: "h-[300px] lg:h-[490px]",
    },
    {
      imgUrl: "/static/images/dep-4.jpg",
      info: "Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios",
      blockStyles:"col-span-10 md:col-span-6",
      imgStyles: "h-[300px] lg:h-[490px]",
    },
    {
      imgUrl: "/static/images/dep-5.jpg",
      info: "Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios",
      blockStyles:"col-span-10 md:col-span-2",
      imgStyles: "h-[300px]",
    },
    {
      imgUrl: "/static/images/dep-6.jpg",
      info: "Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios",
      blockStyles:"col-span-10 md:col-span-2",
      imgStyles: "h-[300px]",
    },
    {
      imgUrl: "/static/images/dep-7.jpg",
      info: "Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios",
      blockStyles:"col-span-10 md:col-span-2",
      imgStyles: "h-[300px]",
    },
    {
      imgUrl: "/static/images/dep-8.jpg",
      info: "Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios",
      blockStyles:"col-span-10 md:col-span-6",
      imgStyles: "h-[300px] lg:h-[490px]",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-4/12 lg:sticky lg:!top-40">
            <div>
              <div className="pb-10">
                <p className="text-[--color-secondary] font-light">PROYECTO</p>
                <h2 className="text-[--color-secondary] text-[30px] lg:text-[44px] uppercase leading-none">
                  TOP LIFE
                </h2>
                <p className="text-[--color-secondary] text-xl">
                  Juan de Aliaga
                </p>
              </div>
              <div className="pb-5">
                <p className="text-[--color-secondary] font-light pb-4">
                  TOP LIFE - Juan de Aliaga es un edificio multifamiliar,
                  ubicado en Magdalena del Mar, de 22 pisos, con azotea y 5
                  sótanos. Ofrecemos 84 departamentos de 1, 2 y 3 dormitorios y
                  sólo 4 departamentos por piso.
                </p>
                <p className="text-[--color-secondary] font-light">
                  Conoce más sobre nuestro nuevo proyecto en etapa de pre
                  lanzamiento.
                </p>
              </div>
              <Button
                label={"VER PROYECTO"}
                extraStyles="btn-primary px-10 h-[50px]"
                customClick={(event) => handleCustomClick(event)}
              />
            </div>
          </div>
          <div className="w-full lg:w-8/12 lg:pl-10 pt-10 lg:pt-0">
            <div className="grid grid-cols-10 md:grid-cols-6 gap-6">
              {data.map((item, index) => (
                <HoverImg key={index} imgUrl={item.imgUrl} info={item.info} blockStyles={item.blockStyles} imgStyles={item.imgStyles} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDepart;
