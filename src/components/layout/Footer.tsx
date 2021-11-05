import { IChildName } from 'models/propLinks'
import { useRouter } from 'next/router'
import { Links } from 'data/buttons/Buttons'

const Footer = ({ children }: IChildName) => {
  const router = useRouter()

  const { loginLink } = Links

  return (
    <footer className="flex w-screen text-white font-semibold text-xl items-center h-12 md:h-20 bg-black">
      <nav className="w-full flex justify-between mx-4 lg:mx-8 uppercase"> 
        <div className="flex flex-1 self-center justify-start">{ router.pathname === '/' ? false : children }</div>
        <div className="flex flex-1 self-center justify-end">{ loginLink }</div>
      </nav>
    </footer>
  )
}

export default Footer


