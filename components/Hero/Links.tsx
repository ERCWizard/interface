import Image from 'next/image'
import { twitter, discord, github, polygonLogo, polygon } from 'assets'
import { twitterHref, discordHref, githubHref } from 'utils/constants'
import { factoryAddresses } from 'constants/addresses'
import { SupportedChainId } from 'constants/chains'

export default function Links() {
  return (
    <div className="flex justify-between gap-8 w-full mt-16">
      <a
        href={`https://polygonscan.com/address/${
          factoryAddresses[SupportedChainId.POLYGON]
        }`}
        className="border h-12 sm:h-16 flex items-center justify-center hover:bg-neutral-900 transition duration-200 ease-in-out"
      >
        <div className="hidden sm:flex">
          <Image src={polygonLogo} height={32} alt="polygon logo" />
        </div>
        <div className="flex items-center justify-center sm:hidden w-12 sm:w-16">
          <Image src={polygon} height={32} width={32} alt="polygon logo" />
        </div>
      </a>
      <div className="flex space-x-8 sm:space-x-12">
        <a
          href={twitterHref}
          className="border w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-neutral-900 transition duration-200 ease-in-out"
        >
          <Image src={twitter} width={32} height={32} alt="twitter logo" />
        </a>
        <a
          href={discordHref}
          className="border w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-neutral-900 transition duration-200 ease-in-out"
        >
          <Image src={discord} width={32} height={32} alt="discord logo" />
        </a>
        <a
          href={githubHref}
          className="border w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-neutral-900 transition duration-200 ease-in-out"
        >
          <Image src={github} width={32} height={32} alt="github logo" />
        </a>
      </div>
    </div>
  )
}
