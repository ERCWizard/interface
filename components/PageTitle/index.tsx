import { glitchInText } from 'utils/animate'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { DiscordIcon, GitbookIcon } from 'assets'
import { discordHref, ercWizardDocsHref } from 'constants/hrefs'

const style = {
  support: `w-fit uppercase text-xs flex items-center text-neutral-400 p-2 hover:text-white hover:bg-neutral-900 cursor-pointer transition duration-200 ease-in-out`,
}

const PageTitle = ({
  title,
  description,
  uppercase,
  goBack,
}: {
  title: string
  description: string
  uppercase?: boolean
  goBack?: boolean
}) => {
  return (
    <div>
      <div className="py-4 border-b border-neutral-900 flex justify-between">
        <h1 className={`${uppercase ? 'uppercase' : 'capitalize'} text-xl font-Poppins`}>{glitchInText(title)}</h1>
        {goBack && (
          <Link href={'/create'}>
            <a className="flex items-center text-neutral-400 hover:text-white uppercase whitespace-nowrap">
              <ArrowLeftIcon className="w-4 h-4" />
              <span className="ml-1">go back</span>
            </a>
          </Link>
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-neutral-400 text-xs uppercase my-4">{description}</p>
        <div className="flex">
          <a href={ercWizardDocsHref} className={style.support}>
            <span>details</span>
            <GitbookIcon className="w-4 h-4 ml-2" />
          </a>
          <a href={discordHref} className={style.support}>
            <span>support</span>
            <DiscordIcon className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default PageTitle
