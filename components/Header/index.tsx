import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { navigationMenu } from 'utils/navigationMenu'
import { expand, xSvg } from 'assets'
import Wallet from './Wallet'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className="py-8 bg-black/70 backdrop-blur-lg sticky top-0 z-50">
        <div className="h-16 flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl sm:text-3xl font-Poppins flex items-center space-x-4">
              ERC Wizard
            </a>
          </Link>
          <nav>
            <div className="hidden md:flex items-center space-x-8 uppercase">
              {navigationMenu.map((el) => (
                <Link key={el.name} href={el.href}>
                  {el.name}
                </Link>
              ))}
              <Wallet />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden items-center justify-center bg-white w-16 h-16"
            >
              {isOpen ? (
                <Image src={xSvg} width={16} height={16} alt="" />
              ) : (
                <Image src={expand} width={16} height={16} alt="" />
              )}
            </button>
          </nav>
        </div>
      </header>
      {isOpen && (
        <div className="fixed top-32 left-0 w-full h-full z-50 bg-black uppercase px-8 sm:px-16 flex flex-col space-y-4">
          <Wallet />
          {navigationMenu.map((el) => (
            <Link key={el.name} href={el.href}>
              {el.name}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Header
