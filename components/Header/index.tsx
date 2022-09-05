import Image from 'next/image'
import { navigationMenu } from 'utils/navigationMenu'
import { wand, expand, xSvg, arrowUpRight } from 'assets'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="py-8">
      <div className="h-16 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-4">
          <div className="border border-white w-16 h-16 flex items-center justify-center">
            <Image src={wand} width={32} height={32} />
          </div>
          <p className="text-2xl sm:text-3xl font-Poppins">ERC Wizard</p>
        </a>
        <nav>
          <div className="hidden md:flex items-center space-x-8 uppercase">
            {navigationMenu.map((el) => (
              <a key={el.name} href={el.href}>
                {el.name}
              </a>
            ))}
            <a
              className="bg-white text-black font-medium px-8 h-16 flex items-center justify-center border hover:text-white hover:bg-black hover:border transition duration-200 ease-in-out"
              href="https://app.ercwizard.com"
            >
              Launch App
              <span className="ml-2">
                <Image src={arrowUpRight} width={10} height={10} />
              </span>
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center justify-center bg-white w-16 h-16"
          >
            {isOpen ? (
              <Image src={xSvg} width={16} height={16} />
            ) : (
              <Image src={expand} width={16} height={16} />
            )}
          </button>
        </nav>
        {isOpen && (
          <div className="fixed top-32 left-0 w-full h-full z-50 bg-black uppercase px-8 sm:px-16 flex flex-col space-y-4">
            {navigationMenu.map((el) => (
              <a key={el.name} href={el.href}>
                {el.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
