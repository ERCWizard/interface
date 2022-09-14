import ReactDOM from 'react-dom'
import { ReactNode } from 'react'
import { useIsMounted } from 'hooks/useIsMounted'

export default function Portal({ children }: { children: ReactNode }) {
  const isMounted = useIsMounted()

  if (isMounted) {
    return ReactDOM.createPortal(children, document.body)
  } else {
    return null
  }
}
