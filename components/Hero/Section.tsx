import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/effect-creative'
import { wizardERC721, wizardERC1155 } from 'utils/codeSnippet'
import { formatCode } from 'utils/formatCode'
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/20/solid'

export default function Section() {
  return (
    <div className="flex lg:flex-row flex-col items-center w-full gap-16 mt-8">
      <div className="flex-1 space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-medium font-Poppins">
          Create and Deploy Smart Contracts With No-Code
        </h1>
        <p className="uppercase text-justify">
          erc wizard is a decentralized, open-source protocol for creating and deploying erc smart contracts without
          writing a single line of code.
        </p>
        <div className="uppercase space-y-2">
          <span className="flex items-center space-x-4">
            <ArrowRightIcon className="h-4 w-4" />
            <p>networks: polygon, mumbai</p>
          </span>
          <span className="flex items-center space-x-4">
            <ArrowRightIcon className="h-4 w-4" />
            <p>language: solidity</p>
          </span>
          <span className="flex items-center space-x-4">
            <ArrowRightIcon className="h-4 w-4" />
            <p>contracts: erc-721, erc-1155</p>
          </span>
        </div>
        <Link href="/create">
          <a className="bg-white text-black font-medium px-4 h-16 flex items-center justify-center uppercase border hover:text-white hover:bg-black hover:border transition duration-200 ease-in-out">
            generate smart contrtact
            <ArrowUpRightIcon className="h-5 w-5" />
          </a>
        </Link>
      </div>
      <div className="w-full lg:flex-1 bg-black border border-neutral-900 relative">
        <Swiper
          className="h-96 w-full lg:h-[400px] lg:w-[508px] xl:h-[500px] xl:w-[608px] text-xs"
          grabCursor={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          loop={true}
          modules={[EffectCreative, Autoplay]}
        >
          <SwiperSlide className="bg-black text-white">{formatCode(wizardERC721)}</SwiperSlide>
          <SwiperSlide className="bg-black text-white">{formatCode(wizardERC1155)}</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
