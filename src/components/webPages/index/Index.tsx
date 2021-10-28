import Link from 'next/link' 
import { SingleLinks } from 'data/singleLinks'
import { MainBtns } from 'data/mainMenu'
import NextLink from 'components/links/NextLink'
// import ThemeChanger from 'components/layout/ThemeChanger'

const Index = () => {
  //
  const { home, login } = SingleLinks

  ////
  return(
    <div className="homeContainer flex flex-col items-center h-screen w-full">

      <header className="flex w-screen text-white font-semibold text-xl justify-center items-center h-12 bg-black">
        <h1>Home Menu</h1>
      </header>

      {/* <ThemeChanger /> */}
      <div className="buttonContainer flex flex-col items-center justify-evenly h-5/6 w-screen">
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

      <footer className="fixed bottom-0 flex w-screen text-white font-semibold text-xl items-center h-12 bg-black">
        <nav className="w-full flex justify-between mx-2 lg:mx-8">
          <Link href={ home }>
              <a className="self-center w-20 border-black text-black border px-2 rounded">Button</a>
          </Link>
          <Link href={ login }>
              <a className="self-center w-20 border-white border px-2 rounded">Logout</a>
          </Link>
        </nav>
      </footer>
    
    </div>
  )
}

export default Index
