import React, { useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Agent from "../components/Agent";
import SliderAbout from "../components/SliderAbout";
import Title from "../components/Title";
import InfoMap from "../components/InfoMap";
import InfoImg from "../components/InfoImg";
import AboutValue from "../components/AboutValue";
import AboutConexa from "../components/AboutConexa";
import AOS from 'aos';

import 'aos/dist/aos.css';

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
      name: "Pablo Delgado",
      position: "Director",
    },
    {
      imageUrl: "/static/images/agro.jpg",
      name: "Sergio Barboza  ",
      position: "Director",
    },
  ];

  useEffect(() => {
    AOS.init();
  },[]);
  
  return (
    <>
      <Header />
      <section className="pt-20 lg:sticky lg:top-0">
        <SliderAbout />
      </section>

      <section className="py-20 md:py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="md:w-8/12 lg:w-5/12 mx-auto mb-14">
            <Title
              title={"Conócenos"}
              paragraph={
                "VAL Desarrollos Inmobiliarios S.A. es la empresa inmobiliaria del grupo empresarial CONEXA FINANCIAL GROUP"
              }
            />
          </div>
          <div className="flex gap-10 flex-col lg:flex-row items-center justify-between" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
            <InfoMap
              paragraphTwo={
                "Hoy nos enfocamos en proyectos de venta inmobiliaria, en segmentos de vivienda multifamiliar, lotes, comercio y agro industrial."
              }
              title={"Nuestra presencia en el interior del país"}
              paragraph={
                "VAL Desarrollos inmobiliarios S.A. posee activos inmobiliarios que suman aproximadamente 1,818 hectáreas entre Lima, Chiclayo, Oxapampa y San Martín, cuyo valor en conjunto superan los USD 6 MM."
              }
              map={"/static/images/map-about.svg"}
              extraStyles="md:min-w-[483px]"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="mx-auto mb-14">
            <h2 className="pb-4 leading-none text-[--color-secondary] text-center text-[30px] lg:text-[44px]">
              Conoce a nuestro equipo
            </h2>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-5">
            {data.map((item, index) => (
              <div className="w-full md:w-[48%] lg:w-full" key={index}>
                <Agent
                  imgUrl={item.imageUrl}
                  name={item.name}
                  position={item.position}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-28 pb-[280px] bg-[--gray] relative">
        <div className="container mx-auto px-6 lg:px-0" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
          <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
            <InfoImg
              title={"Nuestro propósito"}
              paragraph={
                "Promover proyectos de vivienda y agro industriales que respeten el medio ambiente y que mejoren la calidad de vida."
              }
              img={"/static/images/about.jpg"}
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 lg:px-0 relative">
        <div className="container mx-auto relative">
          <AboutValue />
        </div>
      </section>

      <section className="bg-white relative pt-[326px]">
        <AboutConexa />
      </section>
      <Footer />
    </>
  );
};

export default About;

export const Head: HeadFC = () => <title>Val - Nosotros</title>;
