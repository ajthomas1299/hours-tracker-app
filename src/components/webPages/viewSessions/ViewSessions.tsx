import Link from 'next/link' 
import { SingleLinks } from 'data/singleLinks'
import SelectSession from './SelectSession'
import Search from './Search'
import SessionOverview from './SessionOverview'

const ViewSessions = () => {
  const { home, reports, login } = SingleLinks

  return (
    <div className="h-screen flex flex-col">
      <header className="w-screen text-white font-semibold text-xl items-center h-12 bg-black">
        <nav className="h-full flex justify-between content-center mx-4 lg:mx-8">
      <button 
        className="border-white border rounded px-3 self-center" 
        onClick={ () => history.back() }
      >
        Back
      </button>
      <h1 className="self-center">Sessions</h1>
      <Link href={ home }>
        <a className="self-center border-white border px-3 rounded">Home</a>
      </Link>
      </nav>
      </header>
      <main className="flex-1">
        <SelectSession />
        <Search />
        <SessionOverview />
      </main>
        <footer className="flex w-screen text-white font-semibold text-xl items-center h-12 bg-black">
          <nav className="w-full flex justify-between mx-4 lg:mx-8">
          <Link href={ reports }>
            <a className="self-center border-white border px-3 rounded">Report</a>
          </Link>
          <Link href={ login }>
            <a className="self-center border-white border px-3 rounded">Log out</a>
          </Link>
          </nav>
        </footer>

    </div>
  )
}

export default ViewSessions
