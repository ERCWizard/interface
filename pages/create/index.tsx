import type { NextPage } from 'next'
import Seo from 'components/Seo'
import ContractsList from 'components/ContractsList'

const Create: NextPage = () => {
  return (
    <div>
      <Seo title="Create" />
      <ContractsList />
    </div>
  )
}

export default Create
