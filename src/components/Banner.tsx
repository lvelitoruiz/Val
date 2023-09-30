import {
  City,
  NavArrowRight,
  NavArrowLeft,
  Planimetry,
  Farm,
  LotOfCash,
  HomeSale,
  PiggyBank,
  ArrowTr,
} from "iconoir-react";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SliderBanner from "./SliderBanner";

const Banner = () => {
  const data = [
    {
      title: "Espacios modernos, para familias modernas",
      imgUrl: "/static/images/top-life-2.jpg",
      titleMobile: "Viviendas multifamiliares",
      imgAlt: "",
      paragraph:
        "Construimos departamentos eco amigables, que ayudan a crear un mejor entorno a la vez que cuidamos el planeta.",
      nameProyect: "Top Life",
      btn: "VER NUESTROS PROYECTOS",
      projects: true,
    },
    {
      title: "Urbanizamos lotes para crear mejores ciudades",
      imgUrl: "/static/images/oxa.jpg",
      imgAlt: "",
      titleMobile: "Lotes Urbanos",
      paragraph:
        "Queremos que las ciudades crezcan ordenadamente y diseñamos proyectos de lotes urbanos para mejorar la calidad de vida de las personas.",
      nameProyect: "Oxapampa",
      btn: "VER NUESTROS PROYECTOS",
      projects: true,
    },
    {
      title:
        "Transformamos bancos de terrenos en oportunidades para la agro industria",
      imgUrl: "/static/images/agro.jpg",
      imgAlt: "",
      titleMobile: "Desarrollo Agroindustrial",
      paragraph:
        "Creamos nuevos negocios a partir de explotar terrenos de alto valor agrícola en el interior del país.",
      nameProyect: "Proyecto Olmos - Fundo San Isidro",
      btn: "VER NUESTROS PROYECTOS",
      projects: true,
    },
    {
      title:
        "Administramos bancos de terrenos en el interior del país para crear valor futuro",
      imgUrl: "/static/images/bank.jpg",
      imgAlt: "",
      titleMobile: "Banco de terrenos",
      paragraph: "2,500 hectáreas forman parte de nuestro portafolio.",
      nameProyect: "",
      btn: "MÁS INFORMACIÓN",
      projects: false,
    },
    {
      title: "¿Quieres vender un terreno urbano?",
      imgUrl: "/static/images/sell.jpg",
      imgAlt: "",
      titleMobile: "Vende tu terreno",
      paragraph:
        "Buscamos nuevos espacios dentro de la ciudad para desarrollar proyectos inmobiliarios.",
      nameProyect: "",
      btn: "MÁS INFORMACIÓN",
      projects: false,
    },
    {
      title: "Somos parte de Conexa Financial Group",
      imgUrl: "/static/images/invest.jpg",
      imgAlt: "",
      titleMobile: "¿Quieres invertir?",
      paragraph:
        "Invierte con nosotros y genera rentabilidad a partir de productos inmobiliarios.",
      nameProyect: "",
      btn: "MÁS INFORMACIÓN",
      projects: false,
    },
  ];

  return (
    <div className="pt-20 lg:h-screen">
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
        onSwiper={(event) => console.log("working ", event)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderBanner
              title={item.title}
              imgUrl={item.imgUrl}
              paragraph={item.paragraph}
              titleMobile={item.titleMobile}
              nameProyect={item.nameProyect}
              btn={item.btn}
              projects={item.projects}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-16 left-0 right-0 w-full z-[2] hidden md:block">
        <div className="mx-8 bg-[#313E48] h-[248px] flex">
          <div className="min-w-[128px] flex flex-col bg-white">
            <div className="w-full h-[50%] cursor-pointer flex items-center justify-center border-b border-[--border-ligth]">
              <NavArrowRight color="#313E48" height={30} width={30} />
            </div>
            <div className="w-full h-[50%] cursor-pointer flex items-center justify-center">
              <NavArrowLeft color="#313E48" height={30} width={30} />
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex overflow-auto">
              <div className="flex flex-col p-10 h-[248px] min-w-[50%] lg:min-w-[25%] 2xl:min-w-[20%] relative bg-[--color-primary] cursor-pointer">
                <City color="#fff" height={38} width={38} />
                <h4 className="uppercase text-[20px] text-white leading-none pt-5 pb-2">
                  Viviendas multifamiliares
                </h4>
                <p className="text-sm text-white font-light">
                  Encuentra aquí tu próximo departamento.
                </p>
                <div className="absolute right-0 top-0 w-[42px] h-[42px] bg-black/30 flex items-center justify-center cursor-pointer">
                  <ArrowTr color="#fff" height={20} width={20} />
                </div>
              </div>
              <div className="flex flex-col p-10 h-[248px] min-w-[50%] lg:min-w-[25%] 2xl:min-w-[20%] relative cursor-pointer 2xl:pb-0">
                <Planimetry color="#fff" height={38} width={38} />
                <h4 className="uppercase text-[20px] text-white leading-none pt-5 pb-2">
                  Lotes Urbanos
                </h4>
                <p className="text-sm text-white font-light">
                  Espacios dentro de la ciudad listos para que construyas tu
                  casa o negocio.
                </p>
                <div className="absolute right-0 top-0 w-[42px] h-[42px] bg-black/30 flex items-center justify-center cursor-pointer">
                  <ArrowTr color="#fff" height={20} width={20} />
                </div>
              </div>
              <div className="flex flex-col p-10 h-[248px] min-w-[50%] lg:min-w-[25%] 2xl:min-w-[20%] relative cursor-pointer 2xl:pb-0">
                <Farm color="#fff" height={38} width={38} />
                <h4 className="uppercase text-[20px] text-white leading-none pt-5 pb-2">
                  Desarrollo Agroindustrial
                </h4>
                <p className="text-sm text-white font-light">
                  Rentabilizamos nuestros terrenos para crear nuevos espacios de
                  cultivos.
                </p>
                <div className="absolute right-0 top-0 w-[42px] h-[42px] bg-black/30 flex items-center justify-center cursor-pointer">
                  <ArrowTr color="#fff" height={20} width={20} />
                </div>
              </div>
              <div className="flex flex-col p-10 h-[248px] min-w-[50%] lg:min-w-[25%] 2xl:min-w-[20%] relative cursor-pointer 2xl:pb-0">
                <PiggyBank color="#fff" height={38} width={38} />
                <h4 className="uppercase text-[20px] text-white leading-none pt-5 pb-2">
                  BANCO DE TERRENOS
                </h4>
                <p className="text-sm text-white font-light">
                  Buscamos el retorno de inversión sobre terrenos de alto valor.
                </p>
                <div className="absolute right-0 top-0 w-[42px] h-[42px] bg-black/30 flex items-center justify-center cursor-pointer">
                  <ArrowTr color="#fff" height={20} width={20} />
                </div>
              </div>
              <div className="flex flex-col p-10 h-[248px] min-w-[50%] lg:min-w-[25%] 2xl:min-w-[20%] relative cursor-pointer 2xl:pb-0">
                <HomeSale color="#fff" height={38} width={38} />
                <h4 className="uppercase text-[20px] text-white leading-none pt-5 pb-2">
                  VENDE TU TERRENO
                </h4>
                <p className="text-sm text-white font-light">
                  Véndenos tu terreno a nosotros.
                </p>
                <div className="absolute right-0 top-0 w-[42px] h-[42px] bg-black/30 flex items-center justify-center cursor-pointer">
                  <ArrowTr color="#fff" height={20} width={20} />
                </div>
              </div>
              <div className="flex flex-col p-10 h-[248px] min-w-[50%] lg:min-w-[25%] 2xl:min-w-[20%] relative cursor-pointer 2xl:pb-0">
                <LotOfCash color="#fff" height={38} width={38} />
                <h4 className="uppercase text-[20px] text-white leading-none pt-5 pb-2">
                  ¿QUIERES INVERTIR?
                </h4>
                <p className="text-sm text-white font-light">
                  Empieza a invertir en el sector inmobiliario a través de
                  nuestro fondo de inversión.
                </p>
                <div className="absolute right-0 top-0 w-[42px] h-[42px] bg-black/30 flex items-center justify-center cursor-pointer">
                  <ArrowTr color="#fff" height={20} width={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
