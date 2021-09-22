import Layout from "components/layout/Layout"
import Pomodoro from "components/webPages/pomodoro/Pomodoro"

const pomodoro = () => {
  return (
    <Layout
      title="Pomodoro Timer | TrackerApp"
      description="Timer that helps you to stay productive."
      ogImage=""
      url=""
      showHeader={ false }
      showFooter={ false } 
    >
      <Pomodoro />
    </Layout>
  )
}

export default pomodoro
