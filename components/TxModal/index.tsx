import { ArrowUpIcon } from '@heroicons/react/24/outline'
import Portal from 'components/Portal'
import { useContext } from 'react'
import { TxModalContext } from 'context/TxModal'

export default function TxModal() {
  const context = useContext(TxModalContext)

  const modalContent = context?.modalIsOpen ? (
    <div className="bg-white/10 fixed top-0 left-0 right-0 bottom-0 z-50">
      <div className="flex flex-col items-center w-[320px] p-8 bg-black text-white absolute top-1/2 left-1/2 right-auto bottom-auto -mr-[50%] -translate-y-1/2 -translate-x-1/2">
        <div className="pb-8 w-full flex justify-center">
          <ArrowUpIcon className="w-20 h-20 border p-4" />
        </div>
        <div className="space-y-4 flex flex-col items-center w-full">
          <div className="capitalize text-xl font-Poppins">transaction submitted</div>
          <div className="uppercase text-sm text-neutral-400 hover:text-white cursor-pointer transition duration-200 ease-in-out">
            <a href={context?.txHash} target="_blank" rel="noopener noreferrer">
              view on explorer
            </a>
          </div>
          <button
            className="bg-white text-black w-full font-medium px-4 h-16 flex items-center justify-center uppercase border hover:text-white hover:bg-black hover:border transition duration-200 ease-in-out"
            onClick={() => context?.setModalIsOpen(false)}
          >
            close
          </button>
        </div>
      </div>
    </div>
  ) : null

  return <Portal>{modalContent}</Portal>
}
