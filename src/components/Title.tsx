import React from "react";

interface ProjectProps {
  title: string;
  paragraph: string;
}

const Title: React.FC<ProjectProps> = ({
  title,
  paragraph
}) => {
  return (
    <><h1 className="pb-4 leading-none text-[--color-secondary] text-center text-[30px] lg:text-[44px] uppercase">{title}</h1><p className="text-center font-light text-[--color-secondary]"><span className="font-normal">{paragraph}</span></p></>
  );
};

export default Title;
