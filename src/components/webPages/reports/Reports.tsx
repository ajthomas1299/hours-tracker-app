import Header from 'components/layout/Header' 
import Footer from 'components/layout/Footer'
import { Links } from 'data/buttons/Buttons'

const Reports = () => {
  const { viewSessionsLink } = Links

  return (
    <div className="h-screen flex flex-col">
      <Header>Reports</Header>
        <main className="flex-1">

        </main>
      <Footer>{ viewSessionsLink }</Footer>
    </div>
  )
}

export default Reports
