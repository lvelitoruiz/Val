import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import map from "../images/map.jpg";
import agro10 from "../images/agro-10.jpg";
import agro11 from "../images/agro-11.jpg";
import agro1 from "../images/agro-1.jpg";
import agro2 from "../images/agro-2.jpg";
import agro3 from "../images/agro-3.jpg";
import agro4 from "../images/agro-4.jpg";
import agro5 from "../images/agro-5.jpg";
import agro6 from "../images/agro-6.jpg";
import agro7 from "../images/agro-7.jpg";
import agro8 from "../images/agro-8.jpg";
import agro9 from "../images/agro-9.jpg";
import agro14 from "../images/agro-14.jpg";

import { LinkedIn } from "iconoir-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Agro: React.FC<PageProps> = () => {
  const handleCustomClick = (event: string) => {
    console.log("custom click: ", event);
  };

  return (
    <>
      <Header />
      <section className="pt-28 md:pt-36 lg:sticky top-0">
        <div>
          <div className="w-full px-6 lg:px-0 md:w-10/12 lg:w-8/12 mx-auto mb-14">
            <h1 className="pb-4 leading-tight text-[--color-secondary] text-center text-[30px] lg:text-[44px] uppercase">
              Transformamos bancos de terrenos en oportunidades para la agro
              industria
            </h1>
            <p className="text-center font-light text-[--color-secondary]">
              <span className="font-normal">
                Creamos nuevos negocios a partir de explotar terrenos de alto
                valor agrícola en el interior del país.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <Swiper
          spaceBetween={0}
          pagination={true}
          effect={"fade"}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 6000, 
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, EffectFade]}
        >
          <SwiperSlide>
            <div className="h-[509px] md:h-[790px] relative">
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <div className="relative h-full w-full before:content-[''] before:bg-[rgba(49,62,72,0.30)] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
                  <img
                    className="w-full h-full object-cover rounded-t"
                    src={agro10}
                    alt=""
                  />
                </div>
              </div>
              <div className="container mx-auto relative h-[509px] md:h-[790px] flex items-end">
                <p className="pb-20 text-white text-[30px] lg:text-[50px] px-6 lg:px-0 lg:w-7/12 leading-none font-light">Creemos en el potencial agro exportador de nuestro país</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[509px] md:h-[790px] relative">
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <div className="relative h-full w-full before:content-[''] before:bg-[rgba(49,62,72,0.30)] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
                  <img
                    className="w-full h-full object-cover rounded-t"
                    src={agro5}
                    alt=""
                  />
                </div>
              </div>
              <div className="container mx-auto relative h-[509px] md:h-[790px] flex items-end">
                <p className="pb-20 text-white text-[30px] lg:text-[50px] px-6 lg:px-0 lg:w-7/12 leading-none font-light">Creemos en el potencial agro exportador de nuestro país</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[509px] md:h-[790px] relative">
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <div className="relative h-full w-full before:content-[''] before:bg-[rgba(49,62,72,0.30)] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
                  <img
                    className="w-full h-full object-cover rounded-t"
                    src={agro8}
                    alt=""
                  />
                </div>
              </div>
              <div className="container mx-auto relative h-[509px] md:h-[790px] flex items-end">
                <p className="pb-20 text-white text-[30px] lg:text-[50px] px-6 lg:px-0 lg:w-7/12 leading-none font-light">Creemos en el potencial agro exportador de nuestro país</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="py-20 md:py-28 relative bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
            <div className="col-span-10 md:col-span-12 lg:col-span-4 h-full">
              <div className="pb-10">
                <p className="text-[--color-secondary] font-light">PROYECTO</p>
                <h2 className="text-[--color-secondary] text-[30px] lg:text-[44px] uppercase leading-none">
                  Olmos
                </h2>
                <p className="text-[--color-secondary] text-xl">Fundo San Isidro</p>
              </div>
              <p className="text-[--color-secondary] font-light">
                Terreno ubicado en la provincia de Lambayeque en el que estamos trabajando para darle valor agro industrial, perforando pozos tubulares, mejorando el acceso y dotándolo de energía eléctrica que permita explotar y rentabilizar todo su potencial.
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
              <div className="w-full h-[438px] overflow-hidden rounded">
                <img
                  className="object-cover h-full w-full transition duration-150 ease-out hover:scale-125"
                  src={agro14}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[--gray] relative">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
            <div className="col-span-10 md:col-span-12 lg:col-span-4 h-full">
              <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">Potencial comercial</h2>
              <p className="text-[--color-secondary] font-light pb-4">Terreno para renta y/o venta de cultivos para la agro exportación.</p>
            </div>
            <div className="col-span-10 md:col-span-12 lg:col-span-8 h-full">
              <div className="w-full h-[438px] overflow-hidden rounded">
                <img className="object-cover h-full w-full transition duration-150 ease-out hover:scale-125" src={agro6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative bg-white">
        <div className="px-6 lg:pr-0 lg:pl-[calc((100vw-1024px)/2)] xl:pl-[calc((100vw-1280px)/2)] 2xl:pl-[calc((100vw-1536px)/2)]">
          <div className="flex items-start flex-col lg:flex-row">
            <div className="w-full lg:w-4/12 pt-10 pr-10">
              <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">
                Ubicación del Proyecto
              </h2>
              <div className="flex items-center gap-4 pb-8">
                <LinkedIn color="#313E48" height={24} width={24} />
                <p className="text-sm text-[--color-secondary] font-light">
                  Olmos - Fundo San Isidro 
                </p>
              </div>
            </div>
            <div className="w-full lg:w-8/12 pt-10 lg:pt-0">
              <img className="w-full h-[570px] object-cover" src={map} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative bg-[--color-secondary]">
        <div className="container mx-auto px-6 lg:px-0">
          <h2 className="text-[30px] lg:text-[44px] text-white leading-none pb-10">
            Galería
          </h2>
        </div>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={20}
          grabCursor={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="w-full h-[326px]">
              <img className="w-full h-full object-cover" src={agro1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[326px]">
              <img className="w-full h-full object-cover" src={agro2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[326px]">
              <img className="w-full h-full object-cover" src={agro3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[326px]">
              <img className="w-full h-full object-cover" src={agro4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[326px]">
              <img className="w-full h-full object-cover" src={agro5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[326px]">
              <img className="w-full h-full object-cover" src={agro6} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[326px]">
              <img className="w-full h-full object-cover" src={agro7} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[326px]">
              <img className="w-full h-full object-cover" src={agro8} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[326px]">
              <img className="w-full h-full object-cover" src={agro9} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[326px]">
              <img className="w-full h-full object-cover" src={agro10} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="py-20 md:py-28 relative bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
            <div className="col-span-10 md:col-span-12 lg:col-span-6">
              <img className="w-full h-[490px] object-cover" src={agro11} alt="" />
            </div>
            <div className="col-span-10 md:col-span-12 lg:col-span-6">
              <div className="pl-10">
                <p>FORM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Agro;

export const Head: HeadFC = () => <title>Val - Agrícola</title>;
