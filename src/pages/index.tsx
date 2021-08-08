import Layout from "components/layout/Layout"
import Homepage from "components/webPages/index/Index"

const Home = () => {
  return (
    <Layout
      title="Main | TrackerApp"
      description="Information about the Tracker App."
      ogImage=""
      url=""
      showHeader={ true }
      showFooter={ true }
      
    >
      <Homepage />
    </Layout>
  )
}

export default Home
