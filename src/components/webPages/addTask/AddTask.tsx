import Header from 'components/layout/Header' 
import Footer from 'components/layout/Footer' 
import { Links } from 'data/buttons/Buttons'

const AddTask = () => {
  const { hoursTrackerLink } = Links

  return (
    <div className="h-screen flex flex-col">
      <Header>Add Task</Header>
      <main className="flex-1">

      </main>
      <Footer>{ hoursTrackerLink }</Footer>
    </div>
  )
}

export default AddTask
