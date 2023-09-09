import { PinAlt} from "iconoir-react";
import React, { } from "react";

import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import TopLifeOne from './../images/top-life-1.jpg';
import TopLifeTwo from './../images/top-life-2.jpg';
import Oxa from './../images/oxa.jpg';
import OxaTwo from './../images/oxa-2.jpg';
const Banner = () => { 
  return (
    <div>
      <h2 className="text-center text-[--color-secondary] text-[30px] lg:text-[44px] pb-12">PROYECTOS EN VENTA</h2>
      <div className="grid grid-cols-10 md:grid-cols-12 gap-8">
        <div className="col-span-10 md:col-span-12 lg:col-span-6">
          <div className="bg-[--gray] rounded">
            <div className="w-full h-[300px] md:h-[478px] rounded-t relative">
              <Swiper
                spaceBetween={0}
                pagination={true}
                effect={'fade'}
                slidesPerView={1}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay, EffectFade]}
                className="bulletBottom"
              >
                <SwiperSlide>
                  <div className="h-[300px] md:h-[478px] w-full">
                    <img className="w-full h-full object-cover rounded-t" src={TopLifeOne} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[300px] md:h-[478px] w-full">
                    <img className="w-full h-full object-cover rounded-t" src={TopLifeTwo} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="min-w-[138px] flex items-center justify-center bg-[--color-primary] h-[36px] absolute top-4 left-4 z-[2]">
                <p className="uppercase text-white">Preventa</p>
              </div>
            </div>
            <div className="pb-10 mt-[-53px] relative z-[2]">
              <div className="mx-5 md:mx-10 bg-[--color-secondary] flex items-center rounded h-[107px]">
                <div className="w-full"> 
                </div>
                <div className="w-full">
                  <div>
                    <p className="text-white uppercase text-xs md:text-sm leading-tight">PRECIOS DE DESDE</p>
                    <p className="text-white uppercase text-[22px] md:text-[30px] leading-none">S/360,000</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-5 mx-5 md:mx-10 border-b border-[--border-ligth]">
                <PinAlt color="#009877" height={24} width={24} />
                <p className="text-[--color-secondary] font-semibold text-sm md:text-base">Juan de Aliaga</p>
              </div>
              <div className="flex items-center py-4">
                <div className="w-full flex items-center justify-center gap-4 border-r border-[--border-ligth]">
                  <PinAlt className="hidden md:block" color="#009877" height={24} width={24} />
                  <p className="text-[--color-secondary] font-light text-sm md:text-base"><span className="font-semibold">1, 2, 3</span> dorm.</p>
                </div>
                <div className="w-full flex items-center justify-center gap-4">
                  <PinAlt className="hidden md:block" color="#009877" height={24} width={24} />
                  <p className="text-[--color-secondary] font-light text-sm md:text-base">Áreas desde <span className="font-semibold">46 m2</span></p>
                </div>
              </div>
              <div className="flex items-center justify-center md:pt-4 mx-5 md:mx-0">
                <button className="w-full md:w-[260px] border-2 border-[--color-primary] h-[56px] flex items-center justify-center text-[--color-primary] uppercase font-semibold rounded">
                  <span>VER PROYECTO</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-10 md:col-span-12 lg:col-span-6">
          <div className="bg-[--gray] rounded">
            <div className="w-full h-[300px] md:h-[478px] rounded-t relative">
              <Swiper
                spaceBetween={0}
                pagination={true}
                effect={'fade'}
                slidesPerView={1}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay, EffectFade]}
                className="bulletBottom"
              >
                <SwiperSlide>
                  <div className="h-[300px] md:h-[478px] w-full">
                    <img className="w-full h-full object-cover rounded-t" src={Oxa} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[300px] md:h-[478px] w-full">
                    <img className="w-full h-full object-cover rounded-t" src={OxaTwo} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="min-w-[138px] flex items-center justify-center bg-[--color-primary] h-[36px] absolute top-4 left-4 z-[2]">
                <p className="uppercase text-white">Preventa</p>
              </div>
            </div>
            <div className="pb-10 mt-[-53px] relative z-[2]">
              <div className="mx-5 md:mx-10 bg-[--color-secondary] flex items-center rounded h-[107px]">
                <div className="w-full"> 
                </div>
                <div className="w-full">
                  <div>
                    <p className="text-white uppercase text-xs md:text-sm leading-tight">PRECIOS DE DESDE</p>
                    <p className="text-white uppercase text-[22px] md:text-[30px] leading-none">S/360,000</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-5 mx-5 md:mx-10 border-b border-[--border-ligth]">
                <PinAlt color="#009877" height={24} width={24} />
                <p className="text-[#313E48] font-semibold text-sm md:text-base">Juan de Aliaga</p>
              </div>
              <div className="flex items-center py-4">
                <div className="w-full flex items-center justify-center gap-4 border-r border-[--border-ligth]">
                  <PinAlt className="hidden md:block" color="#009877" height={24} width={24} />
                  <p className="text-[#313E48] font-light text-sm md:text-base"><span className="font-semibold">1, 2, 3</span> dorm.</p>
                </div>
                <div className="w-full flex items-center justify-center gap-4">
                  <PinAlt className="hidden md:block" color="#009877" height={24} width={24} />
                  <p className="text-[#313E48] font-light text-sm md:text-base">Áreas desde <span className="font-semibold">46 m2</span></p>
                </div>
              </div>
              <div className="flex items-center justify-center md:pt-4 mx-5 md:mx-0">
                <button className="w-full md:w-[260px] border-2 border-[--color-primary] h-[56px] flex items-center justify-center text-[--color-primary] uppercase font-semibold rounded">
                  <span>VER PROYECTO</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Banner;