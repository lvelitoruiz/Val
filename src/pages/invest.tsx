import React, { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";

import BannerForm from "../components/BannerForm";
import FormInvest from "../components/FormInvest";

const Invest: React.FC<PageProps> = () => {
  const [userName, setUserName] = useState("");
  const receiveFromChild = (event: any) => {
    setUserName(event);
  };

  return (
    <>
      <Header />

      <BannerForm imgUrl={"/static/images/invest.jpg"} title={"Invierte en el sector inmobiliario y haz crecer tu patrimonio"} text={"A través de Conexa Financial Group, podrás conocer las oportunidades de inversión que te ofrecemos con subyacente inmobiliario."} />

      <FormInvest />

      <Footer />
    </>
  );
};

export default Invest;

export const Head: HeadFC = () => <title>Val - Invierte</title>;
