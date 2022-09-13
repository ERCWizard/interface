import Image from 'next/image'
import { deco } from 'assets'
import { githubHref } from 'constants/hrefs'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

const Details = () => {
  return (
    <section className="max-w-[1280px] mx-auto flex flex-col items-center justify-center mt-24">
      <div className="flex lg:flex-row flex-col items-center w-full gap-16 my-8">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-medium font-Poppins">
            Details
          </h2>
          <p className="uppercase text-justify">
            create and deploy gas-efficient ready-to-use smart contracts without
            writing a single line of solidity code. launch your next project in
            under a minute, and have full control over it.
          </p>
          <p className="uppercase text-justify">
            supporting erc-721 and erc-1155 contract generation. developed
            following the erc standards, with secure open-source libraries like
            OpenZeppelin and Chainlink.
          </p>
          <a
            className="bg-white text-black font-medium px-4 h-16 flex items-center justify-center uppercase border hover:text-white hover:bg-black hover:border transition duration-200 ease-in-out"
            href={githubHref}
          >
            open-source code github
            <ArrowUpRightIcon className="h-5 w-5" />
          </a>
        </div>
        <div className="w-full lg:flex-1 flex items-center justify-center space-y-8 relative polka-r-l">
          <Image src={deco} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Details
