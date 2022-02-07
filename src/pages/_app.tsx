import '../styles/globals.css'
import '../styles/antd.less'
import type { AppProps } from 'next/app'
import AppContext, { AppProvider } from '../data/context/AppContext'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.svg" />
      <meta name="description" content="The best of the anime world" />
    </Head>
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
    </>
  )
}

export default MyApp
