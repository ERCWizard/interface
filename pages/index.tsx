import type { NextPage } from 'next'
import Hero from 'components/Hero'
import Details from 'components/Details'
import Community from 'components/Community'
import Seo from 'components/Seo'

const Home: NextPage = () => {
  return (
    <div>
      <Seo />
      <main>
        <Hero />
        <Details />
        <Community />
      </main>
    </div>
  )
}

export default Home
