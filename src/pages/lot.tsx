import React, { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import lotPlano from "../images/lot-plano.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Check } from "iconoir-react";
import TitleFix from "../components/TitleFix";
import BannerLot from "../components/BannerLot";
import InfoLot from "../components/InfoLot";
import Location from "../components/Location";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

const Lot: React.FC<PageProps> = () => {
  const [userName, setUserName] = useState("");
  const receiveFromChild = (event: any) => {
    setUserName(event);
  };

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

      <section className="py-20 md:py-24 relative bg-white">
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
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[326px]">
                <img className="w-full h-full object-cover" src={item.imgUrl} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="py-20 md:py-24 relative bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">
            Distribución de lotes
          </h2>
          <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
            <div className="col-span-10 md:col-span-12 lg:col-span-6">
              <img className="w-full" src={lotPlano} alt="" />
            </div>
            <div className="col-span-10 md:col-span-12 lg:col-span-6">
              <div className="lg:pl-10">
                <div className="pb-8">
                  <h3 className="text-[20px] lg:text-[26px] text-[--color-secondary] leading-none pb-1">Cotiza aquí tu nuevo lote</h3>
                  <p className="text-[--color-secondary] font-light">Déjanos tus datos y pronto un asesor se contactará contigo.</p>
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
                      placeholder={"Teléfono"}
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
                      placeholder={"Tipo de documento"}
                      name={"tutor"}
                      onValueChange={receiveFromChild}
                      type="text"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <Input
                      texto={""}
                      placeholder={"Nro. de documentos"}
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

export default Lot;

export const Head: HeadFC = () => <title>Val - Lotes</title>;
