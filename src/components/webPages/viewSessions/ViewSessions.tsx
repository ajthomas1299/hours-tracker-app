import { Links } from 'data/buttons/Buttons'
import SelectSession from './SelectSession'
import Search from './Search'
import SessionOverview from './SessionOverview'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

const ViewSessions = () => {
  const { reportsLink } = Links

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1">
        <Header>Sessions</Header>
      <main className="">
        <SelectSession />
        <Search />
        <SessionOverview />
      </main>
      </div>
      <Footer>{ reportsLink }</Footer>
    </div>
  )
}

export default ViewSessions
