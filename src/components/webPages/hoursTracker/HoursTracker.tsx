import SelectClient from "./SelectClient"
import SelectProject from "./SelectProject"
import SelectTask from "./SelectTask"
import EnterDescription from "./EnterDescription"
import ToggleTime from "./ToggleTime"
import Link from 'next/link' 
import { SingleLinks } from 'data/singleLinks'


const HoursTracker = () => {
  //
  const { home, pomodoro, login } = SingleLinks

  ////
  return (

    <div className="trackerContainer mx-auto">
      <header className="w-screen text-white font-semibold  items-center h-12 bg-black">
        <nav className="h-full flex justify-between content-center mx-2">
          <button 
            className="text-xl border-white border rounded px-3 self-center" 
            onClick={ () => history.back() }
          >
            Back
          </button>
          <h1 className="smd:text-xl sm:text-sm self-center">Hours Tracker</h1>
          <Link href={ home }>
            <a className="text-xl w-20 border-white border rounded px-3 self-center">Home</a>
          </Link>
        </nav>
      </header>

      <section className="mt-6">

        <SelectClient />
        <SelectProject />
        <SelectTask />
        <EnterDescription />
        <ToggleTime />
        
      </section>

      <footer className="flex w-screen text-white font-semibold text-xl items-center h-12 bg-black">
        <nav className="w-full flex justify-between mx-2 lg:mx-8">
          <Link href={ pomodoro }>
            <a className="self-center w-20 border-white border px-3 rounded">Timer</a>
          </Link>
          <Link href={ login }>
            <a className="self-center w-20 border-white border px-2 rounded">Logout</a>
          </Link>
        </nav>
      </footer>

    </div>

  )
}

export default HoursTracker
