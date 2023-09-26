import React from "react";
import AOS from 'aos';

import 'aos/dist/aos.css';
import agro6 from "../images/agro-6.jpg";

const DetailAgro = () => {
  AOS.init();

  return (
    <>
    <div className="container mx-auto px-6 lg:px-0">
      <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
        <div className="col-span-10 md:col-span-12 lg:col-span-4 h-full" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
          <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">
            Potencial comercial
          </h2>
          <p className="text-[--color-secondary] font-light pb-4">
            Terreno para renta y/o venta de cultivos para la agro
            exportación.
          </p>
        </div>
        <div className="col-span-10 md:col-span-12 lg:col-span-8 h-full">
          <div className="w-full h-[300px] lg:h-[438px] overflow-hidden rounded">
            <img
              className="object-cover h-full w-full transition duration-150 ease-out hover:scale-125"
              src={agro6}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DetailAgro;
