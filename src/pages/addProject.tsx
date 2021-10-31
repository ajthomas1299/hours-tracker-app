import Layout from "components/layout/Layout"
import AddProject from "components/webPages/addProject/AddProject"

const addProject = () => {
  return (
    <Layout
      title="Add Project | TrackerApp"
      description="Add and view projects you have."
      ogImage=""
      url=""
    >
      <AddProject />
    </Layout>
  )
}

export default addProject
