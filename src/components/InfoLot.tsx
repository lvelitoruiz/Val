import React, { useEffect } from "react";
import AOS from 'aos';

import 'aos/dist/aos.css';

import Button from "./Button";
import icon from "../images/icon.svg";
import oxa4 from "../images/oxa-4.jpg";

const InfoLot = () => {

  const handleCustomClick = (event: string) => {
    console.log("custom click: ", event);
  };
  useEffect(() => {
    AOS.init();
  },[]);

  return (
    <>
      <div className="container mx-auto px-6 lg:px-0" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
        <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
          <div className="col-span-10 md:col-span-12 lg:col-span-4 h-full">
            <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">
              Características del proyecto
            </h2>
            <p className="text-[--color-secondary] font-light">
              Construye tu próxima casa o negocio en Oxapampa. Nuestro proyecto
              de lotes urbanos en la ciudad de Oxapampa te ofrece terrenos desde
              205 m2 a 220 m2 en la misma ciudad, a solo 5 minutos de la Plaza
              de Armas.
            </p>
            <div className="py-10">
              <p className="text-[--color-secondary] text-sm">
                PRECIOS DE DESDE
              </p>
              <p className="text-[--color-secondary] text-[30px] leading-none py-1">
                S/196,000
              </p>
              <p className="text-[--color-secondary] text-xs">
                con financiamiento directo
              </p>
            </div>
            <Button
              label="¡Cotizar ahora!"
              extraStyles="btn-primary px-[34px] h-[50px]"
              customClick={(event) => handleCustomClick(event)}
            />
          </div>
          <div className="col-span-10 md:col-span-12 lg:col-span-8 h-full">
            <div className="w-full h-[300px] lg:h-[438px] overflow-hidden rounded">
              <img
                className="object-cover h-full w-full transition duration-150 ease-out hover:scale-125"
                src={oxa4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-20 pt-14 relative bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="border-y border-[--gray] py-10">
            <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
              <div className="col-span-10 md:col-span-6 lg:col-span-3 h-full">
                <div className="flex items-center gap-5 flex-col">
                  <img className="h-[56px]" src={icon} alt="" />
                  <p className="text-[--color-secondary] text-center text-xl font-light">
                    Nuestros lotes cuentan con título independizado en Registros
                    Público
                  </p>
                </div>
              </div>
              <div className="col-span-10 md:col-span-6 lg:col-span-3 h-full">
                <div className="flex items-center gap-5 flex-col">
                  <img className="h-[56px]" src={icon} alt="" />
                  <p className="text-[--color-secondary] text-center text-xl font-light">
                    Terreno sin humedad, con sistema de drenaje subterráneo
                  </p>
                </div>
              </div>
              <div className="col-span-10 md:col-span-6 lg:col-span-3 h-full">
                <div className="flex items-center gap-5 flex-col">
                  <img className="h-[56px]" src={icon} alt="" />
                  <p className="text-[--color-secondary] text-center text-xl font-light">
                    Veredas y pistas
                  </p>
                </div>
              </div>
              <div className="col-span-10 md:col-span-6 lg:col-span-3 h-full">
                <div className="flex items-center gap-5 flex-col">
                  <img className="h-[56px]" src={icon} alt="" />
                  <p className="text-[--color-secondary] text-center text-xl font-light">
                    Luz, agua y desagüe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoLot;
