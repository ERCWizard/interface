import { twitterHref, discordHref, githubHref, ercWizardDocsHref } from 'constants/hrefs'

const Footer = () => {
  return (
    <footer className="text-xs py-8 border-t border-neutral-900">
      <div className="flex items-center justify-center flex-col sm:flex-row sm:justify-between flex-wrap gap-2">
        <p className="font-Poppins">© 2022 ERC Wizard</p>
        <div className="space-x-4 hover:text-neutral-400 uppercase">
          <a className=" hover:text-white transition ease-in-out duration-200" href={twitterHref}>
            twitter
          </a>
          <a className=" hover:text-white transition ease-in-out duration-200" href={discordHref}>
            discord
          </a>
          <a className=" hover:text-white transition ease-in-out duration-200" href={githubHref}>
            github
          </a>
          <a className=" hover:text-white transition ease-in-out duration-200" href={ercWizardDocsHref}>
            docs
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
