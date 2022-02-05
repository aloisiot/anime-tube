import '../styles/globals.css'
import '../styles/antd.less'
import type { AppProps } from 'next/app'
import AppContext, { AppProvider } from '../data/context/AppContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
