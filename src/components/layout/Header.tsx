import { Links, Buttons } from 'data/buttons/Buttons'

interface IProp {
  children: React.ReactNode
}

const Header = ({ children }: IProp) => {
  const { homeLink, reportsLink, loginLink } = Links
  const { backBtn } = Buttons

  return (
    <header className="w-screen text-white text-xl items-center h-12 bg-black">
        <nav className="h-full uppercase flex justify-between content-center mx-4 lg:mx-8">
           { backBtn }
           <h1 className="self-center font-semibold">{ children }</h1>
           { homeLink }
        </nav>
      </header>
  )
}

export default Header

