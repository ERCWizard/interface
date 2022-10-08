import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useIsMounted } from 'hooks/useIsMounted'
import { formatAddress } from 'utils/formatAddress'
import Avatar from 'boring-avatars'

const Wallet = () => {
  const { address, isConnected } = useAccount()
  const { connect, connectors, isLoading } = useConnect()
  const { disconnect } = useDisconnect()
  const isMounted = useIsMounted()

  return (
    <div className="relative group md:w-52" data-cy="wallet">
      <button
        id="connect"
        onClick={() => isConnected && disconnect()}
        className="bg-white text-black font-medium uppercase px-4 h-16 w-full flex items-center justify-center"
      >
        {isMounted && isConnected ? (
          <>
            <p className="w-full">
              <span id="connected">{formatAddress(address)}</span>
            </p>
            <span className="ml-2">
              <Avatar size={32} name={address} variant="beam" square />
            </span>
          </>
        ) : isLoading ? (
          <span>connecting...</span>
        ) : (
          <span>connect wallet</span>
        )}
      </button>
      {isMounted && (
        <div className="absolute hidden group-hover:flex flex-col w-full top-16 pt-4 text-black border border-black">
          {connectors.map((connector: any) => (
            <button
              className="p-4 bg-white hover:bg-black hover:text-white w-full text-left uppercase border-b border-black"
              disabled={!connector.ready || isLoading}
              key={connector.id}
              onClick={() => connect({ connector })}
            >
              {!connector.ready ? `${connector.name} (install)` : connector.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wallet
