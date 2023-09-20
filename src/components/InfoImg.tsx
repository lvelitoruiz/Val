import React from "react";

interface ProjectProps {
  title: string;
  paragraph: string;
  paragraphTwo?: string;
  img: string;
}

const InfoImg: React.FC<ProjectProps> = ({
  title,
  paragraph,
  paragraphTwo,
  img,
}) => {
  return (
    <>
      <div className="col-span-10 md:col-span-12 lg:col-span-4 h-full">
        <h2 className="text-[30px] lg:text-[44px] text-[--color-secondary] leading-none pb-8">
          {title}
        </h2>
        <p className="text-[--color-secondary] font-light pb-4">{paragraph}</p>
        <p className="text-[--color-secondary] font-light">{paragraphTwo}</p>
      </div>
      <div className="col-span-10 md:col-span-12 lg:col-span-8 h-full">
        <div className="w-full h-[300px] lg:h-[438px] overflow-hidden rounded">
          <img
            className="object-cover h-full w-full transition duration-150 ease-out hover:scale-125"
            src={img}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default InfoImg;
