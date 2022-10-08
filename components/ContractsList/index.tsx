import Link from 'next/link'
import { contractOptions, contractMetadata } from 'constants/contractOptions'
import { ercWizardDocsHref } from 'constants/hrefs'
import PageTitle from 'components/PageTitle'
import { ArrowUpRightIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

const ContractsList = () => {
  return (
    <section className="min-h-[calc(100vh-261px)] max-w-[1280px] mx-auto flex flex-col">
      <PageTitle title="create smart contract" description="contracts" />
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-[1px]">
          <thead className="uppercase bg-neutral-900 text-neutral-400 border-b border-neutral-800">
            <tr className="h-16">
              <th scope="col" className="px-4 font-normal whitespace-nowrap">
                type
              </th>
              <th scope="col" className="px-4 font-normal w-20 text-center">
                tier
              </th>
              <th scope="col" className="px-4 font-normal w-20 text-center">
                docs
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(contractOptions).map((standard) =>
              contractOptions[standard].tier.map((tier) => (
                <tr
                  key={standard + tier}
                  className="whitespace-nowrap bg-neutral-900 hover:bg-neutral-800 ease-in duration-150"
                >
                  <td className="h-16">
                    <Link href={`/create/${standard}/${tier}`}>
                      <a className="flex items-center justify-between w-full h-full px-4 cursor-pointer uppercase space-x-4">
                        <div className="flex items-center w-36">
                          <span
                            className="form-tooltip cursor-help text-neutral-400"
                            data-tooltip={contractMetadata[standard][tier].description}
                          >
                            <InformationCircleIcon className="w-5 h-5 mr-4 text-neutral-700" />
                          </span>
                          {standard}
                        </div>
                        <div className="space-x-4">
                          {contractMetadata[standard][tier].tags.map((tag) => (
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
                    <span className="flex items-center justify-center text-neutral-400 py-1 px-2 w-24 uppercase">
                      {contractMetadata[standard][tier].tier}
                    </span>
                  </td>
                  <td className="h-16">
                    <a
                      href={`${ercWizardDocsHref}contracts/${standard}/${tier}`}
                      aria-label="documentation"
                      className="flex items-center justify-center uppercase whitespace-nowrap px-4 h-full text-neutral-400 hover:text-white"
                    >
                      <ArrowUpRightIcon className="h-5 w-5" />
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ContractsList
