import Image from 'next/image'
import { arrowUpRight, arrowRight } from 'assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/effect-creative'
import { wizardFactory, wizardERC721, wizardERC1155 } from 'utils/codeSnippet'

export default function Section() {
  return (
    <div className="flex lg:flex-row flex-col items-center w-full gap-16 mt-8">
      <div className="flex-1 space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-medium font-Poppins">
          Create and Deploy Smart Contracts With No-Code
        </h1>
        <p className="uppercase">
          erc wizard is a decentralized, open-source protocol for creating and
          deploying erc smart contracts without writing a single line of code.
        </p>
        <div className="uppercase space-y-2">
          <span className="flex space-x-4">
            <Image src={arrowRight} width={10} height={10} />
            <p>networks: polygon, mumbai</p>
          </span>
          <span className="flex space-x-4">
            <Image src={arrowRight} width={10} height={10} />
            <p>language: solidity</p>
          </span>
          <span className="flex space-x-4">
            <Image src={arrowRight} width={10} height={10} />
            <p>contracts: erc-721, erc-1155</p>
          </span>
        </div>
        <a
          className="bg-white text-black font-medium px-4 h-16 flex items-center justify-center uppercase border hover:text-white hover:bg-black hover:border transition duration-200 ease-in-out"
          href="/create"
        >
          generate smart contrtact
          <span className="ml-2">
            <Image src={arrowUpRight} width={10} height={10} />
          </span>
        </a>
      </div>
      <div className="w-full lg:flex-1 bg-white border border-neutral-900 relative polka-l-b square-r-t">
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
          <SwiperSlide className="bg-black text-white">
            <div className="p-8">
              <pre>{wizardFactory}</pre>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-black text-white">
            <div className="p-8">
              <pre>{wizardERC721}</pre>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-black text-white">
            <div className="p-8">
              <pre>{wizardERC1155}</pre>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
