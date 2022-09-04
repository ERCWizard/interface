import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from 'components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | ERC Wizard Protocol</title>
        <meta
          name="description"
          content="Generate ERC Smart Contracts with No-Code for NFT's Next Project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  )
}

export default Home
