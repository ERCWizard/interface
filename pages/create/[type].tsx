import type { NextPage } from 'next'
import Seo from 'components/Seo'
import Form from 'components/Form'
import { contractOptions } from 'constants/contractOptions'

export async function getStaticPaths() {
  const paths = contractOptions.map((contractOption) => ({
    params: { type: contractOption },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { type: string } }) {
  return {
    props: {
      type: params.type,
    },
  }
}

const ContractsListItem: NextPage<{ type: string }> = ({ type }) => {
  return (
    <div>
      <Seo title={type} />
      <Form type={type} />
    </div>
  )
}

export default ContractsListItem
