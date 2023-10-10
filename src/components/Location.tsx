import React, { useEffect, useState } from "react";
import AOS from 'aos';

import 'aos/dist/aos.css';
import { PinAlt } from "iconoir-react";
import iconWsp from "../images/icon-wsp.svg";

interface ProjectProps {
  title: string;
  location: string;
  img: string;
  wsp?: boolean;
  nroOne?: string;
  nroTwo?: string;
  nroThree?: string;
}

const Location: React.FC<ProjectProps> = ({
  title,
  location,
  img,
  nroOne,
  nroTwo,
  nroThree,
  wsp = false,
}) => {
  const [InfoWsp, setProyectos] = useState(wsp);
  useEffect(() => {
    AOS.init();
  },[]);

  useEffect(() => {
    if (wsp !== undefined && wsp !== null) {
      setProyectos(wsp);
    }
  }, [wsp]);
  return (
    <>
      <div className="px-6 lg:pr-0 lg:pl-[calc((100vw-1024px)/2)] xl:pl-[calc((100vw-1280px)/2)] 2xl:pl-[calc((100vw-1536px)/2)]">
        <div className="flex items-start flex-col lg:flex-row">
          <div className="w-full lg:w-4/12 pt-10 pr-10" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
            <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">
              {title}
            </h2>
            <div className="flex items-center gap-4 pb-8">
              <PinAlt color="#313E48" height={24} width={24} />
              <p className="text-sm text-[--color-secondary] font-light">
                {location}
              </p>
            </div>
            {InfoWsp ? (
              <><p className="text-[--color-secondary] text-sm pb-6">
                Contáctate con nuestros vendedores en la misma ciudad
              </p><div className="flex items-center gap-5 flex-wrap">
                  <a href="" className="flex items-center gap-2">
                    <img src={iconWsp} alt="" />
                    <span className="text-sm text-[--color-secondary]">
                      {nroOne}
                    </span>
                  </a>
                  <a href="" className="flex items-center gap-2">
                    <img src={iconWsp} alt="" />
                    <span className="text-sm text-[--color-secondary]">
                      {nroTwo}
                    </span>
                  </a>
                  <a href="" className="flex items-center gap-2">
                    <img src={iconWsp} alt="" />
                    <span className="text-sm text-[--color-secondary]">
                      {nroThree}
                    </span>
                  </a>
                </div></>
            ) : null}
          </div>
          <div className="w-full lg:w-8/12 pt-10 lg:pt-0">
            <img className="w-full h-[570px] object-cover" src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
