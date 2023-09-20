import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderAbout = () => {
  const data = [
    {
      title: "TOP LIFE - Juan de Aliaga",
      imgUrl: "/static/images/top-life-1.jpg",
    },
    {
      title: "Oxapampa",
      imgUrl: "/static/images/oxa-2.jpg",
    },
    {
      title: "OLMOS - Fundo San Isidro",
      imgUrl: "/static/images/agro-2.jpg",
    },
  ];

  return (
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
      {data.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="h-[443px] md:h-[543px] relative">
          <img
            className="w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0"
            src={item.imgUrl}
            alt=""
          />
          <div className="container mx-auto relative h-[443px] md:h-[543px] flex items-end">
            <div className="px-[53px] text-white flex items-center justify-center bg-[--color-secondary] py-2 text-xl mb-10">
              {item.title}
            </div>
          </div>
        </div>
      </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderAbout;
