import { PinAlt } from "iconoir-react";
import React from "react";

import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Project from "./Project";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Projects = () => {
  const data = [
    {
      tagName: "PREVENTA",
      imageUrl: "/static/images/top-life-1.jpg",
      logoUrl: "/static/images/logo-white.svg",
      price: "S/360,000",
      ubicacion: "Juan de Aliaga",
      btn: "VER PROYECTO",
      nroArea: "46 m2",
      nroBedroom: "1, 2, 3",
      TypeProjects: true,
    },
    {
      tagName: "TERRENOS",
      imageUrl: "/static/images/oxa.jpg",
      logoUrl: "/static/images/oxa.svg",
      price: "S/160,000",
      ubicacion: "Oxapampa",
      btn: "VER PROYECTO",
      nroArea: "202 m2",
      nroBedroom: "S/ 1,500",
      TypeProjects: false,
    },
  ];
  return (
    <div>
      <h2 className="text-center text-[--color-secondary] text-[30px] lg:text-[44px] pb-12">
        PROYECTOS EN VENTA
      </h2>
      <div className="grid grid-cols-10 md:grid-cols-12 gap-8">
        {data.map((item, index) => (
          <div className="col-span-10 md:col-span-12 lg:col-span-6 h-full" key={index}>
            <Project
              tagName={item.tagName}
              imageUrl={item.imageUrl}
              logoUrl={item.logoUrl}
              price={item.price}
              ubication={item.ubicacion}
              btn={item.btn}
              nroArea={item.nroArea}
              nroBedroom={item.nroBedroom}
              Typeprojects={item.TypeProjects}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
