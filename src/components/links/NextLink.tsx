import Link from 'next/link'
import { IPropLinks } from 'models/propLinks'

const NextLink = ( { children, href }: IPropLinks ) => {

  return (
    <Link href={ href }>
      <a>
        { children }
      </a> 
    </Link>
  )
}

export default NextLink