import { Links, Buttons } from 'data/buttons/Buttons'
import { useRouter } from 'next/router'
import { IPropLinks } from 'models/propLinks'

const Header = ({ children }: IPropLinks) => {
  const { homeLink } = Links
  const { backBtn } = Buttons

  const router = useRouter()

  return (
    <header className="w-screen text-white text-xl justify-center items-center h-12 bg-black">
      <nav className="h-full uppercase text-center flex justify-center mx-4 lg:mx-8">
        <div className="flex flex-1 self-center justify-start">{ router.pathname === '/' ? false : backBtn }</div>
        <h1 className="flex self-center font-semibold">{ children }</h1>
        <div className="flex flex-1 self-center justify-end">{ router.pathname === '/' ? false : homeLink }</div>
      </nav>
    </header>
  )
}

export default Header

