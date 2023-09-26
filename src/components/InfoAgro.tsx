import React from "react";
import AOS from 'aos';

import agro14 from "../images/agro-14.jpg";
import 'aos/dist/aos.css';

const InfoAgro = () => {
  AOS.init();
  
  return (
    <>
      <div className="container mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
          <div className="col-span-10 md:col-span-12 lg:col-span-4 h-full" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
            <div className="pb-10">
              <p className="text-[--color-secondary] font-light">PROYECTO</p>
              <h2 className="text-[--color-secondary] text-[30px] lg:text-[44px] uppercase leading-none">
                Olmos
              </h2>
              <p className="text-[--color-secondary] text-xl">
                Fundo San Isidro
              </p>
            </div>
            <p className="text-[--color-secondary] font-light">
              Terreno ubicado en la provincia de Lambayeque en el que estamos
              trabajando para darle valor agro industrial, perforando pozos
              tubulares, mejorando el acceso y dotándolo de energía eléctrica
              que permita explotar y rentabilizar todo su potencial.
            </p>
            <div className="py-10">
              <p className="text-[--color-secondary] text-sm">
                Área del terreno
              </p>
              <p className="text-[--color-secondary] text-[30px] leading-none py-1 pb-5">
                605 hectáreas
              </p>
              <p className="text-[--color-secondary] text-xs">
                Inscrito en Registros Públicos
              </p>
            </div>
          </div>
          <div className="col-span-10 md:col-span-12 lg:col-span-8 h-full">
            <div className="w-full h-[300px] lg:h-[438px] overflow-hidden rounded">
              <img
                className="object-cover h-full w-full transition duration-150 ease-out hover:scale-125"
                src={agro14}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoAgro;
