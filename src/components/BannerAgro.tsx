import React from "react";

interface ProjectProps {
  imgUrl: string;
  title: string;
}
const BannerAgro: React.FC<ProjectProps> = ({
  imgUrl,
  title
}) => {
  return (
    <div className="h-[509px] md:h-[790px] relative">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="relative h-full w-full before:content-[''] before:bg-[rgba(49,62,72,0.30)] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
          <img
            className="w-full h-full object-cover rounded-t"
            src={imgUrl}
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto relative h-[509px] md:h-[790px] flex items-end">
        <p className="pb-20 text-white text-[30px] lg:text-[50px] px-6 lg:px-0 lg:w-7/12 leading-none font-light">
          {title}
        </p>
      </div>
    </div>
  );
};

export default BannerAgro;
