import Image from 'next/image'
import { twitter, discord, github, polygonLogo, polygon } from 'assets'
import { twitterHref, discordHref, githubHref } from 'utils/constants'
import { factoryAddresses } from 'constants/addresses'
import { SupportedChainId } from 'constants/chains'

const style = {
  main: `flex justify-between gap-8 w-full mt-16`,
  polygon: `border border-neutral-900 h-12 sm:h-16 flex items-center justify-center hover:bg-neutral-900 transition duration-200 ease-in-out`,
  polygonSmall: `flex items-center justify-center sm:hidden w-12 sm:w-16`,
  socials: `flex space-x-8 sm:space-x-12`,
  social: `border border-neutral-900 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-neutral-900 transition duration-200 ease-in-out`,
}

export default function Links() {
  return (
    <div className={style.main}>
      <a
        href={`https://polygonscan.com/address/${
          factoryAddresses[SupportedChainId.POLYGON]
        }`}
        className={style.polygon}
      >
        <div className="hidden sm:flex">
          <Image src={polygonLogo} height={32} alt="polygon logo" />
        </div>
        <div className={style.polygonSmall}>
          <Image src={polygon} height={32} width={32} alt="polygon logo" />
        </div>
      </a>
      <div className={style.socials}>
        <a href={twitterHref} className={style.social}>
          <Image src={twitter} width={32} height={32} alt="twitter logo" />
        </a>
        <a href={discordHref} className={style.social}>
          <Image src={discord} width={32} height={32} alt="discord logo" />
        </a>
        <a href={githubHref} className={style.social}>
          <Image src={github} width={32} height={32} alt="github logo" />
        </a>
      </div>
    </div>
  )
}
