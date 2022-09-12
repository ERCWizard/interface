import '../styles/globals.css'
import { useEffect } from 'react'
import Script from 'next/script'
import type { AppProps } from 'next/app'
import {
  WagmiConfig,
  createClient,
  chain,
  configureChains,
  useContractEvent,
  useNetwork,
} from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { factoryAddresses } from 'constants/addresses'
import WizardFactoryAbi from 'abi/WizardFactory.json'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Header from 'components/Header'
import Footer from 'components/Footer'

const { chains, provider, webSocketProvider } = configureChains(
  [chain.polygon, chain.polygonMumbai],
  [
    alchemyProvider({
      apiKey: process.env.POLYGON_ALCHEMY_API_KEY,
    }),
    publicProvider(),
  ]
)

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'ERC Wizard',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { chain } = useNetwork()

  useContractEvent({
    addressOrName:
      chain?.id && factoryAddresses[chain.id] ? factoryAddresses[chain.id] : '',
    contractInterface: WizardFactoryAbi,
    eventName: 'ContractCreated',
    listener: (event) => console.log('ContractCreated event', event),
  })

  useEffect(() => {
    const handleStart = () => NProgress.start()
    const handleStop = () => NProgress.done()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <WagmiConfig client={client}>
        <div className="bg-black text-white px-8 sm:px-16">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </WagmiConfig>
    </>
  )
}

export default MyApp
