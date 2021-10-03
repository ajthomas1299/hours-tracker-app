import SelectClient from "./SelectClient"
import SelectProject from "./SelectProject"
import SelectTask from "./SelectTask"

const HoursTracker = () => {
  return (

    <div className="trackerContainer flex flex-col items-center mt-24 w-full">
      <section>
        <SelectClient />
        <SelectProject />
        <SelectTask />
      </section>
    </div>

  )
}

export default HoursTracker
