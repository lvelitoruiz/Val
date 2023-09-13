import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import lot1 from "../images/oxa-2.jpg";
import logoUrb from "../images/oxa.svg";
import imgAbout from "../images/about.jpg";
import icon from "../images/icon.svg";
import iconWsp from "../images/icon-wsp.svg";
import map from "../images/map.jpg";
import oxa1 from "../images/oxa.jpg";
import oxa3 from "../images/oxa-3.jpg";
import oxa4 from "../images/oxa-4.jpg";
import lotPlano from "../images/lot-plano.svg";


import { LinkedIn } from "iconoir-react";
import Button from "../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";

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
          <div className="bg-[--gray] w-full lg:h-[168px] mt-[-84px] items-start gap-4 rounded relative flex flex-col lg:flex-row lg:items-center md:justify-between p-6 lg:py-0 lg:px-10">
            <div className="flex items-center gap-4">
              <img className="h-[50px] lg:h-[96px]" src={logoUrb} alt="" />
              <p className="text-[--color-secondary] text-[20px] lg:text-[30px] leading-none max-w-[420px] font-light">Vive en la mejor ubicación dentro de la misma ciudad</p>
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

      <section className="pt-20 md:pt-28 relative bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
            <div className="col-span-10 md:col-span-12 lg:col-span-4 h-full">
              <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">Características del proyecto</h2>
              <p className="text-[--color-secondary] font-light">Construye tu próxima casa o negocio en Oxapampa. Nuestro proyecto de lotes urbanos en la ciudad de Oxapampa te ofrece terrenos desde 205 m2 a 220 m2 en la misma ciudad, a solo 5 minutos de la Plaza de Armas.</p>
              <div className="py-10">
                <p className="text-[--color-secondary] text-sm">PRECIOS DE DESDE</p>
                <p className="text-[--color-secondary] text-[30px] leading-none py-1">S/196,000</p>
                <p className="text-[--color-secondary] text-xs">con financiamiento directo</p>
              </div>
              <Button
                label="¡Cotizar ahora!"
                extraStyles="btn-primary px-[34px] h-[50px]"
                customClick={(event) => handleCustomClick(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-12 lg:col-span-8 h-full">
              <div className="w-full h-[438px] overflow-hidden rounded">
                <img className="object-cover h-full w-full transition duration-150 ease-out hover:scale-125" src={oxa4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-14 relative bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="border-y border-[--gray] py-10">
            <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
              <div className="col-span-10 md:col-span-6 lg:col-span-3 h-full">
                <div className="flex items-center gap-5 flex-col">
                  <img className="h-[56px]" src={icon} alt="" />
                  <p className="text-[--color-secondary] text-center text-xl font-light">Nuestros lotes cuentan con título independizado en Registros Público</p>
                </div>
              </div>
              <div className="col-span-10 md:col-span-6 lg:col-span-3 h-full">
                <div className="flex items-center gap-5 flex-col">
                  <img className="h-[56px]" src={icon} alt="" />
                  <p className="text-[--color-secondary] text-center text-xl font-light">Terreno sin humedad, con sistema de drenaje subterráneo</p>
                </div>
              </div>
              <div className="col-span-10 md:col-span-6 lg:col-span-3 h-full">
                <div className="flex items-center gap-5 flex-col">
                  <img className="h-[56px]" src={icon} alt="" />
                  <p className="text-[--color-secondary] text-center text-xl font-light">Veredas y pistas</p>
                </div>
              </div>
              <div className="col-span-10 md:col-span-6 lg:col-span-3 h-full">
                <div className="flex items-center gap-5 flex-col">
                  <img className="h-[56px]" src={icon} alt="" />
                  <p className="text-[--color-secondary] text-center text-xl font-light">Luz, agua y desagüe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative bg-white">
        <div className="px-6 lg:pr-0 lg:pl-[calc((100vw-1024px)/2)] xl:pl-[calc((100vw-1280px)/2)] 2xl:pl-[calc((100vw-1536px)/2)]">
          <div className="flex items-start flex-col lg:flex-row">
            <div className="w-full lg:w-4/12 pt-10 pr-10">
              <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">Ubicación del Proyecto</h2>
              <div className="flex items-center gap-4 pb-8">
                <LinkedIn color="#313E48" height={24} width={24} />
                <p className="text-sm text-[--color-secondary] font-light">
                  Acércate a nuestra Caseta de Ventas en Jr. Albegrin con Jr. Independencia
                </p>
              </div>
              <p className="text-[--color-secondary] text-sm pb-6">Contáctate con nuestros vendedores en la misma ciudad</p>
              <div className="flex items-center gap-5 flex-wrap">
                <a href="" className="flex items-center gap-2">
                  <img src={iconWsp} alt="" />
                  <span className="text-sm text-[--color-secondary]">949 995 919</span>
                </a>
                <a href="" className="flex items-center gap-2">
                  <img src={iconWsp} alt="" />
                  <span className="text-sm text-[--color-secondary]">949 995 919</span>
                </a>
                <a href="" className="flex items-center gap-2">
                  <img src={iconWsp} alt="" />
                  <span className="text-sm text-[--color-secondary]">949 995 919</span>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-8/12 pt-10 lg:pt-0"> 
              <img
                className="w-full h-[570px] object-cover"
                src={map}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative bg-[--color-secondary]">
        <div className="container mx-auto px-6 lg:px-0">
          <h2 className="text-[30px] lg:text-[44px] text-white leading-none pb-10">Galería</h2>
        </div>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className="w-full h-[326px]">
                <img className="w-full h-full object-cover" src={oxa1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[326px]">
                <img className="w-full h-full object-cover" src={lot1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[326px]">
                <img className="w-full h-full object-cover" src={oxa3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[326px]">
                <img className="w-full h-full object-cover" src={oxa1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[326px]">
                <img className="w-full h-full object-cover" src={lot1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[326px]">
                <img className="w-full h-full object-cover" src={oxa3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[326px]">
                <img className="w-full h-full object-cover" src={oxa1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[326px]">
                <img className="w-full h-full object-cover" src={lot1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[326px]">
                <img className="w-full h-full object-cover" src={oxa3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[326px]">
                <img className="w-full h-full object-cover" src={oxa1} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
      </section>

      <section className="py-20 md:py-28 relative bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">Distribución de lotes</h2>
          <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
            <div className="col-span-10 md:col-span-12 lg:col-span-6">
              <img className="w-full" src={lotPlano} alt="" />
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

export default Lot;

export const Head: HeadFC = () => <title>Val - Lotes</title>;
