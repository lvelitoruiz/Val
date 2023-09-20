import React from "react";

import { Play } from "iconoir-react";
import urlImg from "../images/agro-13.jpg";


const VideoAgro = () => {
  return (
    <>
    <div className="w-full h-[400px] lg:h-[600px] relative">
      <img className="w-full h-full object-cover" src={urlImg} alt="" />
      <button className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[88px] h-[88px] bg-[#231F20] rounded-full opacity-80 flex items-center justify-center">
        <Play color="#ffffff" height={40} width={40} />
      </button>
    </div>
    </>
  );
};

export default VideoAgro;
