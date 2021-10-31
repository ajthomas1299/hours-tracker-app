import Layout from "components/layout/Layout"
import ViewSessions from "components/webPages/viewSessions/ViewSessions"

const viewSessions = () => {
  return (
    <Layout
      title="View Sessions | TrackerApp"
      description="Overview of the sessions."
      ogImage=""
      url=""
    >
      <ViewSessions />
    </Layout>
  )
}

export default viewSessions
