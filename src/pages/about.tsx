import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Agent from "../components/Agent";
import SliderAbout from "../components/SliderAbout";
import Title from "../components/Title";
import InfoMap from "../components/InfoMap";
import InfoImg from "../components/InfoImg";
import AboutValue from "../components/AboutValue";
import AboutConexa from "../components/AboutConexa";
import AOS from 'aos';

import 'aos/dist/aos.css';
import { processInfo } from "../utils/processInfo";

const About: React.FC<PageProps> = () => {
  const [dataAbout, setData] = useState<any>(null);
  const [team, setTeam] = useState<any>(null);

  const getProjectInfo = async () => {
    const dataResponse: any = await processInfo("abouts");

    console.log('getting the info: ', dataResponse);

    const dataFormatted = dataResponse.data.map((item: any) => ({
      title: item.attributes.title,
      text: item.attributes.subtitle,
      infotitle: item.attributes.infotitle,
      paragraph: item.attributes.paragraph,
      paragraph2: item.attributes.paragraph2,
      teamtitle: item.attributes.teamtitle,
      infomap: item.attributes.infomap.data.attributes.url,
      team: item.attributes.team,
      imgtitle: item.attributes.imgtitle,
      imgparagraph: item.attributes.imgparagraph,
      infopic: item.attributes.infopic.data.attributes.url,
      values: item.attributes.aboutvalue.data,
      aboutitle: item.attributes.abouttitle,
      aboutparagraph: item.attributes.aboutparagraph,
      aboutimage: item.attributes.aboutimage.data.attributes.url,
      aboutconoce: item.attributes.aboutconoce,
      // imgtitle: item.attributes.imgtitle,
      // imgtitle: item.attributes.imgtitle,
    }))


    const teamdata = dataFormatted[0].team;

    dataResponse.data[0].attributes.teamfotos.data.map( (item: any, index: number) => {
      teamdata[index].imageUrl = item.attributes.url;
    })

    setData(dataFormatted[0]);
    setTeam(teamdata);
  }

  useEffect(() => {
    AOS.init();
    getProjectInfo();
  }, []);

  // useEffect(() => {
  //   console.log(team);
  // }, [team]);

  return (
    <>
      <Header />
      {
        dataAbout !== null && dataAbout !== undefined && (
          <>
            <section className="pt-20 lg:sticky lg:top-0">
              <SliderAbout />
            </section>

            <section className="py-20 md:py-24 bg-white relative">
              <div className="container mx-auto px-6 lg:px-0">
                <div className="md:w-8/12 lg:w-5/12 mx-auto mb-14">
                  <Title
                    title={dataAbout.title}
                    paragraph={dataAbout.subtitle}
                  />
                </div>
                <div className="flex gap-10 flex-col lg:flex-row items-center justify-between" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
                  <InfoMap
                    paragraphTwo={dataAbout.paragraph2}
                    title={dataAbout.infotitle}
                    paragraph={dataAbout.paragraph}
                    map={dataAbout.infomap}
                    extraStyles="md:min-w-[483px]"
                  />
                </div>
              </div>
            </section>

            <section className="py-20 md:py-24 bg-white relative">
              <div className="container mx-auto px-6 lg:px-0">
                <div className="mx-auto mb-14">
                  <h2 className="pb-4 leading-none text-[--color-secondary] text-center text-[30px] lg:text-[44px]">
                    {dataAbout.teamtitle}
                  </h2>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-5">
                  {team.map((item: any, index: number) => (
                    <div className="w-full md:w-[48%] lg:w-full" key={index}>
                      <Agent
                        imgUrl={item.imageUrl}
                        name={item.name}
                        position={item.position}
                        url={item.url}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="pt-20 md:pt-28 pb-[280px] bg-[--gray] relative">
              <div className="container mx-auto px-6 lg:px-0" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
                <div className="grid grid-cols-10 md:grid-cols-12 gap-10">
                  <InfoImg
                    title={dataAbout.imgtitle}
                    paragraph={dataAbout.imgparagraph}
                    img={dataAbout.infopic}
                  />
                </div>
              </div>
            </section>

            <section className="bg-white px-6 lg:px-0 relative">
              <div className="container mx-auto relative">
                <AboutValue values={dataAbout.values} />
              </div>
            </section>

            <section className="bg-white relative pt-[326px]">
              <AboutConexa data={dataAbout} />
            </section>
          </>
        )
      }
      <Footer />
    </>
  );
};

export default About;

export const Head: HeadFC = () => <title>Val - Nosotros</title>;
