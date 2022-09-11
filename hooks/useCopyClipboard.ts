import { useState, useEffect, useCallback } from 'react'

export function useCopyClipboard() {
  const [copied, setCopied] = useState(false)

  const copy = useCallback((value: any) => {
    if (!value) return

    navigator.clipboard
      .writeText(typeof value === 'object' ? JSON.stringify(value) : value)
      .then(() => {
        console.log(`Copied to the clipboard`)
        setCopied(true)
      })
      .catch((error) => {
        console.log(`Copy to clipboard failed: ${error}`)
      })
  }, [])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (copied) {
      timer = setTimeout(() => setCopied(false), 2500)

      return () => clearTimeout(timer)
    }
  }, [copied])

  return { copied, copy }
}
