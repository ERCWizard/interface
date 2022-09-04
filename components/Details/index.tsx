import Image from 'next/image'
import { arrowUpRight, deco } from 'assets'

const Details = () => {
  return (
    <section className="max-w-[1280px] mx-auto flex flex-col items-center justify-center mt-24">
      <div className="flex lg:flex-row flex-col items-center w-full gap-16 my-8">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-medium font-Poppins">
            Details
          </h2>
          <p className="uppercase">
            supporting erc721 and erc1155 contract generation. create a
            gas-efficient contract for your project in under a minute. full
            control ower smart contract no-code price time efficient erc wizard
            team support
          </p>
          <a
            className="bg-white text-black font-medium px-4 h-16 flex items-center justify-center uppercase"
            href="https://app.ercwizard.com"
          >
            open-source code github
            <span className="ml-2">
              <Image src={arrowUpRight} width={10} height={10} />
            </span>
          </a>
        </div>
        <div className="w-full lg:flex-1 flex items-center justify-center space-y-8 relative polka-r-l">
          <Image src={deco} />
        </div>
      </div>
    </section>
  )
}

export default Details
