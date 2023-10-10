import { PinAlt } from "iconoir-react";
import React, { useEffect, useState } from "react";

import "swiper/css";

import Button from "./Button";
import { navigate } from "gatsby";

interface ProjectProps {
  tagName: string;
  imageUrl: string;
  imgAlt?: string;
  logoUrl: string;
  logoAlt?: string;
  price: string;
  ubication: string;
  btn: string;
  nroArea: string;
  nroBedroom: string;
  Typeprojects: boolean;
  link: string
}

const Project: React.FC<ProjectProps> = ({
  tagName,
  imageUrl,
  imgAlt,
  logoUrl,
  logoAlt,
  price,
  ubication,
  btn,
  nroArea,
  nroBedroom,
  Typeprojects = false,
  link,
}) => {

  const [TipoProyectos, setProyectos] = useState(Typeprojects);

  const handleCustomClick = (event: string) => {
    navigate(`/${link}`)
  };

  useEffect(() => {
    if(Typeprojects !== undefined && Typeprojects !== null) {
      setProyectos(Typeprojects);
    }
  },[Typeprojects])

  return (
    <div className="h-full">
      <div className="bg-[--gray] rounded h-full">
        <div className="w-full h-[300px] md:h-[478px] rounded-t relative">
          <img
            className="w-full h-full object-cover rounded-t"
            src={imageUrl}
            alt={imgAlt}
          />
          {/* <Swiper
            spaceBetween={0}
            pagination={true}
            effect={'fade'}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay, EffectFade]}
            className="bulletBottom"
          >
            <SwiperSlide>
              <div className="h-[300px] md:h-[478px] w-full">
                <img className="w-full h-full object-cover rounded-t" src={TopLifeOne} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[300px] md:h-[478px] w-full">
                <img className="w-full h-full object-cover rounded-t" src={TopLifeTwo} alt="" />
              </div>
            </SwiperSlide>
          </Swiper> */}
          <div className="min-w-[138px] flex items-center justify-center bg-[--color-primary] h-[36px] absolute top-4 left-4 z-[2] px-5">
            <p className="uppercase text-white">{tagName}</p>
          </div>
        </div>
        <div className="pb-10 mt-[-53px] relative z-[2]">
          <div className="mx-5 md:mx-10 bg-[--color-secondary] flex items-center rounded h-[107px]">
            <div className="w-full flex items-center justify-center">
              <img
                className="h-[40px] md:h-[65px]"
                src={logoUrl}
                alt={logoAlt}
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <div>
                <p className="text-white uppercase text-xs md:text-sm leading-tight">
                  PRECIOS DE DESDE
                </p>
                <p className="text-white uppercase text-[22px] md:text-[30px] leading-none">
                  {price}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 py-5 mx-5 md:mx-10 border-b border-[--border-ligth]">
            <PinAlt color="#313E48" height={24} width={24} />
            <p className="text-[--color-secondary] font-semibold text-sm md:text-base">
              {ubication}
            </p>
          </div>
          <div className="flex items-center py-4">
            {TipoProyectos ? (
              <div className="w-full flex items-center justify-center gap-4 border-r border-[--border-ligth]">
                <PinAlt
                  className="hidden md:block"
                  color="#313E48"
                  height={32}
                  width={32}
                />
                <p className="text-[--color-secondary] font-light text-sm md:text-base">
                  <span className="font-semibold">{nroBedroom}</span> dorm.
                </p>
              </div>
            ) : (
              <div className="w-full flex items-center justify-center gap-4 border-r border-[--border-ligth]">
                <PinAlt
                  className="hidden md:block"
                  color="#313E48"
                  height={32}
                  width={32}
                />
                <div>
                  <p className="text-[--color-secondary] font-light flex flex-col text-sm md:text-base">
                    <span className="leading-tight">Separalo desde</span>
                    <span className="leading-none font-semibold">{nroBedroom}</span>
                  </p>
                </div>
              </div>
            )}
            <div className="w-full flex items-center justify-center gap-4">
              <PinAlt
                className="hidden md:block"
                color="#313E48"
                height={32}
                width={32}
              />
              <p className="text-[--color-secondary] font-light text-sm md:text-base">
                Áreas desde <span className="font-semibold">{nroArea}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center md:pt-4 mx-5 md:mx-0">
            <Button
              label={btn}
              extraStyles="btn-secondary w-full md:w-[260px] h-[56px]"
              customClick={(event) => handleCustomClick(event)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
