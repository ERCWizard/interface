import { ChangeEvent, FormEvent, useState, useContext } from 'react'
import { useAccount, useNetwork, useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi'
import { ethers } from 'ethers'
import { contractFormInputs, contractFormState } from 'constants/contractForm'
import { useIsMounted } from 'hooks/useIsMounted'
import { factoryAddresses } from 'constants/addresses'
import { contractFunctionName } from 'constants/contractFunctionName'
import WizardFactoryAbi from 'abi/WizardFactory.json'
import PageTitle from 'components/PageTitle'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { TxModalContext } from 'context/TxModal'
import { toast } from 'react-toastify'
import { InformationCircleIcon } from '@heroicons/react/20/solid'

const style = {
  wrapper: `min-h-[calc(100vh-261px)] max-w-[1280px] mx-auto flex flex-col`,
  description: `text-neutral-400 text-xs uppercase my-4`,
  form: `w-full mb-8`,
  inputWrapper: `relative flex items-center z-0 mb-[1px] w-full h-16 group bg-neutral-900 hover:bg-neutral-800`,
  input: `block w-full h-full text-white bg-transparent appearance-none focus:outline-none focus:ring-0 peer`,
  label: `absolute text-neutral-400 uppercase duration-300 -z-10 transform -translate-y-5 scale-75 top-5 left-[52px] origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:left-[52px]`,
  formButton: `bg-white text-black font-medium uppercase px-8 h-16 w-full flex items-center justify-center`,
  support: `w-fit uppercase text-xs flex items-center text-neutral-400 p-2 hover:text-white hover:bg-neutral-900 cursor-pointer transition duration-200 ease-in-out`,
  inputDescription: `mx-4 cursor-help`,
  inputDescriptionIcon: `form-tooltip flex items-center justify-center text-neutral-400`,
}

const Form = ({ type }: { type: string }) => {
  const router = useRouter()
  const isMounted = useIsMounted()
  const { chain } = useNetwork()
  const { isConnected } = useAccount()
  const context = useContext(TxModalContext)

  const [formState, setFormState]: any = useState(contractFormState[type])

  const { data: cost, isLoading: isLoadingCost } = useContractRead({
    addressOrName: chain?.id && factoryAddresses[chain.id] ? factoryAddresses[chain.id] : '',
    contractInterface: WizardFactoryAbi,
    functionName: 'getCost',
  })
  const { data, isLoading, write } = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: chain?.id && factoryAddresses[chain.id] ? factoryAddresses[chain.id] : '',
    contractInterface: WizardFactoryAbi,
    functionName: contractFunctionName[type],
    overrides: {
      value: cost,
    },
    onError(error) {
      console.log('Transaction Submit failed', error)
      toast.error('Transaction Failed!')
    },
    onSuccess(data) {
      console.log('Transaction Submitted', data)
      context?.setTxHash(chain?.blockExplorers?.default.url + '/tx/' + data.hash)
      context?.setModalIsOpen(true)
      NProgress.start()
    },
  })
  const { isLoading: waitForTransactionIsLoading } = useWaitForTransaction({
    hash: data?.hash,
    onError(error) {
      console.log('Transaction Error', error)
      toast.error('Transaction Error!')
    },
    onSuccess(data) {
      if (data.status === 0) {
        const error = new Error('Transaction Failed')

        console.log('Transaction Failed', error.message)
        toast.error('Transaction Failed!')

        return
      }
      console.log('Transaction Success', data)
      toast.success('Transaction Success!')

      router.push('/dashboard')
    },
    onSettled() {
      NProgress.done()
    },
  })
  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isConnected) {
      console.log('submited ' + type)
      write?.({
        recklesslySetUnpreparedArgs: Object.values(formState),
      })
    }
  }
  const formHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState: any) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }
  return (
    <section className={style.wrapper}>
      <PageTitle title={`${type}`} description="constructor" uppercase goBack />
      <form id={type} className={style.form} onSubmit={submitHandler}>
        {contractFormInputs[type].map((input: any) => (
          <div key={type + input.name} className={style.inputWrapper}>
            <div className={style.inputDescription}>
              <span className={style.inputDescriptionIcon} data-tooltip={input.tooltip}>
                <InformationCircleIcon className="w-5 h-5 text-neutral-700" />
              </span>
            </div>
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
              required={input.required}
              onChange={(e) => formHandler(e)}
              value={formState[input.name]}
            />
            <label htmlFor={input.name} className={style.label}>
              {input.placeholder}
            </label>
          </div>
        ))}
        <div className={style.description} data-cy="cost">
          cost:{' '}
          {isMounted && cost
            ? isLoadingCost
              ? 'fetching...'
              : `${ethers.utils.formatEther(cost).slice(0, 6)} ${chain?.nativeCurrency?.symbol}`
            : 'fetching failed'}
        </div>
        <button
          type="submit"
          form={type}
          disabled={isMounted && (!isConnected || isLoading || waitForTransactionIsLoading)}
          className={style.formButton}
        >
          {isMounted &&
            (isConnected ? (isLoading || waitForTransactionIsLoading ? 'deploying...' : 'deploy') : 'connect wallet')}
        </button>
      </form>
    </section>
  )
}

export default Form
