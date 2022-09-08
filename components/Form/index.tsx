import { useState } from 'react'
import { contractFormInputs } from 'constants/contractForm'
import { Contract, contractOptions } from 'constants/contractOptions'
import PageTitle from 'components/PageTitle'

const style = {
  wrapper: `min-h-[calc(100vh-128px)] max-w-[1280px] mx-auto flex flex-col`,
  description: `text-neutral-400 text-xs uppercase my-4`,
  options: `flex w-full space-x-4 pb-8 border-b border-neutral-900`,
  optionsButton: `bg-white text-black uppercase px-8 h-16 w-60 flex items-center justify-center`,
  form: `w-full`,
  inputWrapper: `relative z-0 mb-4 w-full h-16 group bg-neutral-900`,
  input: `block w-full h-full px-4 text-white bg-transparent appearance-none focus:outline-none focus:ring-0 peer`,
  label: `absolute text-neutral-400 uppercase duration-300 -z-10 transform -translate-y-5 scale-75 top-5 left-4 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:left-4`,
  formButton: `bg-white text-black font-medium uppercase px-8 h-16 w-full flex items-center justify-center`,
}

const Form = () => {
  const [option, setOption] = useState(Contract.ERC721)

  return (
    <section className={style.wrapper}>
      <PageTitle title="create smart contract" />
      <p className={style.description}>select the smart contract type</p>
      <div className={style.options}>
        {contractOptions.map((contractOption) => (
          <button
            className={style.optionsButton}
            key={contractOption}
            onClick={() => setOption(contractOption)}
          >
            {contractOption}
          </button>
        ))}
      </div>
      <p className={style.description}>
        fill in all the smart contract information
      </p>
      <form className={style.form}>
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
            />
            <label htmlFor={input.name} className={style.label}>
              {input.placeholder}
            </label>
          </div>
        ))}
        <p className={style.description}>deployment cost:</p>
        <button type="submit" className={style.formButton}>
          deploy
        </button>
      </form>
    </section>
  )
}

export default Form
