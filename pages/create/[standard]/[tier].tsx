import type { NextPage } from 'next'
import Seo from 'components/Seo'
import Form from 'components/Form'
import { contractOptions } from 'constants/contractOptions'

export async function getStaticPaths() {
  const params: {
    params: {
      standard: string
      tier: string
    }
  }[] = []

  Object.keys(contractOptions).forEach((standard) =>
    contractOptions[standard].tier.forEach((tier) =>
      params.push({
        params: {
          standard,
          tier: tier.toString(),
        },
      })
    )
  )

  return {
    paths: params,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { standard: string; tier: string } }) {
  return {
    props: { standard: params.standard, tier: params.tier },
  }
}

const ContractsListItem: NextPage<{ standard: string; tier: string }> = ({ standard, tier }) => {
  return (
    <div>
      <Seo title={standard} />
      <Form standard={standard} tier={tier} />
    </div>
  )
}

export default ContractsListItem
