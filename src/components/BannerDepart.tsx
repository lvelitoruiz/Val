import React from "react";

import { LinkedIn } from "iconoir-react";
import Button from "../components/Button";


const BannerDepart = ( objectDepa : any) => {

  const handleCustomClick = (event: string) => {
    console.log("custom click: ", event);
  };
  return (
    <>
      <div className="h-[509px] md:h-[790px] w-full">
        <img
          className="w-full h-full object-cover"
          src={objectDepa.bannerDepartment}
          alt=""
        />
      </div>
      <div className="container mx-auto px-6 lg:px-0">
        <div className="bg-[--gray] w-full lg:h-[168px] mt-[-84px] items-start gap-4 rounded relative flex flex-col md:flex-row lg:items-center md:justify-between p-6 lg:py-0 lg:px-10">
          <img className="h-[50px] lg:h-[96px]" src={objectDepa.logo} alt="" />
          <div className="flex w-full md:w-fit flex-col md:items-end lg:flex-row lg:items-center gap-5 lg:gap-10">
            <div className="flex flex-col md:flex-row lg:items-center gap-2 md:gap-10">
              <div className="flex items-center gap-4">
                <LinkedIn color="#313E48" height={24} width={24} />
                <div className="lg:max-w-[146px]">
                  <p className="text-sm text-[--color-secondary] font-light" dangerouslySetInnerHTML={{ __html: objectDepa.direction }}>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <LinkedIn color="#313E48" height={24} width={24} />
                <div className="lg:max-w-[146px]">
                  <p className="text-sm text-[--color-secondary] font-light" dangerouslySetInnerHTML={{ __html: objectDepa.nocuartos }}>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <LinkedIn color="#313E48" height={24} width={24} />
                <div className="lg:max-w-[146px]">
                  <p className="text-sm text-[--color-secondary] font-light" dangerouslySetInnerHTML={{ __html: objectDepa.area }}>
                  </p>
                </div>
              </div>
            </div>
            <Button
              label={objectDepa.btn}
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
