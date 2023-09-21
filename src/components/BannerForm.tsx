import React from "react";

interface ProjectProps {
  imgUrl: string;
  title: string;
  text: string;
}
const BannerForm: React.FC<ProjectProps> = ({
  imgUrl,
  title,
  text
}) => {
  return (
    <section className="h-[590px] lg:h-[790px] relative">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="relative h-full w-full before:content-[''] before:bg-[rgba(49,62,72,0.60)] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
          <img
            className="w-full h-full object-cover rounded-t"
            src={imgUrl}
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-0 relative pt-28 md:pt-36">
        <div className="md:w-9/12 lg:w-6/12">
          <h1 className="text-white text-[36px] lg:text-[56px] font-semibold mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-white font-light">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerForm;