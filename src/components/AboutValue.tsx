import React from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const AboutValue = ({values}: any) => {

  console.log(values);

  return (
    <>
      <div className="bg-white rounded pt-16 pb-10 px-10 absolute top-[-150px] left-0 right-0 w-full border border-[#F6F6F6] z-[2]">
        <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-16 text-center">
          Nuestros Valores
        </h2>
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
            {values.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="flex items-center gap-5">
                <img className="h-[50px]" src={item.attributes.url} alt="" />
                <p className="text-[--color-secondary]">{item.attributes.alternativeText}</p>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AboutValue;
