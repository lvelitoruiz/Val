import React from "react";

import aboutConexa from "../images/about-conexa.jpg";
import logoConexa from "../images/logo-conexa.png";
import { ArrowRight } from "iconoir-react";
import Markdown from "react-markdown";

const AboutConexa = ({data}: any) => {
  return (
    <>
      <div className="bg-[--color-secondary] lg:w-6/12 pt-10 relative mb-[-250px]">
        <div className="pl-6 lg:pl-[calc((100vw-1024px)/2)] xl:pl-[calc((100vw-1280px)/2)] 2xl:pl-[calc((100vw-1536px)/2)]">
          <div className="pr-6 md:pr-20">
            <h3 className="text-[24px] font-light text-white pb-5" dangerouslySetInnerHTML={{ __html: data.aboutitle }}></h3>
            {/* <p className="text-white font-light pb-4">
              Somos la empresa inmobiliaria de Conexa Financial Group.
            </p>
            <p className="text-white font-light pb-4">
              Conexa Financial Group estructura y administra fondos de inversión
              privados que se enfocan en generar oportunidades para
              inversionistas e impulsar el crecimiento de los sectores más
              importantes de la economía del país a través de financiamiento a
              PYMES.
            </p>
            <p className="text-white font-light pb-4">
              Conexa Financial Group, administra activos por +USD 50 MM y ha
              otorgado financiamiento por más de + USD 225 MM. Su cartera de
              créditos está diversificada en + 120 PYMES que abarca 12 sectores
              económicos del país.
            </p> */}
            <Markdown className="text-white font-light markdown-text">{data.aboutparagraph}</Markdown>
          </div>
          <img src={logoConexa} alt="" />
          <div className="flex items-center justify-end pr-8 pb-6 mt-8">
            <a className="text-white uppercase flex items-center gap-3" href="">
              <span>Conoce más</span>
              <ArrowRight color="#FFFFFF" height={18} width={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="h-[600px] lg:h-[543px]">
        <img className="w-full h-full object-cover" src={aboutConexa} alt="" />
      </div>
    </>
  );
};

export default AboutConexa;
