import React from "react";

interface ProjectProps {
  title: string;
  text: string;
  extraStyles?: string;
}

const TitleFix: React.FC<ProjectProps> = ({
  title,
  text,
  extraStyles
}) => {
  return (
    <div>
      <div className={`w-full px-6 lg:px-0 mx-auto mb-14 ${extraStyles}`}>
        <h1 className="pb-4 leading-tight text-[--color-secondary] text-center text-[30px] lg:text-[44px] uppercase">
          {title}
        </h1>
        <p className="text-center font-light text-[--color-secondary]">
          <span className="font-normal">
            {text}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TitleFix;
