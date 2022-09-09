import type { NextPage } from 'next'
import Seo from 'components/Seo'
import Contracts from 'components/Contracts'

const Dashboard: NextPage = () => {
  return (
    <div>
      <Seo title="Dashboard" />
      <Contracts />
    </div>
  )
}

export default Dashboard
