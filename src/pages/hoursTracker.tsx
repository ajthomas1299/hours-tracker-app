import Layout from "components/layout/Layout"
import HoursTracker from "components/webPages/hoursTracker/HoursTracker"

const hoursTracker = () => {
  return (
    <Layout
      title="Hour Tracker | TrackerApp"
      description="Tracking how many hours the activity takes."
      ogImage=""
      url=""
      showHeader={ false }
      showFooter={ false } 
    >
      <HoursTracker />
    </Layout>
  )
}

export default hoursTracker
