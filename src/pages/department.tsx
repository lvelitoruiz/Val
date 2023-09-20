import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

import BannerDepart from "../components/BannerDepart";
import TitleFix from "../components/TitleFix";
import InfoDepart from "../components/InfoDepart";

const Department: React.FC<PageProps> = () => {

  return (
    <>
      <Header />
      <section className="pt-28 md:pt-36 lg:sticky top-0">
        <TitleFix extraStyles="md:w-8/12 lg:w-5/12" title="Espacios modernos, para familias modernas" text="Construimos departamentos eco amigables, que ayudan a crear un mejor entorno a la vez que cuidamos el planeta."/>
      </section>

      <section className="relative">
        <BannerDepart />
      </section>

      <section className="bg-white relative pt-20 md:pt-[146px] pb-28">
        <InfoDepart />
      </section>

      <Footer />
    </>
  );
};

export default Department;

export const Head: HeadFC = () => <title>Val - Multifamiliares</title>;
