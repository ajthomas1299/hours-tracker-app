import Layout from "components/layout/Layout"
import AddTask from "components/webPages/addTask/AddTask"

const addTask = () => {
  return (
    <Layout
      title="Add Task | TrackerApp"
      description="Add and view tasks you have."
      ogImage=""
      url=""
    >
      <AddTask />
    </Layout>
  )
}

export default addTask
