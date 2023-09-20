import React from "react";

interface ProjectProps {
  title: string;
  paragraph: string;
  paragraphTwo?: string;
  map: string;
  extraStyles?: string;
}

const InfoMap: React.FC<ProjectProps> = ({
  title,
  paragraph,
  paragraphTwo,
  map,
  extraStyles
}) => {
  return (
    <><div className="w-full lg:w-4/12">
      <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">{title}</h2>
      <p className="text-[--color-secondary] font-light pb-4">{paragraph}</p>
      <p className="text-[--color-secondary] font-light">{paragraphTwo}</p>
    </div><div className="w-full lg:w-6/12">
        <img className={`w-full md:w-fit mx-auto ${extraStyles}`} src={map} alt="" />
      </div></>
  );
};

export default InfoMap;
