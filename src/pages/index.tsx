import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="container mx-auto py-20 md:py-28 px-6 lg:px-0">
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Val</title>;
