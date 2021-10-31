import Head from 'next/head'
import { ILayoutProps } from 'models/propLayout'
import { 
  Favicons, 
  Urls 
} from 'data/favicons'

const Layout = ({ children, title, description, ogImage, url }: ILayoutProps) => {
  const { apple, browserConfig, faviconSmall, faviconBig, faviconIco, safari, webmanifest } = Favicons
  const { ogImg, pageUrl } = Urls

  return (
    <> 
      <Head>
        <title>
          { title ? title : 'Hours Tracker' }
        </title>
        <meta 
          name='description' 
          key='description'
          content={
            description 
              ? description 
              : 'Tracking productive hours'
          } 
        />
        <meta
          property='og:title'
          content={
            title
              ? title
              : 'Hours Tracker'
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
              : 'Overview productive hours'
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
        content={'Hours Tracker'}
      />
      </Head>
      <div className="">
          { children }
      </div>
    </>
  )
}

export default Layout
