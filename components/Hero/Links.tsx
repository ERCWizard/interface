import { twitterHref, discordHref, githubHref, ercWizardDocsHref } from 'constants/hrefs'
import { factoryAddresses } from 'constants/addresses'
import { SupportedChainId } from 'constants/chains'
import { PolygonIcon, PolygonLogo, TwitterIcon, DiscordIcon, GithubIcon, GitbookIcon } from 'assets'

const style = {
  social: `border border-neutral-900 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-neutral-900 transition duration-200 ease-in-out`,
}

export default function Links() {
  return (
    <div className="flex justify-between space-x-4 sm:space-x-8 w-full mt-16">
      <a
        href={`https://polygonscan.com/address/${factoryAddresses[SupportedChainId.POLYGON]}`}
        className="border border-neutral-900 h-12 sm:h-16 flex items-center justify-center hover:bg-neutral-900 transition duration-200 ease-in-out"
        aria-label="polygonscan"
      >
        <PolygonLogo className="h-8 px-4 hidden lg:flex" />
        <div className="flex items-center justify-center lg:hidden w-12 sm:w-16">
          <PolygonIcon className="h-8 w-8" />
        </div>
      </a>
      <div className="flex space-x-4 sm:space-x-8">
        <a href={twitterHref} className={style.social} aria-label="twitter">
          <TwitterIcon className="h-8 w-8" />
        </a>
        <a href={discordHref} className={style.social} aria-label="discord">
          <DiscordIcon className="h-8 w-8" />
        </a>
        <a href={githubHref} className={style.social} aria-label="github">
          <GithubIcon className="h-8 w-8" />
        </a>
        <a href={ercWizardDocsHref} className={style.social} aria-label="documentation">
          <GitbookIcon className="h-8 w-8" />
        </a>
      </div>
    </div>
  )
}
