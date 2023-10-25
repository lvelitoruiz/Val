import { LinkedIn } from "iconoir-react";
import React from "react";

interface ProjectProps {
  imgUrl: string;
  name: string;
  position: string;
  url: string;
}
const Agent: React.FC<ProjectProps> = ({
  imgUrl,
  name,
  position,
  url,
}) => {
  return (
    <div>
      <div className="w-full h-[243px] overflow-hidden">
        <img className="object-cover h-full w-full transition duration-150 ease-out hover:scale-125" src={imgUrl} alt="" />
      </div>
      <div className="flex items-center justify-between min-h-[82px] bg-[#F6F6F6] px-3 gap-4">
        <div>
          <p className="text-[--color-secondary]">{name}</p>
          <p className="text-[--color-secondary] text-sm font-light leading-tight">{position}</p>
        </div>
        <a className="w-[42px] h-[42px] flex items-center justify-center bg-[--color-secondary] rounded-sm" href={url}>
          <LinkedIn color="white" height={24} width={24} />
        </a>
      </div>
    </div>
  );
};

export default Agent;