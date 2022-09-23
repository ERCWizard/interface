import { twitterHref, discordHref, githubHref, ercWizardDocsHref } from 'constants/hrefs'

const Footer = () => {
  return (
    <footer className="text-sm mt-8 py-8 border-t border-neutral-900">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <p className="font-Poppins">© 2022 ERC Wizard</p>
        <div className="space-x-4 hover:text-neutral-400">
          <a className=" hover:text-white" href={twitterHref}>
            twitter
          </a>
          <a className=" hover:text-white" href={discordHref}>
            discord
          </a>
          <a className=" hover:text-white" href={githubHref}>
            github
          </a>
          <a className=" hover:text-white" href={ercWizardDocsHref}>
            docs
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
