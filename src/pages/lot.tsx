import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dep1 from "../images/dep-1.jpg";
import dep2 from "../images/dep-2.jpg";
import dep3 from "../images/dep-3.jpg";
import dep4 from "../images/dep-4.jpg";
import dep5 from "../images/dep-5.jpg";
import dep6 from "../images/dep-6.jpg";
import dep7 from "../images/dep-7.jpg";
import dep8 from "../images/dep-8.jpg";
import lot1 from "../images/oxa-2.jpg";
import logoUrb from "../images/oxa.svg";

import { LinkedIn } from "iconoir-react";
import Button from "../components/Button";

const Lot: React.FC<PageProps> = () => {

  const handleCustomClick = (event: string) => {
    console.log("custom click: ", event);
  };

  return (
    <>
      <Header />
      <section className="pt-28 md:pt-36 lg:sticky top-0">
        <div>
          <div className="w-full px-6 lg:px-0 md:w-8/12 lg:w-5/12 mx-auto mb-14">
            <h1 className="pb-4 leading-tight text-[--color-secondary] text-center text-[30px] lg:text-[44px] uppercase">
              Urbanizamos lotes para crear mejores ciudades
            </h1>
            <p className="text-center font-light text-[--color-secondary]">
              <span className="font-normal">
                Queremos que las ciudades crezcan ordenadamente y diseñamos proyectos de lotes urbanos para mejorar la calidad de vida de las personas.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="h-[509px] md:h-[790px] w-full">
          <img
            className="w-full h-full object-cover"
            src={lot1}
            alt=""
          />
        </div>
        <div className="container mx-auto px-6 lg:px-0">
          <div className="bg-[--gray] w-full lg:h-[168px] mt-[-84px] items-start gap-4 rounded relative flex flex-col md:flex-row lg:items-center md:justify-between p-6 lg:py-0 lg:px-10">
            <div className="flex items-center gap-4">
              <img className="h-[50px] lg:h-[96px]" src={logoUrb} alt="" />
              <p className="text-[--color-secondary] text-[30px] leading-none max-w-[420px] font-light">Vive en la mejor ubicación dentro de la misma ciudad</p>
            </div>
            <div className="flex w-full md:w-fit flex-col md:items-end lg:flex-row lg:items-center gap-5 lg:gap-10">
              <div className="flex flex-col md:flex-row lg:items-center gap-2 md:gap-10">
                <div className="flex items-center gap-4">
                  <LinkedIn color="#313E48" height={24} width={24} />
                  <div className="lg:max-w-[200px]">
                    <p className="text-sm text-[--color-secondary] font-light">
                      <span className="font-normal">Oxapampa, </span>a 5 min. de la Plaza de Armas
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <LinkedIn color="#313E48" height={24} width={24} />
                  <div className="lg:max-w-[200px]">
                    <p className="text-sm text-[--color-secondary] font-light">
                      Areas desde <span className="font-normal">205 m2</span> para construir tu casa o negocio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Lot;

export const Head: HeadFC = () => <title>Val - Multifamiliares</title>;
