import SelectClient from './SelectClient'
import SelectProject from './SelectProject'
import SelectTask from './SelectTask'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import EnterDescription from './EnterDescription'
import ToggleTime from './ToggleTime'
import { Links } from 'data/buttons/Buttons'

const HoursTracker = () => {
  const { pomodoroLink } = Links

  return (
    <div className="h-screen flex flex-col" >
      <Header>Hours Tracker</Header>
      <section className="trackerContainer flex flex-1 flex-col items-center mt-24 w-full">
        <SelectClient />
        <SelectProject />
        <SelectTask />
        <EnterDescription />
        <ToggleTime />
        
      </section>
      <Footer>{ pomodoroLink }</Footer>
    </div>

  )
}

export default HoursTracker
