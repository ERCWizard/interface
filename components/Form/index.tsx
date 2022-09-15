import { ChangeEvent, FormEvent, useState } from 'react'
import {
  useAccount,
  useNetwork,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import { ethers } from 'ethers'
import { contractFormInputs, contractFormState } from 'constants/contractForm'
import { contractOptions } from 'constants/contractOptions'
import { Contract } from 'enums'
import { useIsMounted } from 'hooks/useIsMounted'
import { factoryAddresses } from 'constants/addresses'
import { contractFunctionName } from 'constants/contractFunctionName'
import WizardFactoryAbi from 'abi/WizardFactory.json'
import PageTitle from 'components/PageTitle'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { useContext } from 'react'
import { TxModalContext } from 'context/TxModal'

const style = {
  wrapper: `min-h-[calc(100vh-128px)] max-w-[1280px] mx-auto flex flex-col`,
  description: `text-neutral-400 text-xs uppercase my-4`,
  options: `flex w-full space-x-4 pb-8 border-b border-neutral-900`,
  optionsButton: `border bg-black text-white hover:bg-neutral-900 uppercase px-8 h-16 w-60 flex items-center justify-center`,
  optionsButtonActive: `border bg-white text-black uppercase px-8 h-16 w-60 flex items-center justify-center`,
  form: `w-full`,
  inputWrapper: `relative z-0 mb-[1px] w-full h-16 group bg-neutral-900 hover:bg-neutral-800`,
  input: `block w-full h-full px-4 text-white bg-transparent appearance-none focus:outline-none focus:ring-0 peer`,
  label: `absolute text-neutral-400 uppercase duration-300 -z-10 transform -translate-y-5 scale-75 top-5 left-4 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:left-4`,
  formButton: `bg-white text-black font-medium uppercase px-8 h-16 w-full flex items-center justify-center`,
}

const Form = () => {
  const router = useRouter()
  const isMounted = useIsMounted()
  const { chain } = useNetwork()
  const { isConnected } = useAccount()
  const context = useContext(TxModalContext)

  const [option, setOption] = useState(Contract.ERC721)
  const [formState, setFormState]: any = useState(contractFormState)

  const { data: cost, isLoading: isLoadingCost } = useContractRead({
    addressOrName:
      chain?.id && factoryAddresses[chain.id] ? factoryAddresses[chain.id] : '',
    contractInterface: WizardFactoryAbi,
    functionName: 'getCost',
  })
  const { data, isLoading, write } = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName:
      chain?.id && factoryAddresses[chain.id] ? factoryAddresses[chain.id] : '',
    contractInterface: WizardFactoryAbi,
    functionName: contractFunctionName[option],
    overrides: {
      value: cost,
    },
    onError(error) {
      console.log('Transaction Submit failed', error)
    },
    onSuccess(data) {
      console.log('Transaction Submitted', data)
      context?.setTxHash(
        chain?.blockExplorers?.default.url + '/tx/' + data.hash
      )
      context?.setModalIsOpen(true)
      NProgress.start()
    },
  })
  const { isLoading: waitForTransactionIsLoading } = useWaitForTransaction({
    hash: data?.hash,
    onError(error) {
      console.log('Transaction Error', error)
    },
    onSuccess(data) {
      if (data.status === 0) {
        const error = new Error('Transaction Failed')

        console.log('Transaction Error', error.message)

        return
      }
      console.log('Transaction Success', data)

      router.push('/dashboard')
    },
    onSettled() {
      NProgress.done()
    },
  })
  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isConnected) {
      console.log('submited ' + option)
      write?.({
        recklesslySetUnpreparedArgs: Object.values(formState[option]),
      })
    }
  }
  const formHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState: any) => ({
      ...prevState,
      [option]: {
        ...prevState[option],
        [event.target.name]: event.target.value.replace(',', '.'),
      },
    }))
  }
  return (
    <section className={style.wrapper}>
      <PageTitle title="create smart contract" />
      <p className={style.description}>select the contract type</p>
      <div className={style.options}>
        {contractOptions.map((contractOption) => (
          <button
            className={
              contractOption == option
                ? style.optionsButtonActive
                : style.optionsButton
            }
            key={contractOption}
            disabled={isLoading || waitForTransactionIsLoading}
            onClick={() => setOption(contractOption)}
          >
            {contractOption}
          </button>
        ))}
      </div>
      <p className={style.description}>fill in all the contract information</p>
      <form
        id={option}
        className={style.form}
        onSubmit={(event) => submitHandler(event)}
      >
        {contractFormInputs[option].map((input: any) => (
          <div key={option + input.name} className={style.inputWrapper}>
            <input
              type={input.type}
              name={input.name}
              id={input.name}
              className={style.input}
              placeholder=" "
              min={input.min}
              max={input.max}
              minLength={input.minlength}
              maxLength={input.maxlength}
              autoComplete="off"
              required
              onChange={(e) => formHandler(e)}
              value={formState[option][input.name]}
            />
            <label htmlFor={input.name} className={style.label}>
              {input.placeholder}
            </label>
          </div>
        ))}
        <p className={style.description}>
          deployment cost:{' '}
          {isMounted && cost ? (
            isLoadingCost ? (
              <span>fetching...</span>
            ) : (
              <span>
                {ethers.utils.formatEther(cost).slice(0, 6)}{' '}
                {chain?.nativeCurrency?.symbol}
              </span>
            )
          ) : (
            <span>fetching failed</span>
          )}
        </p>
        <button
          type="submit"
          form={option}
          disabled={
            isMounted &&
            (!isConnected || isLoading || waitForTransactionIsLoading)
          }
          className={style.formButton}
        >
          {isMounted &&
            (isConnected
              ? isLoading || waitForTransactionIsLoading
                ? 'deploying...'
                : 'deploy'
              : 'connect wallet')}
        </button>
      </form>
    </section>
  )
}

export default Form
