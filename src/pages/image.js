import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Images from "../components/image"
import Footer from '../components/Footer'

const Image = () => {
  return (
    <Layout>
      <Seo title="Images" />
      <Images />
      <Footer />
    </Layout>
  )
}

export default Image
