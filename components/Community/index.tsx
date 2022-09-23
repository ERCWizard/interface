import { TwitterIcon, DiscordIcon, GithubIcon } from 'assets'
import { twitterHref, discordHref, githubHref } from 'constants/hrefs'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

const socials = [
  {
    id: '01 /',
    prefix: 'follow on',
    name: 'github',
    href: githubHref,
    icon: GithubIcon,
    description: 'contribute to the open source code',
  },
  {
    id: '02 /',
    prefix: 'join',
    name: 'discord',
    href: discordHref,
    icon: DiscordIcon,
    description: 'talk, chat, hang out, and stay close with the wizards',
  },
  {
    id: '03 /',
    prefix: 'follow on',
    name: 'twitter',
    href: twitterHref,
    icon: TwitterIcon,
    description: 'stay up-to-date with the latest protocol changes',
  },
]

const Community = () => {
  return (
    <section className="max-w-[1280px] mx-auto flex flex-col items-center justify-center mt-24">
      <div className="flex flex-col space-y-8 w-full">
        <h2 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-medium font-Poppins">Community</h2>
        <p className="uppercase text-justify">
          ask questions, find answers, and share your experience with others.
          <br />
          join the erc wizard community.
        </p>
      </div>
      <div className="flex flex-wrap gap-16 my-8">
        {socials.map((social) => (
          <div key={social.name} className="flex-1 bg-white text-black p-8 space-y-8">
            <social.icon className="bg-black text-white w-16 h-16 p-4" />
            <p className="text-4xl">{social.name}</p>
            <p className="uppercase">{social.description}</p>
            <a
              className="border border-black text-black font-medium px-4 h-16 flex items-center justify-center uppercase whitespace-nowrap hover:text-white hover:bg-black hover:border transition duration-200 ease-in-out"
              href={social.href}
            >
              {social.prefix} {social.name}
              <ArrowUpRightIcon className="h-5 w-5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Community
