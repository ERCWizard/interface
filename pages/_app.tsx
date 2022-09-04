import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from 'components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black text-white px-8 sm:px-16">
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
