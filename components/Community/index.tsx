import { TwitterIcon, DiscordIcon, GithubIcon } from 'assets'
import { twitterHref, discordHref, githubHref } from 'constants/hrefs'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

const socials = [
  {
    prefix: 'follow on',
    name: 'github',
    href: githubHref,
    icon: GithubIcon,
  },
  {
    prefix: 'join',
    name: 'discord',
    href: discordHref,
    icon: DiscordIcon,
  },
  {
    prefix: 'follow on',
    name: 'twitter',
    href: twitterHref,
    icon: TwitterIcon,
  },
]

const Community = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeIn', duration: 1 }}
      className="max-w-[1280px] mx-auto flex flex-col items-center justify-center mt-24"
    >
      <div className="flex flex-col space-y-8 w-full">
        <h2 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-medium font-Poppins">Community</h2>
        <p className="uppercase text-justify">ask questions, find answers, and share your experience with others.</p>
      </div>
      <div className="flex flex-wrap gap-8 my-8 w-full">
        {socials.map((social) => (
          <div key={social.name} className="flex-1 flex items-center bg-white text-black">
            <a
              className="border border-black w-full text-black font-medium px-4 h-16 flex items-center justify-center uppercase whitespace-nowrap hover:text-white hover:bg-black hover:border-white transition duration-200 ease-in-out"
              href={social.href}
            >
              <social.icon className="w-5 h-5 mr-4" />
              {social.prefix} {social.name}
              <ArrowUpRightIcon className="h-5 w-5" />
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Community
