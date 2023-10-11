import React, { useEffect, useState } from "react";

import Button from "../components/Button";
import HoverImg from "./HoverImg";
import { processInfo } from "../utils/processInfo";
import Markdown from "react-markdown";

interface galleryItem {
  imgUrl: string,
  info: string,
  blockStyles: string,
  imgStyles: string,
}


const InfoDepart = ({ infoObject }: any) => {
  const handleCustomClick = (event: string) => {
    console.log("custom click: ", event);
  };

  const [data, setData] = useState<galleryItem[]>([]);

  const getProjectInfo = async () => {
    const dataResponse: any = await processInfo("departmentgalleries");

    const dataFormatted = dataResponse.data.map((item: any) => ({
      info: item.attributes.info,
      imgUrl: item.attributes.image.data.attributes.url,
      blockStyles: item.attributes.blockstyles,
      imgStyles: item.attributes.imgstyles,
    }))

    setData(dataFormatted);
  }

  useEffect(() => {
    getProjectInfo();
  }, []);

  return (
    <>
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-4/12 lg:sticky lg:!top-40">
            <div>
              <div className="pb-10">
                <p className="text-[--color-secondary] font-light">{infoObject.project}</p>
                <h2 className="text-[--color-secondary] text-[30px] lg:text-[44px] uppercase leading-none">
                  {infoObject.infoTitle}
                </h2>
                <p className="text-[--color-secondary] text-xl">
                  {infoObject.infoDirection}
                </p>
              </div>
              <div className="pb-5 text-[--color-secondary] markdown-text">
                {/* <p className="text-[--color-secondary] font-light pb-4">
                  TOP LIFE - Juan de Aliaga es un edificio multifamiliar,
                  ubicado en Magdalena del Mar, de 22 pisos, con azotea y 5
                  sótanos. Ofrecemos 84 departamentos de 1, 2 y 3 dormitorios y
                  sólo 4 departamentos por piso.
                </p>
                <p className="text-[--color-secondary] font-light">
                  Conoce más sobre nuestro nuevo proyecto en etapa de pre
                  lanzamiento.
                </p> */}
                <Markdown>{infoObject.paragraphs}</Markdown>
              </div>
              <Button
                label={"VER PROYECTO"}
                extraStyles="btn-primary px-10 h-[50px]"
                customClick={(event) => handleCustomClick(event)}
              />
            </div>
          </div>
          <div className="w-full lg:w-8/12 lg:pl-10 pt-10 lg:pt-0">
            <div className="grid grid-cols-10 md:grid-cols-6 gap-6">
              {data.map((item, index) => (
                <HoverImg key={index} imgUrl={item.imgUrl} info={item.info} blockStyles={item.blockStyles} imgStyles={item.imgStyles} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDepart;
