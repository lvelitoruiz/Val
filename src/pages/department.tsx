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
import bannerDepartment from "../images/banner-department.jpg";
import logoTopLife from "../images/logo-top-life.svg";

import { LinkedIn } from "iconoir-react";
import Button from "../components/Button";

const Department: React.FC<PageProps> = () => {
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
              Espacios modernos, para familias modernas
            </h1>
            <p className="text-center font-light text-[--color-secondary]">
              <span className="font-normal">
                Construimos departamentos eco amigables, que ayudan a crear un
                mejor entorno a la vez que cuidamos el planeta.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="h-[509px] md:h-[790px] w-full">
          <img
            className="w-full h-full object-cover"
            src={bannerDepartment}
            alt=""
          />
        </div>
        <div className="container mx-auto px-6 lg:px-0">
          <div className="bg-[--gray] w-full lg:h-[168px] mt-[-84px] items-start gap-4 rounded relative flex flex-col md:flex-row lg:items-center md:justify-between p-6 lg:py-0 lg:px-10">
            <img className="h-[50px] lg:h-[96px]" src={logoTopLife} alt="" />
            <div className="flex w-full md:w-fit flex-col md:items-end lg:flex-row lg:items-center gap-5 lg:gap-10">
              <div className="flex flex-col md:flex-row lg:items-center gap-2 md:gap-10">
                <div className="flex items-center gap-4">
                  <LinkedIn color="#313E48" height={24} width={24} />
                  <div className="lg:max-w-[146px]">
                    <p className="text-sm text-[--color-secondary] font-light">
                      <span className="font-normal">Av. Juan de Aliaga,</span>{" "}
                      Magdalena del Mar
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <LinkedIn color="#313E48" height={24} width={24} />
                  <div className="lg:max-w-[146px]">
                    <p className="text-sm text-[--color-secondary] font-light">
                      <span className="font-normal">1, 2, 3</span> dorm.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <LinkedIn color="#313E48" height={24} width={24} />
                  <div className="lg:max-w-[146px]">
                    <p className="text-sm text-[--color-secondary] font-light">
                      <span className="font-normal">Areas desde</span> 46 m2
                    </p>
                  </div>
                </div>
              </div>
              <Button
                label={"VER PROYECTO"}
                extraStyles="btn-primary px-10 h-[56px]"
                customClick={(event) => handleCustomClick(event)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white relative pt-20 md:pt-[146px] pb-28">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-4/12 lg:sticky lg:!top-40">
              <div>
                <div className="pb-10">
                  <p className="text-[--color-secondary] font-light">
                    PROYECTO
                  </p>
                  <h2 className="text-[--color-secondary] text-[30px] lg:text-[44px] uppercase leading-none">
                    TOP LIFE
                  </h2>
                  <p className="text-[--color-secondary] text-xl">
                    Juan de Aliaga
                  </p>
                </div>
                <div className="pb-5">
                  <p className="text-[--color-secondary] font-light pb-4">
                    TOP LIFE - Juan de Aliaga es un edificio multifamiliar,
                    ubicado en Magdalena del Mar, de 22 pisos, con azotea y 5
                    sótanos. Ofrecemos 84 departamentos de 1, 2 y 3 dormitorios
                    y sólo 4 departamentos por piso.
                  </p>
                  <p className="text-[--color-secondary] font-light">
                    Conoce más sobre nuestro nuevo proyecto en etapa de pre
                    lanzamiento.
                  </p>
                </div>
                <Button
                  label={"VER PROYECTO"}
                  extraStyles="btn-primary px-10 h-[50px]"
                  customClick={(event) => handleCustomClick(event)}
                />
              </div>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-10 pt-10 lg:pt-0">
              <div className="grid grid-cols-10 md:grid-cols-6 gap-6">
                <div className="col-span-10 md:col-span-6">
                  <div className="relative h-[300px] lg:h-[490px]">
                    <img
                      className="w-full h-full object-cover rounded"
                      src={dep1}
                      alt=""
                    />
                    <div className="support-item rounded absolute top-0 left-0 right-0 bottom-0 py-4 px-[25px] lg:px-[26px] overflow-hidden lg:py-[32px] flex flex-col items-start justify-end cursor-pointer">
                      <div className="support-item--text">
                        <div className="support-item--paragraph">
                          <p className="text-white font-light">
                            Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-3">
                  <div className="relative h-[300px] lg:h-[490px]">
                    <img
                      className="w-full h-full object-cover rounded"
                      src={dep2}
                      alt=""
                    />
                    <div className="support-item rounded absolute top-0 left-0 right-0 bottom-0 py-4 px-[25px] lg:px-[26px] overflow-hidden lg:py-[32px] flex flex-col items-start justify-end cursor-pointer">
                      <div className="support-item--text">
                        <div className="support-item--paragraph">
                          <p className="text-white font-light">
                            Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-3">
                  <div className="relative h-[300px] lg:h-[490px]">
                    <img
                      className="w-full h-full object-cover rounded"
                      src={dep3}
                      alt=""
                    />
                    <div className="support-item rounded absolute top-0 left-0 right-0 bottom-0 py-4 px-[25px] lg:px-[26px] overflow-hidden lg:py-[32px] flex flex-col items-start justify-end cursor-pointer">
                      <div className="support-item--text">
                        <div className="support-item--paragraph">
                          <p className="text-white font-light">
                            Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-6">
                  <div className="relative h-[300px] lg:h-[490px]">
                    <img
                      className="w-full h-full object-cover rounded"
                      src={dep4}
                      alt=""
                    />
                    <div className="support-item rounded absolute top-0 left-0 right-0 bottom-0 py-4 px-[25px] lg:px-[26px] overflow-hidden lg:py-[32px] flex flex-col items-start justify-end cursor-pointer">
                      <div className="support-item--text">
                        <div className="support-item--paragraph">
                          <p className="text-white font-light">
                            Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-2">
                  <div className="relative h-[300px]">
                    <img
                      className="w-full h-full object-cover rounded"
                      src={dep5}
                      alt=""
                    />
                    <div className="support-item rounded absolute top-0 left-0 right-0 bottom-0 py-4 px-[25px] lg:px-[26px] overflow-hidden lg:py-[32px] flex flex-col items-start justify-end cursor-pointer">
                      <div className="support-item--text">
                        <div className="support-item--paragraph">
                          <p className="text-white font-light">
                            Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-2">
                  <div className="relative h-[300px]">
                    <img
                      className="w-full h-full object-cover rounded"
                      src={dep6}
                      alt=""
                    />
                    <div className="support-item rounded absolute top-0 left-0 right-0 bottom-0 py-4 px-[25px] lg:px-[26px] overflow-hidden lg:py-[32px] flex flex-col items-start justify-end cursor-pointer">
                      <div className="support-item--text">
                        <div className="support-item--paragraph">
                          <p className="text-white font-light">
                            Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-2">
                  <div className="relative h-[300px]">
                    <img
                      className="w-full h-full object-cover rounded"
                      src={dep7}
                      alt=""
                    />
                    <div className="support-item rounded absolute top-0 left-0 right-0 bottom-0 py-4 px-[25px] lg:px-[26px] overflow-hidden lg:py-[32px] flex flex-col items-start justify-end cursor-pointer">
                      <div className="support-item--text">
                        <div className="support-item--paragraph">
                          <p className="text-white font-light">
                            Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-6">
                  <div className="relative h-[300px] lg:h-[490px]">
                    <img
                      className="w-full h-full object-cover rounded"
                      src={dep8}
                      alt=""
                    />
                    <div className="support-item rounded absolute top-0 left-0 right-0 bottom-0 py-4 px-[25px] lg:px-[26px] overflow-hidden lg:py-[32px] flex flex-col items-start justify-end cursor-pointer">
                      <div className="support-item--text">
                        <div className="support-item--paragraph">
                          <p className="text-white font-light">
                            Empieza tu vida en lo más TOP de la ciudad con VAL Desarrollos Inmobiliarios
                          </p>
                        </div>
                      </div>
                    </div>
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

export default Department;

export const Head: HeadFC = () => <title>Val - Multifamiliares</title>;
