import { Links, Buttons } from 'data/buttons/Buttons'
import { useRouter } from 'next/router'
import { IChildName } from 'models/propLinks'

const Header = ({ children }: IChildName) => {
  const { homeLink } = Links
  const { backBtn } = Buttons

  const router = useRouter()

  return (
    <header className="w-screen text-white text-xl justify-center items-center h-12 bg-black">
      <nav className="h-full bg-yellow-300  uppercase text-center flex justify-between mx-4 lg:mx-8">
        <div className="flex w-auto self-center">{ router.pathname === '/' ? false : backBtn }</div>
        <h1 className="flex self-center text-base font-semibold">{ children }</h1>
        <div className="flex w-auto self-center justify-end">{ router.pathname === '/' ? false : homeLink }</div>
      </nav>
    </header>
  )
}

export default Header

