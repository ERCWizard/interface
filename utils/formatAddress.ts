export function formatAddress(address: string | undefined | null) {
  if (!address) return
  return address.slice(0, 5) + '...' + address.slice(-4)
}
