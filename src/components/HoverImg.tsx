import React, { useEffect } from "react";
import AOS from 'aos';

import 'aos/dist/aos.css';
interface ProjectProps {
  imgUrl: string;
  info: string;
  imgStyles?: string;
  blockStyles?: string;
}
const Agent: React.FC<ProjectProps> = ({ imgUrl, info, imgStyles, blockStyles }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" className={`relative ${blockStyles}`}>
      <div className={`relative ${imgStyles}`}>
        <img className="w-full h-full object-cover rounded" src={imgUrl} alt="" />
        <div className="support-item rounded absolute top-0 left-0 right-0 bottom-0 py-4 px-[25px] lg:px-[26px] overflow-hidden lg:py-[32px] flex flex-col items-start justify-end cursor-pointer">
          <div className="support-item--text">
            <div className="support-item--paragraph">
              <p className="text-white font-light">{info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
