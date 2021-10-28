import Link from 'next/link' 
import { SingleLinks } from 'data/singleLinks'
// import SelectSession from './SelectSession'
// import Search from './Search'
// import SessionOverview from './SessionOverview'

const AddClient = () => {
  const { home, hoursTracker, login } = SingleLinks

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1">
      <header className="w-screen text-white font-semibold  items-center h-12 bg-black">
        <nav className="h-full flex justify-between content-center mx-2">
            <button 
                className="text-xl border-white border rounded px-3 self-center" 
                onClick={ () => history.back() }
            >
                Back
            </button>
            <h1 className="text-xl self-center">Add Client</h1>
            <Link href={ home }>
                <a className="text-xl w-20 border-white border rounded px-3 self-center">Home</a>
            </Link>
        </nav>
      </header>
      <main className="">
        
      </main>
      </div>
      <footer className="fixed bottom-0 flex w-screen text-white font-semibold text-xl items-center h-12 bg-black">
          <nav className="w-full flex justify-between mx-2 lg:mx-8">
            <Link href={ hoursTracker }>
                <a className="self-center w-20 border-white border px-2 rounded">Tracker</a>
            </Link>
            <Link href={ login }>
                <a className="self-center w-20 border-white border px-2 rounded">Logout</a>
            </Link>
          </nav>
      </footer>
    </div>
  )
}

export default AddClient


