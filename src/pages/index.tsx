import Layout from "components/layout/Layout"
import Homepage from "components/webPages/index/Index"

const Home = () => {
  return (
    <Layout
      title="Main Menu | TrackerApp"
      description="Information about the Tracker App."
      ogImage=""
      url=""
      showHeader={ false }
      showFooter={ false } 
    >
      <Homepage />
    </Layout>
  )
}

export default Home
