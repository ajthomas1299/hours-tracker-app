import { SingleLinks } from 'data/singleLinks'
import { MainBtns } from 'data/mainMenu'
import NextLink from 'components/links/NextLink'
import ThemeChanger from 'components/layout/ThemeChanger'
import Header from 'components/layout/Header' 
import Footer from 'components/layout/Footer' 

const Index = () => {
  //
  const { home, login } = SingleLinks

  ////
  return(
    <div className="flex flex-col items-center h-screen w-full">
      <Header>Home Menu</Header>
      <div className="flex flex-col items-center justify-evenly h-full w-screen">
    {
      MainBtns.map(( item ) => (
        <NextLink 
          href={ item.link }
          key={ item.id }
        >
          { item.text }
        </NextLink>
      ))
    }
    </div>
    <Footer />
    </div>
  )
}

export default Index
