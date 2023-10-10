import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

import BannerDepart from "../components/BannerDepart";
import TitleFix from "../components/TitleFix";
import InfoDepart from "../components/InfoDepart";
import { processInfo } from "../utils/processInfo";

export interface depaItem {
  title: string,
  text: string,
  bannerDepartment: string,
  logo: string,
  direction: string,
  nocuartos: string,
  area: string,
  btn: string,
  link: string,
  project: string,
  infoTitle: string,
  infoDirection: string,
  label: string,
  infolink: string,
  paragraphs: string,
  linkSubscription: string,
}

const Department: React.FC<PageProps> = () => {

  const [data, setData] = useState<depaItem>();

  const getProjectInfo = async () => {
    const dataResponse: any = await processInfo("departments");

    const dataFormatted = dataResponse.data.map((item: any) => ({
      title: item.attributes.title,
      text: item.attributes.text,
      bannerDepartment: item.attributes.bannerdepartment.data.attributes.url,
      logo: item.attributes.logotoplife.data.attributes.url,
      direction: item.attributes.direccion,
      nocuartos: item.attributes.nocuartos,
      area: item.attributes.area,
      btn: item.attributes.btn,
      link: item.attributes.link,
      project: item.attributes.proyecto,
      infoTitle: item.attributes.infotitle,
      infoDirection: item.attributes.infodirection,
      label: item.attributes.label,
      infolink: item.attributes.infolink || "",
      paragraphs: item.attributes.paragraphs,
      linkSubscription: item.attributes.linksuscription || "",
    }))

    setData(dataFormatted[0]);
  }

  useEffect(() => {
    getProjectInfo();
  }, []);

  return (
    <>
      <Header />
      <section className="pt-28 md:pt-36 lg:sticky top-0">
        <TitleFix extraStyles="md:w-8/12 lg:w-5/12" title={data?.title || ""} text={data?.text || ""} />
      </section>

      <section className="relative">
        {
          data !== undefined && <BannerDepart objectDepa={data} />
        }
      </section>

      <section className="bg-white relative pt-20 md:pt-[146px] pb-28">
        {
          data !== undefined && <InfoDepart infoObject={data} />
        }
      </section>

      <Footer />
    </>
  );
};

export default Department;

export const Head: HeadFC = () => <title>Val - Multifamiliares</title>;
