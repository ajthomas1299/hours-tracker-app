import { Links, Buttons } from 'data/buttons/Buttons'
import { useRouter } from 'next/router'
import { IChildName } from 'models/propLinks'

const Header = ({ children }: IChildName) => {
  const { homeLink } = Links
  const { backBtn } = Buttons

  const router = useRouter()

  return (
    <header className="w-screen text-white justify-center items-center h-12 md:h-20 mdl:h-20 bg-black">
      <nav className="h-full  uppercase text-center flex justify-between mx-4 lg:mx-8">
        { router.pathname === '/' ? false : backBtn }
        <h1 className="flex self-center md:text-3xl mdl:text-3xl text-center mx-auto text-base font-semibold">{ children }</h1>
        <div className="flex  self-center justify-end">{ router.pathname === '/' ? false : homeLink }</div>
      </nav>
    </header>
  )
}

export default Header

