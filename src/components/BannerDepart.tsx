import React from "react";

import bannerDepartment from "../images/banner-department.jpg";
import logoTopLife from "../images/logo-top-life.svg";

import { LinkedIn } from "iconoir-react";
import Button from "../components/Button";

const BannerDepart = () => {

  const handleCustomClick = (event: string) => {
    console.log("custom click: ", event);
  };
  return (
    <>
      <div className="h-[509px] md:h-[790px] w-full">
        <img
          className="w-full h-full object-cover"
          src={bannerDepartment}
          alt=""
        />
      </div>
      <div className="container mx-auto px-6 lg:px-0">
        <div className="bg-[--gray] w-full lg:h-[168px] mt-[-84px] items-start gap-4 rounded relative flex flex-col md:flex-row lg:items-center md:justify-between p-6 lg:py-0 lg:px-10">
          <img className="h-[50px] lg:h-[96px]" src={logoTopLife} alt="" />
          <div className="flex w-full md:w-fit flex-col md:items-end lg:flex-row lg:items-center gap-5 lg:gap-10">
            <div className="flex flex-col md:flex-row lg:items-center gap-2 md:gap-10">
              <div className="flex items-center gap-4">
                <LinkedIn color="#313E48" height={24} width={24} />
                <div className="lg:max-w-[146px]">
                  <p className="text-sm text-[--color-secondary] font-light">
                    <span className="font-normal">Av. Juan de Aliaga,</span>{" "}
                    Magdalena del Mar
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <LinkedIn color="#313E48" height={24} width={24} />
                <div className="lg:max-w-[146px]">
                  <p className="text-sm text-[--color-secondary] font-light">
                    <span className="font-normal">1, 2, 3</span> dorm.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <LinkedIn color="#313E48" height={24} width={24} />
                <div className="lg:max-w-[146px]">
                  <p className="text-sm text-[--color-secondary] font-light">
                    <span className="font-normal">Areas desde</span> 46 m2
                  </p>
                </div>
              </div>
            </div>
            <Button
              label={"VER PROYECTO"}
              extraStyles="btn-primary px-10 h-[56px]"
              customClick={(event) => handleCustomClick(event)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerDepart;
