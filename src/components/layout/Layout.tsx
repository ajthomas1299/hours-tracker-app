
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { ILayoutProps } from 'models/propLayout'
import { 
  Favicons, 
  Urls 
} from 'data/favicons'

const Header = dynamic(() => import('./Header'), { ssr: false })
const Footer = dynamic(() => import('./Footer'), { ssr: false })

const Layout = ({ children, title, description, showHeader, showFooter, ogImage, url }: ILayoutProps) => {
  const { apple, browserConfig, faviconSmall, faviconBig, faviconIco, safari, webmanifest } = Favicons
  const { ogImg, pageUrl } = Urls

  return (
    <> 
      <Head>
        <title>
          { title ? title : 'Portfolio' }
        </title>
        <meta 
          name='description' 
          key='description'
          content={
            description 
              ? description 
              : 'Information about Sven'
          } 
        />
        <meta
          property='og:title'
          content={
            title
              ? title
              : 'Goed Eten'
          }
          key='og:title'
        />
        <meta property='og:url' content={url ? url : pageUrl} key='og:url' />
        <meta
          property='og:image'
          content={ogImage ? ogImage : ogImg}
          key='og:image'
        />
        <meta
          property='og:description'
          content={
            description
              ? description
              : 'Portfolio van Sven!'
          }
          key='og:description'
        />
              <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={apple}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href={faviconBig}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href={faviconSmall}
      />
      <link rel='manifest' href={webmanifest} />
      <link
        rel='mask-icon'
        href={safari}
        color='#000000'
      />
      <link rel='shortcut icon' href={faviconIco} />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-config' content={browserConfig} />
      <meta name='theme-color' content='#000000' />
      <meta
        name='description'
        content={'Portfolio Sven'}
      />
      </Head>
      <div>
        <div>
          { showHeader ? <Header /> : null }
          { children }
        </div>
          { showFooter ? <Footer /> : null }  
      </div>
    </>
  )
}

export default Layout
