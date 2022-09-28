import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { navigationMenu } from 'utils/navigationMenu'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import Wallet from './Wallet'
import { SUPPORT_ADDRESS } from 'constants/addresses'
import { useCopyClipboard } from 'hooks/useCopyClipboard'

const Header = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { copy } = useCopyClipboard()

  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsOpen(false))
    return () => {
      router.events.off('routeChangeStart', () => setIsOpen(false))
    }
  }, [router])

  return (
    <header className="py-8 bg-black/70 backdrop-blur-lg sticky top-0 z-50">
      <div className="h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl sm:text-3xl font-Poppins flex items-center space-x-4">ERC Wizard</a>
        </Link>
        <nav>
          <div className="hidden md:flex items-center">
            <div className="space-x-8 mr-8 uppercase hover:text-neutral-400 whitespace-nowrap">
              <button
                data-value="support this project. copy address"
                onClick={() => copy(SUPPORT_ADDRESS)}
                className="cursor-pointer copy-tooltip"
              >
                ❤️
              </button>
              {navigationMenu.map((el) => (
                <Link key={el.name} href={el.href}>
                  <a className="hover:text-white transition ease-in-out duration-200">{el.name}</a>
                </Link>
              ))}
            </div>
            <Wallet />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center justify-center bg-white w-16 h-16"
            aria-label="menu"
          >
            {isOpen ? <XMarkIcon className="h-8 w-8 text-black" /> : <Bars3Icon className="h-8 w-8 text-black" />}
          </button>
        </nav>
      </div>
      {isOpen && (
        <div
          id="mobile"
          className="absolute top-32 left-0 w-full h-screen z-50 bg-black uppercase flex flex-col space-y-4"
        >
          <Wallet />
          {navigationMenu.map((el) => (
            <Link key={el.name} href={el.href}>
              {el.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
