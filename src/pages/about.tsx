import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopLifeOne from "../images/top-life-1.jpg";
import OxaOne from "../images/oxa-2.jpg";
import AgroOne from "../images/agro-2.jpg";
import Map from "../images/map-about.svg"
import imgAbout from "../images/about.jpg"
import icon from "../images/icon.svg"
import aboutConexa from "../images/about-conexa.jpg"
import logoConexa from "../images/logo-conexa.png"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import 'swiper/css/navigation';

import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Agent from "../components/Agent";
import { ArrowRight } from "iconoir-react";

const About: React.FC<PageProps> = () => {

  const data = [
    {
      imageUrl: "/static/images/agro.jpg",
      name: "Freddy Salcedo",
      position: "Gerente General",
    },
    {
      imageUrl: "/static/images/agro.jpg",
      name: "Betsy Marino",
      position: "Gerente General",
    },
    {
      imageUrl: "/static/images/agro.jpg",
      name: "Karen Chapoñan",
      position: "Gerente Financiero",
    },
    {
      imageUrl: "/static/images/agro.jpg",
      name: "Pablo Delgado",
      position: "Director",
    },
    {
      imageUrl: "/static/images/agro.jpg",
      name: "Sergio Barboza  ",
      position: "Director",
    }
  ];

  return (
    <>
      <Header />
      <section className="pt-20 sticky top-0">
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
            <div className="h-[443px] md:h-[543px] relative">
              <img className="w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0" src={TopLifeOne} alt="" />
              <div className="container mx-auto relative h-[443px] md:h-[543px] flex items-end">
                <div className="px-[53px] text-white flex items-center justify-center bg-[--color-secondary] py-2 text-xl mb-10">TOP LIFE - Juan de Aliaga</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[443px] md:h-[543px] relative">
              <img className="w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0" src={OxaOne} alt="" />
              <div className="container mx-auto relative h-[443px] md:h-[543px] flex items-end">
                <div className="px-[53px] text-white flex items-center justify-center bg-[--color-secondary] py-2 text-xl mb-10">Oxapampa</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[443px] md:h-[543px] relative">
              <img className="w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0" src={AgroOne} alt="" />
              <div className="container mx-auto relative h-[443px] md:h-[543px] flex items-end">
                <div className="px-[53px] text-white flex items-center justify-center bg-[--color-secondary] py-2 text-xl mb-10">OLMOS - Fundo San Isidro</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="md:w-8/12 lg:w-5/12 mx-auto mb-14">
            <h1 className="pb-4 leading-none text-[--color-secondary] text-center text-[30px] lg:text-[44px] uppercase">Conócenos</h1>
            <p className="text-center font-light text-[--color-secondary]"><span className="font-normal">VAL Desarrollos Inmobiliarios S.A.</span> es la empresa inmobiliaria del grupo empresarial <span className="font-normal">CONEXA FINANCIAL GROUP</span></p>
          </div>
          <div className="flex gap-10 flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-4/12">
              <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">Nuestra presencia en el interior del país</h2>
              <p className="text-[--color-secondary] font-light pb-4">VAL Desarrollos inmobiliarios S.A. posee activos inmobiliarios que suman aproximadamente 1,818 hectáreas entre Lima, Chiclayo, Oxapampa y San Martín, cuyo valor en conjunto superan los USD 6 MM.</p>
              <p className="text-[--color-secondary] font-light">Hoy nos enfocamos en proyectos de venta inmobiliaria, en segmentos de vivienda multifamiliar, lotes, comercio y agro industrial.</p>
            </div>
            <div className="w-full lg:w-6/12">
              <img className="w-full md:w-fit md:min-w-[483px] mx-auto" src={Map} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="mx-auto mb-14">
            <h2 className="pb-4 leading-none text-[--color-secondary] text-center text-[30px] lg:text-[44px]">Conoce a nuestro equipo</h2>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-5">
            {data.map((item, index) => (
              <div className="w-full md:w-[48%] lg:w-full" key={index}>
                <Agent imgUrl={item.imageUrl} name={item.name} position={item.position} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-28 pb-[280px] bg-[--gray] relative">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
            <div className="col-span-10 md:col-span-12 lg:col-span-4 h-full">
              <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">Nuestro propósito</h2>
              <p className="text-[--color-secondary] font-light pb-4">Promover proyectos de vivienda y agro industriales que respeten el medio ambiente y que mejoren la calidad de vida.</p>
            </div>
            <div className="col-span-10 md:col-span-12 lg:col-span-8 h-full">
              <img src={imgAbout} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 lg:px-0 relative">
        <div className="container mx-auto relative">
          <div className="bg-white rounded pt-16 pb-10 px-10 absolute top-[-150px] left-0 right-0 w-full border border-[#F6F6F6] z-[2]">
            <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-16 text-center">Nuestros Valores</h2>
            <div>
              <Swiper
                spaceBetween={40}
                slidesPerView={1}
                navigation={true} 
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
                modules={[Navigation]}
                className="SwiperAbout"
              >
                <SwiperSlide>
                  <div className="flex items-center gap-5">
                    <img src={icon} alt="" />
                    <p className="text-[--color-secondary]">Integridad y ética</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center gap-5">
                    <img src={icon} alt="" />
                    <p className="text-[--color-secondary]">Cuidado por el medio ambiente</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center gap-5">
                    <img src={icon} alt="" />
                    <p className="text-[--color-secondary]">Responsabilidad y respeto</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center gap-5">
                    <img src={icon} alt="" />
                    <p className="text-[--color-secondary]">Trabajo en equipo</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center gap-5">
                    <img src={icon} alt="" />
                    <p className="text-[--color-secondary]">Trabajo en equipo</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white relative pt-[326px]">
        <div className="bg-[--color-secondary] lg:w-6/12 pt-10 relative mb-[-250px]">
          <div className="pl-6 lg:pl-[calc((100vw-1024px)/2)] xl:pl-[calc((100vw-1280px)/2)] 2xl:pl-[calc((100vw-1536px)/2)]">
            <div className="pr-20">
              <h3 className="text-[24px] font-light text-white pb-5">Respaldados por <span className="font-normal">Conexa Financial Group</span></h3>
              <p className="text-white font-light pb-4">Somos la empresa inmobiliaria de Conexa Financial Group.</p>
              <p className="text-white font-light pb-4">Conexa Financial Group estructura y administra fondos de inversión privados que se enfocan en generar oportunidades para inversionistas e impulsar el crecimiento de los sectores más importantes de la economía del país a través de financiamiento a PYMES.</p>
              <p className="text-white font-light pb-4">Conexa Financial Group, administra activos por +USD 50 MM y ha otorgado financiamiento por más de + USD 225 MM. Su cartera de créditos está diversificada en + 120 PYMES que abarca 12 sectores económicos del país.</p>
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
      </section>
      <Footer />
    </>
  );
};

export default About;

export const Head: HeadFC = () => <title>Val - Nosotros</title>;
