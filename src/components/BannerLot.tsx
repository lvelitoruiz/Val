import React from "react";

import logoUrb from "../images/oxa.svg";
import lot1 from "../images/oxa-2.jpg";
import { LinkedIn } from "iconoir-react";

const BannerLot = () => {
  return (
    <>
      <div className="h-[509px] md:h-[790px] w-full">
        <img className="w-full h-full object-cover" src={lot1} alt="" />
      </div>
      <div className="container mx-auto px-6 lg:px-0">
        <div className="bg-[--gray] w-full lg:h-[168px] mt-[-84px] items-start gap-4 rounded relative flex flex-col lg:flex-row lg:items-center md:justify-between p-6 lg:py-0 lg:px-10">
          <div className="flex items-center gap-4">
            <img className="h-[50px] lg:h-[96px]" src={logoUrb} alt="" />
            <p className="text-[--color-secondary] text-[20px] lg:text-[30px] leading-none max-w-[420px] font-light">
              Vive en la mejor ubicación dentro de la misma ciudad
            </p>
          </div>
          <div className="flex w-full md:w-fit flex-col md:items-end lg:flex-row lg:items-center gap-5 lg:gap-10">
            <div className="flex flex-col md:flex-row lg:items-center gap-2 md:gap-10">
              <div className="flex items-center gap-4">
                <LinkedIn color="#313E48" height={24} width={24} />
                <div className="lg:max-w-[200px]">
                  <p className="text-sm text-[--color-secondary] font-light">
                    <span className="font-normal">Oxapampa, </span>a 5 min. de
                    la Plaza de Armas
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <LinkedIn color="#313E48" height={24} width={24} />
                <div className="lg:max-w-[200px]">
                  <p className="text-sm text-[--color-secondary] font-light">
                    Areas desde <span className="font-normal">205 m2</span> para
                    construir tu casa o negocio
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

export default BannerLot;
