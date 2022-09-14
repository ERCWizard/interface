import { ArrowUpIcon } from '@heroicons/react/24/outline'
import Portal from 'components/Portal'

const style = {
  wrapper: `bg-white/10 fixed top-0 left-0 right-0 bottom-0 z-50`,
  modal: `flex flex-col items-center w-[320px] p-8 bg-black text-white absolute top-1/2 left-1/2 right-auto bottom-auto -mr-[50%] -translate-y-1/2 -translate-x-1/2`,
  button: `bg-white text-black w-full font-medium px-4 h-16 flex items-center justify-center uppercase border hover:text-white hover:bg-black hover:border transition duration-200 ease-in-out`,
  arrowUp: `pb-8 w-full flex justify-center`,
  content: `space-y-4 flex flex-col items-center w-full`,
  headline: `capitalize text-xl font-Poppins`,
  explorer: `uppercase text-sm text-neutral-400 hover:text-white cursor-pointer transition duration-200 ease-in-out`,
}

export default function TxModal({
  modalIsOpen,
  setModalIsOpen,
  txHash,
}: {
  modalIsOpen: boolean
  setModalIsOpen: (value: boolean) => void
  txHash: string
}) {
  const modalContent = modalIsOpen ? (
    <div className={style.wrapper}>
      <div className={style.modal}>
        <div className={style.arrowUp}>
          <ArrowUpIcon className="w-20 h-20 border p-4" />
        </div>
        <div className={style.content}>
          <div className={style.headline}>transaction submitted</div>
          <div className={style.explorer}>
            <a href={txHash} target="_blank" rel="noopener noreferrer">
              view on explorer
            </a>
          </div>
          <button
            className={style.button}
            onClick={() => setModalIsOpen(false)}
          >
            close
          </button>
        </div>
      </div>
    </div>
  ) : null

  return <Portal>{modalContent}</Portal>
}
