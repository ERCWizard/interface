import Image from 'next/image'
import { twitter, discord, github, polygonLogo, polygon } from 'assets'
import { twitterHref, discordHref, githubHref } from 'utils/constants'

export default function Links() {
  return (
    <div className="flex justify-between gap-8 w-full mt-16">
      <a
        href="https://polygonscan.com/"
        className="bg-neutral-900 h-12 sm:h-16 flex items-center justify-center"
      >
        <div className="hidden sm:flex">
          <Image src={polygonLogo} height={32} />
        </div>
        <div className="flex items-center justify-center sm:hidden w-12 sm:w-16">
          <Image src={polygon} height={32} width={32} />
        </div>
      </a>
      <div className="flex space-x-8 sm:space-x-12">
        <a
          href={twitterHref}
          className="bg-neutral-900 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center"
        >
          <Image src={twitter} width={32} height={32} />
        </a>
        <a
          href={discordHref}
          className="bg-neutral-900 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center"
        >
          <Image src={discord} width={32} height={32} />
        </a>
        <a
          href={githubHref}
          className="bg-neutral-900 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center"
        >
          <Image src={github} width={32} height={32} />
        </a>
      </div>
    </div>
  )
}
