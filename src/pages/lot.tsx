import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import lotPlano from "../images/lot-plano.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import TitleFix from "../components/TitleFix";
import BannerLot from "../components/BannerLot";
import InfoLot from "../components/InfoLot";
import Location from "../components/Location";

const Lot: React.FC<PageProps> = () => {
  const data = [
    {
      imgUrl: "/static/images/oxa.jpg",
    },
    {
      imgUrl: "/static/images/oxa-2.jpg",
    },
    {
      imgUrl: "/static/images/oxa-4.jpg",
    },
    {
      imgUrl: "/static/images/oxa-5.jpg",
    },
    {
      imgUrl: "/static/images/oxa-6.jpg",
    },
    {
      imgUrl: "/static/images/oxa-7.jpg",
    },
    {
      imgUrl: "/static/images/oxa-8.jpg",
    },
    {
      imgUrl: "/static/images/oxa-9.jpg",
    },
    {
      imgUrl: "/static/images/oxa-10.jpg",
    },
    {
      imgUrl: "/static/images/oxa-11.jpg",
    },
    {
      imgUrl: "/static/images/oxa-12.jpg",
    },
  ];
  return (
    <>
      <Header />
      <section className="pt-28 md:pt-36 lg:sticky top-0">
        <TitleFix
          title="Urbanizamos lotes para crear mejores ciudades"
          text="Queremos que las ciudades crezcan ordenadamente y diseñamos proyectos de lotes urbanos para mejorar la calidad de vida de las personas."
          extraStyles="md:w-8/12 lg:w-5/12"
        />
      </section>

      <section className="relative">
        <BannerLot />
      </section>

      <section className="pt-20 md:pt-28 relative bg-white">
        <InfoLot />
      </section>

      <section className="py-20 md:py-28 relative bg-white">
        <Location
          title={"Ubicación del Proyecto"}
          location={
            "Acércate a nuestra Caseta de Ventas en Jr. Albegrin con Jr. Independencia"
          }
          wsp={true}
          img={"/static/images/map.jpg"}
          nroOne={"949 995 919"}
          nroTwo={"949 995 919"}
          nroThree={"949 995 919"}
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
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[326px]">
                <img className="w-full h-full object-cover" src={item.imgUrl} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="py-20 md:py-28 relative bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">
            Distribución de lotes
          </h2>
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
