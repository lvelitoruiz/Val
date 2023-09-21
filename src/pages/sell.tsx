import React, { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";

import BannerForm from "../components/BannerForm";
import FormSell from "../components/FormSell";

const Sell: React.FC<PageProps> = () => {

  return (
    <>
      <Header />

      <BannerForm imgUrl={"/static/images/sell.jpg"} title={"¿Quieres vender un terreno urbano?"} text={"Buscamos nuevos espacios dentro de la ciudad para desarrollar proyectos inmobiliarios."} />

      <FormSell />

      <Footer />
    </>
  );
};

export default Sell;

export const Head: HeadFC = () => <title>Val - Vender</title>;
