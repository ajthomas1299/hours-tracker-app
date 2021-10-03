import Link from 'next/link'
import { IPropLinks } from 'models/propLinks'

const NextLink = ( { children, href }: IPropLinks ) => {

  return (
    <Link href={ href }>
      <a className="w-2/3 text-center text-white bg-red-dk hover:bg-red-li py-2 rounded shadow-lg">
        { children }
      </a> 
    </Link>
  )
}

export default NextLink