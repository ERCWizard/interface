export function formatAddress(
  address: string | undefined | null,
  length: number = 6
) {
  if (!address) return
  return address.slice(0, length) + '...' + address.slice(-length + 2)
}
