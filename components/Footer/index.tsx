import { twitterHref, discordHref, githubHref } from 'constants/hrefs'

const Footer = () => {
  return (
    <footer className="text-sm mt-8 py-8 border-t border-neutral-900">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <p className="font-Poppins">© 2022 ERC Wizard</p>
        <div className="space-x-4">
          <a href={twitterHref}>twitter</a>
          <a href={discordHref}>discord</a>
          <a href={githubHref}>github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
