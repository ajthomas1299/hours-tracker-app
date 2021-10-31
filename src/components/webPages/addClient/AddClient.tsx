import Header from 'components/layout/Header' 
import Footer from 'components/layout/Footer' 
import { Links } from 'data/buttons/Buttons' 

const AddClient = () => {
  const { hoursTrackerLink } = Links

  return (
    <div className="h-screen flex flex-col">
      <Header>Add Client</Header>
      <main className="flex-1">

      </main>
      <Footer>{ hoursTrackerLink }</Footer>
    </div>
  )
}

export default AddClient


