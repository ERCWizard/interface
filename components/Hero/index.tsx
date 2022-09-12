import Links from './Links'
import Section from './Section'
import { ArrowDownIcon } from '@heroicons/react/20/solid'

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-128px)] max-w-[1280px] mx-auto flex flex-col items-center justify-center">
      <Section />
      <Links />
      <div className="flex items-end">
        <div className="border border-white h-16 w-16 flex items-center justify-center my-12 animate-bounce">
          <ArrowDownIcon className="h-8 w-8" />
        </div>
      </div>
    </section>
  )
}

export default Hero
