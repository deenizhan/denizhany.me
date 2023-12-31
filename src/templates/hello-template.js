import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo.js"
import Line from "../components/layout/line/Line.js"
import Socials from "../components/socials/socials.js"
import Welcomer from "../components/welcomer/welcomer"
import Quote from "../components/quote.js"

const IndexPage = () => {
  return (
    <Layout>
      <Welcomer />
      <Socials />
      <Line />
      <Quote />
    </Layout>
  )
}

export default IndexPage
export const Head = () => <Seo title="hej!" />
