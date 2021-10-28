import Link from 'next/link' 
import { SingleLinks } from 'data/singleLinks'
import SelectSession from './SelectSession'
import Search from './Search'
import SessionOverview from './SessionOverview'

const ViewSessions = () => {
  const { home, reports, login } = SingleLinks

  return (
    <div className="sessionsContainer mx-auto">
      <header className="w-screen text-white font-semibold  items-center h-12 bg-black">
        <nav className="h-full flex justify-between content-center mx-2">
            <button 
                className="text-xl border-white border rounded px-3 self-center" 
                onClick={ () => history.back() }
            >
                Back
            </button>
            <h1 className="text-xl self-center">Sessions</h1>
            <Link href={ home }>
                <a className="text-xl w-20 border-white border rounded px-3 self-center">Home</a>
            </Link>
        </nav>
      </header>
      
      <main className="flex flex-col mx-auto mt-1">
        <SelectSession />
        <Search />
        <SessionOverview />
      </main>

      <footer className="fixed bottom-0 flex w-screen text-white font-semibold text-xl items-center h-12 bg-black">
        <nav className="w-full flex justify-between mx-2 lg:mx-8">
        <Link href={ reports }>
            <a className="self-center w-20 border-white border px-2 rounded">Report</a>
        </Link>
        <Link href={ login }>
            <a className="self-center w-20 border-white border px-2 rounded">Logout</a>
        </Link>
        </nav>
      </footer>

    </div>
  )
}

export default ViewSessions
