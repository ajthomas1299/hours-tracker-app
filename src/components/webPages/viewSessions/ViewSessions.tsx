import { Links, Buttons } from 'data/buttons/Buttons'
import SelectSession from './SelectSession'
import Search from './Search'
import SessionOverview from './SessionOverview'

const ViewSessions = () => {
  const { homeLink, reportsLink, loginLink } = Links
  const { backBtn } = Buttons

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1">
      <header className="w-screen text-white font-semibold text-xl items-center h-12 bg-black">
        <nav className="h-full flex justify-between content-center mx-4 lg:mx-8">
           { backBtn }
          <h1 className="self-center">Sessions</h1>
           { homeLink }
        </nav>
      </header>
      <main className="">
        <SelectSession />
        <Search />
        <SessionOverview />
      </main>
      </div>
        <footer className="flex w-screen text-white font-semibold text-xl items-center h-12 bg-black">
          <nav className="w-full flex justify-between mx-4 lg:mx-8">
            { reportsLink }
            { loginLink }
          </nav>
        </footer>
    </div>
  )
}

export default ViewSessions
