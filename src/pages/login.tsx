import Layout from "components/layout/Layout"
import LoginPage from "components/webPages/login/Login"

const Login = () => {
  return (
    <Layout
      title="Login | TrackerApp"
      description=""
      ogImage=""
      url=""
      showHeader={ false }
      showFooter={ false }
      
    >
      <LoginPage />
    </Layout>
  )
}

export default Login