import { City } from "iconoir-react";
import React, { } from "react";

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import TopLifeTwo from './../images/top-life-2.jpg';
import Oxa from './../images/oxa.jpg';
import Agro from './../images/agro.jpg';
import Bank from './../images/bank.jpg';
import Sell from './../images/sell.jpg';
import Invest from './../images/invest.jpg';

const Banner = () => { 
  return (
    <div className="pt-20 h-screen">
      <Swiper
        spaceBetween={0}
        pagination={true}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div className="relative h-[calc(100vh-80px)]">
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="relative h-full w-full before:content-[''] before:bg-[rgba(49,62,72,0.60)] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
                <img className="w-full h-full object-cover rounded-t" src={TopLifeTwo} alt="" />
              </div>
            </div>
            <div className="container mx-auto h-full relative pl-16">
              <div className="flex flex-col items-start justify-center h-[calc(100%-315px)] w-8/12">
                <div className="pb-5">
                  <h2 className="text-[56px] text-white leading-tight pb-4">Espacios modernos, para familias modernas</h2>
                  <p className="text-white font-light">Construimos departamentos eco amigables, que ayudan a crear un mejor entorno a la vez que cuidamos el planeta.</p>
                </div>
                <div className="pt-4 border-t border-[#7F8387] w-full">
                  <p className="font-semibold text-white pb-4">Nuestor proyecto</p>
                  <div className="flex items-center justify-start gap-10">
                    <div className="flex items-center gap-4">
                      <div className="w-[30px] h-[30px] flex items-center justify-center bg-white rounded-sm">
                        <City color="#009877" height={18} width={18} />
                      </div>
                      <p className="text-white">Top Life</p>
                    </div>
                  </div>
                </div>
                <div className="pt-10">
                  <button className="w-[355px] bg-[--color-primary] h-[56px] flex items-center justify-center text-white uppercase font-semibold rounded">
                    <span>VER NUESTROS PROYECTOS</span>
                  </button>
                </div>
              </div>  
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[calc(100vh-80px)]">
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="relative h-full w-full before:content-[''] before:bg-[rgba(49,62,72,0.60)] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
              <img className="w-full h-full object-cover rounded-t" src={Oxa} alt="" />
              </div>
            </div>
            <div className="container mx-auto h-full relative pl-16">
              <div className="flex flex-col items-start justify-center h-[calc(100%-315px)] w-8/12">
                <div className="pb-5">
                  <h2 className="text-[56px] text-white leading-tight pb-4">Urbanizamos lotes para crear mejores ciudades</h2>
                  <p className="text-white font-light">Queremos que las ciudades crezcan ordenadamente y diseñamos proyectos de lotes urbanos para mejorar la calidad de vida de las personas.</p>
                </div>
                <div className="pt-4 border-t border-[#7F8387] w-full">
                  <p className="font-semibold text-white pb-4">Nuestor proyecto</p>
                  <div className="flex items-center justify-start gap-10">
                    <div className="flex items-center gap-4">
                      <div className="w-[30px] h-[30px] flex items-center justify-center bg-white rounded-sm">
                        <City color="#009877" height={18} width={18} />
                      </div>
                      <p className="text-white">Oxapampa</p>
                    </div>
                  </div>
                </div>
                <div className="pt-10">
                  <button className="w-[355px] bg-[--color-primary] h-[56px] flex items-center justify-center text-white uppercase font-semibold rounded">
                    <span>VER NUESTROS PROYECTOS</span>
                  </button>
                </div>
              </div>  
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[calc(100vh-80px)]">
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="relative h-full w-full before:content-[''] before:bg-[rgba(49,62,72,0.60)] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
                <img className="w-full h-full object-cover rounded-t" src={Agro} alt="" />
              </div>
            </div>
            <div className="container mx-auto h-full relative pl-16">
              <div className="flex flex-col items-start justify-center h-[calc(100%-315px)] w-8/12">
                <div className="pb-5">
                  <h2 className="text-[56px] text-white leading-tight pb-4">Transformamos bancos de terrenos en oportunidades para la agro industria</h2>
                  <p className="text-white font-light">Creamos nuevos negocios a partir de explotar terrenos de alto valor agrícola en el interior del país.</p>
                </div>
                <div className="pt-4 border-t border-[#7F8387] w-full">
                  <p className="font-semibold text-white pb-4">Nuestor proyecto</p>
                  <div className="flex items-center justify-start gap-10">
                    <div className="flex items-center gap-4">
                      <div className="w-[30px] h-[30px] flex items-center justify-center bg-white rounded-sm">
                        <City color="#009877" height={18} width={18} />
                      </div>
                      <p className="text-white">Proyecto Olmos - Fundo San Isidro</p>
                    </div>
                  </div>
                </div>
                <div className="pt-10">
                  <button className="w-[355px] bg-[--color-primary] h-[56px] flex items-center justify-center text-white uppercase font-semibold rounded">
                    <span>VER NUESTROS PROYECTOS</span>
                  </button>
                </div>
              </div>  
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[calc(100vh-80px)]">
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="relative h-full w-full before:content-[''] before:bg-[rgba(49,62,72,0.60)] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
                <img className="w-full h-full object-cover rounded-t" src={Bank} alt="" />
              </div>
            </div>
            <div className="container mx-auto h-full relative pl-16">
              <div className="flex flex-col items-start justify-center h-[calc(100%-315px)] w-8/12">
                <div className="pb-5">
                  <h2 className="text-[56px] text-white leading-tight pb-4">Administramos bancos de terrenos en el interior del país para crear valor futuro</h2>
                  <p className="text-white font-light">2,500 hectáreas forman parte de nuestro portafolio.</p>
                </div>
                <div className="pt-10">
                  <button className="w-[355px] bg-[--color-primary] h-[56px] flex items-center justify-center text-white uppercase font-semibold rounded">
                    <span>MÁS INFORMACIÓN</span>
                  </button>
                </div>
              </div>  
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[calc(100vh-80px)]">
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="relative h-full w-full before:content-[''] before:bg-[rgba(49,62,72,0.60)] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
                <img className="w-full h-full object-cover rounded-t" src={Sell} alt="" />
              </div>
            </div>
            <div className="container mx-auto h-full relative pl-16">
              <div className="flex flex-col items-start justify-center h-[calc(100%-315px)] w-8/12">
                <div className="pb-5">
                  <h2 className="text-[56px] text-white leading-tight pb-4">¿Quieres vender un terreno urbano?</h2>
                  <p className="text-white font-light">Buscamos nuevos espacios dentro de la ciudad para desarrollar proyectos inmobiliarios.</p>
                </div>
                <div className="pt-10">
                  <button className="w-[355px] bg-[--color-primary] h-[56px] flex items-center justify-center text-white uppercase font-semibold rounded">
                    <span>MÁS INFORMACIÓN</span>
                  </button>
                </div>
              </div>  
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[calc(100vh-80px)]">
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="relative h-full w-full before:content-[''] before:bg-[rgba(49,62,72,0.60)] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
                <img className="w-full h-full object-cover rounded-t" src={Invest} alt="" />
              </div>
            </div>
            <div className="container mx-auto h-full relative pl-16">
              <div className="flex flex-col items-start justify-center h-[calc(100%-315px)] w-8/12">
                <div className="pb-5">
                  <h2 className="text-[56px] text-white leading-tight pb-4">Somos parte de Conexa Financial Group</h2>
                  <p className="text-white font-light">Invierte con nosotros y genera rentabilidad a partir de productos inmobiliarios.</p>
                </div>
                <div className="pt-10">
                  <button className="w-[355px] bg-[--color-primary] h-[56px] flex items-center justify-center text-white uppercase font-semibold rounded">
                    <span>MÁS INFORMACIÓN</span>
                  </button>
                </div>
              </div>  
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
