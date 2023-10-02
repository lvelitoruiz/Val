import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import InfoMap from "../components/InfoMap";

import bannerBank from "../images/banner-bank.jpg"
import DetailBank from "../components/DetailBank";
import AOS from 'aos';

import 'aos/dist/aos.css';
import { useEffect } from "react";

const Bank: React.FC<PageProps> = () => {
  
  useEffect( () => {
    AOS.init();
  },[])

  return (
    <>
      <Header />
      <section className="pb-20 pt-28 md:pb-28 md:pt-36 bg-white relative">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="md:w-8/12 lg:w-10/12 mx-auto mb-14">
            <Title
              title={"Administramos bancos de terrenos en el interior del país para crear valor futuro"}
              paragraph={
                "1,818 hectáreas forman parte de nuestro portafolio."
              }
            />
          </div>
          <div className="flex gap-10 flex-col lg:flex-row items-center justify-between" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
            <InfoMap
              paragraphTwo={
                "Este patrimonio nos permite crear valor futuro para potenciales proyectos agro industriales y respaldar nuestra actividad comercial en activos de gran valor."
              }
              title={"Conoce más sobre nuestro Land Banking"}
              paragraph={
                "VAL Desarrollos Inmobiliarios administra y gestiona 1,818 hectáreas de terrenos en diferentes regiones de nuestro país."
              }
              map={"/static/images/map-bank.svg"}
              extraStyles="md:min-w-[300px]"
            />
          </div>
        </div>
      </section>

      <section className="h-[400px] lg:h-[600px] relative flex items-end justify-center">
        <img className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover" src={bannerBank} alt="" />
        <div className="container mx-auto relative pb-20 px-6 lg:px-0">
          <p className="text-[30px] lg:text-[56px] text-white leading-tight w-full lg:w-8/12">Contamos con un land banking con más de 1,818 hectáreas de terreno en el interior del país</p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[--gray] relative">
        <DetailBank />
      </section>

      <Footer />
    </>
  );
};

export default Bank;

export const Head: HeadFC = () => <title>Val - Banco</title>;
