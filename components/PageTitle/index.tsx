import { glitchInText } from 'utils/animate'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { DiscordIcon, GitbookIcon } from 'assets'
import { discordHref, ercWizardDocsHref } from 'constants/hrefs'

const style = {
  wrapper: `min-h-[calc(100vh-128px)] max-w-[1280px] mx-auto flex flex-col`,
  description: `text-neutral-400 text-xs uppercase my-4`,
  support: `w-fit uppercase text-xs flex items-center text-neutral-400 p-2 hover:text-white hover:bg-neutral-900 cursor-pointer transition duration-200 ease-in-out`,
  table: `w-full text-left border-separate border-spacing-[1px]`,
  thead: `uppercase bg-neutral-900 text-neutral-400 border-b border-neutral-800`,
  contract: `whitespace-nowrap bg-neutral-900 hover:bg-neutral-800 ease-in duration-150`,
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
        <p className={style.description}>{description}</p>
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
