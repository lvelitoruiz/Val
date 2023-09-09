import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Proyects from "../components/Proyects"
import Footer from "../components/Footer"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <><><><Header /><Banner /></><div className="container mx-auto py-20 md:py-28 px-10 lg:px-0">
      <Proyects />
    </div></><Footer /></>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Val</title>
