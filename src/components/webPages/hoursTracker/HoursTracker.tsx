import SelectClient from "./SelectClient"
import SelectProject from "./SelectProject"
import SelectTask from "./SelectTask"
import Header from 'components/layout/Header'

const HoursTracker = () => {
  return (
    <div >
      <Header>Hours Tracker</Header>
      <section className="trackerContainer flex flex-col items-center mt-24 w-full">
        <SelectClient />
        <SelectProject />
        <SelectTask />
      </section>
    </div>

  )
}

export default HoursTracker
