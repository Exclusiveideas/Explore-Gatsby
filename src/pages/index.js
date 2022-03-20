import * as React from "react"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection";
import Layout from "../components/layout";
import Image from "../components/image";
import Footer from "../components/Footer";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Image />
    <Footer />
  </Layout>
)

export default IndexPage
