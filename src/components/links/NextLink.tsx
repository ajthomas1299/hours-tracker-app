import Link from 'next/link'
import { IPropLinks } from 'models/propLinks'

const NextLink = ( { children, href }: IPropLinks ) => {

  return (
    <Link href={ href }>
      <a className="w-2/3 xl:w-2/4 text-center text-white bg-red-dk hover:bg-gray-dk sml:py-1 mdl:py-2 py-3  rounded shadow-lg">
        { children }
      </a> 
    </Link>
  )
}

export default NextLink