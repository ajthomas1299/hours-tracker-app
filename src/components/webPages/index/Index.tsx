import { MainBtns } from "data/mainMenu"
import NextLink from "components/links/NextLink"

const Index = () => {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <div className="flex w-screen text-white font-semibold text-xl justify-center items-center h-12 bg-indigo-800">
        <h1>Home Menu</h1>
      </div>
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
    </div>
  )
}

export default Index
