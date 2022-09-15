import { createContext, ReactNode, useState } from 'react'

export interface ContextProps {
  modalIsOpen: boolean
  setModalIsOpen: (value: boolean) => void
  txHash: string
  setTxHash: (value: string) => void
}

export const TxModalContext = createContext<ContextProps | null>(null)

export default function TxModalContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [txHash, setTxHash] = useState('')

  return (
    <TxModalContext.Provider
      value={{
        modalIsOpen,
        setModalIsOpen,
        txHash,
        setTxHash,
      }}
    >
      {children}
    </TxModalContext.Provider>
  )
}
