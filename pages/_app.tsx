import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderComponent } from '../components/HeaderComponent'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div>
    <HeaderComponent title='GREAT COMMISSION CHURCH' />
  <Component {...pageProps} />
  <Footer />
  </div>
  )
}

export default MyApp
