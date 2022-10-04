import Link from 'next/link'
import { contractOptions, contractMetadata } from 'constants/contractOptions'
import { ercWizardDocsHref } from 'constants/hrefs'
import PageTitle from 'components/PageTitle'
import { ArrowUpRightIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

const style = {
  wrapper: `min-h-[calc(100vh-261px)] max-w-[1280px] mx-auto flex flex-col`,
  description: `text-neutral-400 text-xs uppercase my-4`,
  support: `w-fit uppercase text-xs flex items-center text-neutral-400 p-2 hover:text-white hover:bg-neutral-900 cursor-pointer transition duration-200 ease-in-out`,
  table: `w-full text-left border-separate border-spacing-[1px]`,
  thead: `uppercase bg-neutral-900 text-neutral-400 border-b border-neutral-800`,
  contract: `whitespace-nowrap bg-neutral-900 hover:bg-neutral-800 ease-in duration-150`,
}

const ContractsList = () => {
  return (
    <section className={style.wrapper}>
      <PageTitle title="create smart contract" description="contracts" />
      <div className="overflow-x-auto">
        <table className={style.table}>
          <thead className={style.thead}>
            <tr className="h-16">
              <th scope="col" className="px-4 font-normal whitespace-nowrap">
                type
              </th>
              <th scope="col" className="px-4 font-normal w-20 text-center">
                docs
              </th>
            </tr>
          </thead>
          <tbody>
            {contractOptions.map((contractOption) => (
              <tr key={contractOption} className={style.contract}>
                <td className="h-16">
                  <Link href={`/create/${contractOption}`}>
                    <a className="flex items-center justify-between w-full h-full px-4 cursor-pointer uppercase space-x-4">
                      <div className="flex items-center w-36">
                        <span
                          className="form-tooltip cursor-help text-neutral-400"
                          data-tooltip={contractMetadata[contractOption].description}
                        >
                          <InformationCircleIcon className="w-5 h-5 mr-4 text-neutral-700" />
                        </span>
                        {contractOption}
                      </div>
                      <div className="space-x-4">
                        {contractMetadata[contractOption].tags.map((tag) => (
                          <span key={tag} className="text-xs text-neutral-400 py-1 px-2 bg-neutral-700/50">
                            {tag}
                          </span>
                        ))}
                        <span className="text-xs text-neutral-400 hover:text-white py-1 px-2 border border-neutral-700/50 hover:bg-neutral-700/50">
                          select
                        </span>
                      </div>
                    </a>
                  </Link>
                </td>
                <td className="h-16">
                  <a
                    href={ercWizardDocsHref + 'contracts/' + contractOption}
                    aria-label="documentation"
                    className="flex items-center justify-center uppercase whitespace-nowrap px-4 h-full text-neutral-400 hover:text-white"
                  >
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ContractsList
