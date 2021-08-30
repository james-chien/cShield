import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Trans, t } from '@lingui/macro'

import Layout from '../../../components/layout'
import Header from '../../../components/jobs/header'
import Description from '../../../components/jobs/description'

export default function Opening() {
  const router = useRouter()
  const { jid } = router.query

  useEffect(() => {
    //
  }, [])

  return (
    <>
      <Header />
      <Description jid={jid} />
    </>
  )
}

Opening.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
