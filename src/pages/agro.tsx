import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Location from "../components/Location";
import TitleFix from "../components/TitleFix";
import BannerAgro from "../components/BannerAgro";
import InfoAgro from "../components/InfoAgro";
import VideoAgro from "../components/VideoAgro";
import DetailAgro from "../components/DetailAgro";

import agro11 from "../images/agro-11.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/effect-fade";


const Agro: React.FC<PageProps> = () => {
  const data = [
    {
      imgUrl: "/static/images/agro-10.jpg",
      title: "Creemos en el potencial agro exportador de nuestro país",
    },
    {
      imgUrl: "/static/images/agro-8.jpg",
      title: "Creemos en el potencial agro exportador de nuestro país",
    },
    {
      imgUrl: "/static/images/agro-5.jpg",
      title: "Creemos en el potencial agro exportador de nuestro país",
    },
  ];

  const gallery = [
    {
      imgUrl: "/static/images/agro-1.jpg",
    },
    {
      imgUrl: "/static/images/agro-2.jpg",
    },
    {
      imgUrl: "/static/images/agro-4.jpg",
    },
    {
      imgUrl: "/static/images/agro-5.jpg",
    },
    {
      imgUrl: "/static/images/agro-6.jpg",
    },
    {
      imgUrl: "/static/images/agro-7.jpg",
    },
    {
      imgUrl: "/static/images/agro-8.jpg",
    },
    {
      imgUrl: "/static/images/agro-9.jpg",
    },
    {
      imgUrl: "/static/images/agro-10.jpg",
    },
    {
      imgUrl: "/static/images/agro-11.jpg",
    },
    {
      imgUrl: "/static/images/agro-3.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section className="pt-28 md:pt-36 lg:sticky top-0">
        <TitleFix
          extraStyles="md:w-10/12 lg:w-8/12"
          title="Transformamos bancos de terrenos en oportunidades para la agro industria"
          text="Creamos nuevos negocios a partir de explotar terrenos de alto valor agrícola en el interior del país."
        />
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
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <BannerAgro imgUrl={item.imgUrl} title={item.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="py-20 md:py-28 relative bg-white">
        <InfoAgro />
      </section>

      <VideoAgro />

      <section className="py-20 md:py-28 bg-[--gray] relative">
        <DetailAgro />
      </section>

      <section className="py-20 md:py-28 relative bg-white">
        <Location
          title={"Ubicación del Proyecto"}
          location={"Olmos - Fundo San Isidro"}
          img={"/static/images/map.jpg"}
        />
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
          {gallery.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[326px]">
                <img
                  className="w-full h-full object-cover"
                  src={item.imgUrl}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="py-20 md:py-28 relative bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
            <div className="col-span-10 md:col-span-12 lg:col-span-6">
              <img
                className="w-full h-[490px] object-cover"
                src={agro11}
                alt=""
              />
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
