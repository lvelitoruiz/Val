import React from "react";

import bank2 from "../images/bank-2.jpg";
import AOS from 'aos';

import 'aos/dist/aos.css';

const DetailBank = () => {
  AOS.init();

  return (
    <>
      <div className="container mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
          <div className="col-span-10 md:col-span-12 lg:col-span-7 h-full">
            <div className="w-full h-[300px] lg:h-[438px] overflow-hidden rounded">
              <img
                className="object-cover h-full w-full transition duration-150 ease-out hover:scale-125"
                src={bank2}
                alt=""
              />
            </div>
          </div>
          <div className="col-span-10 md:col-span-12 lg:col-span-5 h-full" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
            <h2 className="text-[26px] lg:text-[30px] text-[--color-secondary] leading-tight lg:pt-8">
              Buscamos rentabilizar nuestros terrenos en la explotación agro
              industrial, sea para la venta o renta.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBank;
