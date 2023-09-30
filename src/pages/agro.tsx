import React, { useState } from "react";
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
import Input from "../components/Input";
import { Check } from "iconoir-react";
import TextArea from "../components/TextArea";
import Button from "../components/Button";


const Agro: React.FC<PageProps> = () => {
  const [userName, setUserName] = useState("");
  const receiveFromChild = (event: any) => {
    setUserName(event);
  };

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
      imgUrl: "/static/images/olmos-1.jpeg",
    },
    {
      imgUrl: "/static/images/olmos-2.jpeg",
    },
    {
      imgUrl: "/static/images/olmos-4.jpeg",
    },
    {
      imgUrl: "/static/images/olmos-5.jpeg",
    },
    {
      imgUrl: "/static/images/olmos-6.jpeg",
    },
    {
      imgUrl: "/static/images/olmos-7.jpeg",
    },
    {
      imgUrl: "/static/images/olmos-8.jpeg",
    },
    {
      imgUrl: "/static/images/olmos-9.jpeg",
    },
    {
      imgUrl: "/static/images/olmos-10.jpeg",
    },
    {
      imgUrl: "/static/images/olmos-11.jpeg",
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

      <section className="py-20 md:py-24 relative bg-white">
        <InfoAgro />
      </section>

      <VideoAgro />

      <section className="py-20 md:py-24 bg-[--gray] relative">
        <DetailAgro />
      </section>

      <section className="py-20 md:py-24 relative bg-white">
        <Location
          title={"Ubicación del Proyecto"}
          location={"Olmos - Fundo San Isidro"}
          img={"/static/images/map.jpg"}
        />
      </section>

      <section className="py-20 md:py-24 relative bg-[--color-secondary]">
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

      <section className="py-20 md:py-24 relative bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
            <div className="col-span-10 md:col-span-12 lg:col-span-7">
              <img
                className="w-full h-[490px] object-cover"
                src={agro11}
                alt=""
              />
            </div>
            <div className="col-span-10 md:col-span-12 lg:col-span-5">
            <div className="lg:pl-10">
                <div className="pb-8">
                  <h3 className="text-[20px] lg:text-[26px] text-[--color-secondary] leading-none pb-1">Renta o compra este terreno para tu negocio agro industrial:</h3>
                </div>
                <form className="grid grid-cols-6 md:grid-cols-6 gap-2" action="">
                  <div className="col-span-6 md:col-span-3">
                    <Input
                      texto={""}
                      placeholder={"Nombres"}
                      name={"tutor"}
                      onValueChange={receiveFromChild}
                      type="text"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <Input
                      texto={""}
                      placeholder={"Apellidos"}
                      name={"tutor"}
                      onValueChange={receiveFromChild}
                      type="text"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <Input
                      texto={""}
                      placeholder={"Correo electrónico"}
                      name={"tutor"}
                      onValueChange={receiveFromChild}
                      type="text"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <Input
                      texto={""}
                      placeholder={"Ruc de la empresa"}
                      name={"tutor"}
                      onValueChange={receiveFromChild}
                      type="text"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-6">
                    <TextArea
                      texto={""}
                      placeholder={"MENSAJE"}
                      name={""}
                      onValueChange={receiveFromChild}
                    />
                  </div>
                  <div className="col-span-6 md:col-span-6">
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="hidden" />
                        <div className="min-w-[24px] h-6 border-2 border-[--color-primary] rounded flex items-center justify-center hover:border-[--color-primary] transition duration-300">
                          <div className="hidden icon">
                            <Check
                              strokeWidth={"3"}
                              className="font-bold"
                              color="#009877"
                              height={20}
                              width={20}
                            />
                          </div>
                        </div>
                        <span className="ml-2 text-[#9B8F86]">
                          He leído y acepto la Políticas de Privacidad de Datos
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-6 pt-6">
                    <Button
                      extraStyles="w-full md:w-[205px] h-[50px] btn-primary"
                      label={"enviar"}
                      customClick={(event) => console.log(event)}
                    />
                  </div>
                </form>
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
