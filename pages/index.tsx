import type { NextPage } from 'next'
import Hero from 'components/Hero'
import HowItWorks from 'components/HowItWorks'
import Details from 'components/Details'
import Community from 'components/Community'
import Seo from 'components/Seo'

const Home: NextPage = () => {
  return (
    <div>
      <Seo />
      <Hero />
      <HowItWorks />
      <Details />
      <Community />
    </div>
  )
}

export default Home
