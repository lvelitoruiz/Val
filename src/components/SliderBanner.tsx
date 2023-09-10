import { City } from "iconoir-react";
import React, { useEffect, useState } from "react";

import "swiper/css";

import { SwiperSlide } from "swiper/react";
import Button from "./Button";

interface SliderBannerProps {
  title: string;
  imgUrl: string;
  imgAlt?: string;
  paragraph: string;
  nameProyect: string;
  btn: string;
  projects: boolean; 
}

const SliderBanner: React.FC<SliderBannerProps> = ({
  title,
  imgUrl,
  imgAlt,
  paragraph,
  nameProyect,
  projects = false,
  btn,
}) => {
  const [proyectos, setProyectos] = useState(projects);

  const handleCustomClick = (event: string) => {
    console.log("custom click: ", event);
  };

  useEffect(() => {
    if(projects !== undefined && projects !== null) {
      setProyectos(projects);
    }
  },[projects])

  return (
    <div className="relative h-[calc(100vh-80px)]">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="relative h-full w-full before:content-[''] before:bg-[rgba(49,62,72,0.60)] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
          <img
            className="w-full h-full object-cover rounded-t"
            src={imgUrl}
            alt={imgAlt}
          />
        </div>
      </div>
      <div className="container mx-auto h-full relative pl-16">
        <div className="flex flex-col items-start justify-center h-[calc(100%-315px)] w-8/12">
          <div className="pb-5">
            <h2 className="text-[56px] text-white leading-tight pb-4">
              {title}
            </h2>
            <p className="text-white font-light">{paragraph}</p>
          </div>
          {proyectos ? (
            <div className="pt-4 border-t border-[#7F8387] w-full">
              <p className="font-semibold text-white pb-4">Nuestor proyecto</p>
              <div className="flex items-center justify-start gap-10">
                <div className="flex items-center gap-4">
                  <div className="w-[30px] h-[30px] flex items-center justify-center bg-white rounded-sm">
                    <City color="#009877" height={18} width={18} />
                  </div>
                  <p className="text-white">{nameProyect}</p>
                </div>
              </div>
            </div>
          ) : null}
          <div className="pt-10">
            {/* <button className="w-[355px] bg-[--color-primary] h-[56px] flex items-center justify-center text-white uppercase font-semibold rounded">
              <span>VER NUESTROS PROYECTOS</span>
            </button> */}
            <Button
              label={btn}
              extraStyles="btn-primary"
              customClick={(event) => handleCustomClick(event)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderBanner;
