import { PinAlt } from "iconoir-react";
import React, { useEffect, useState } from "react";

import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Project from "./Project";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { processInfo } from "../utils/processInfo";


interface projectItem {
  tagName: string,
  imageUrl: string,
  logoUrl: string,
  price: string,
  ubicacion: string,
  btn: string,
  nroArea: string,
  nroBedroom: string,
  TypeProjects: boolean,
  link: string,
}

const Projects = () => {

  const [data, setData] = useState<projectItem[]>([]);

  const getProjectInfo = async () => {
    const dataResponse: any = await processInfo("projects");

    const dataFormatted = dataResponse.data.map((item: any) => ({
      tagName: item.attributes.tagname,
      imageUrl: item.attributes.image.data.attributes.url,
      logoUrl: item.attributes.logo.data.attributes.url || "",
      price: item.attributes.price,
      ubicacion: item.attributes.ubication,
      btn: item.attributes.btn,
      nroArea: item.attributes.noarea,
      nroBedroom: item.attributes.bedroom,
      TypeProjects: item.attributes.type,
      link: item.attributes.link,
    }))

    setData(dataFormatted);
  }

  useEffect(() => {
    getProjectInfo();
  }, []);

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
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
