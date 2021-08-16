import Layout from "components/layout/Layout"
import SignUpPage from "components/webPages/account/SignUp"

const Login = () => {
  return (
    <Layout
      title="SignUp | TrackerApp"
      description=""
      ogImage=""
      url=""
      showHeader={ false }
      showFooter={ false }
      
    >
      <SignUpPage />
    </Layout>
  )
}

export default Login
