import Layout from "components/layout/Layout"
import AddClient from "components/webPages/addClient/AddClient"

const addClient = () => {
  return (
    <Layout
      title="Add Client | TrackerApp"
      description="Add and view clients you have."
      ogImage=""
      url=""
    >
      <AddClient />
    </Layout>
  )
}

export default addClient
