import { useCallback, useEffect, useState } from 'react'
import { skipToken } from '@reduxjs/toolkit/query/react'
import { Trans, t } from '@lingui/macro'
import ms from 'ms.macro'

import Container from '@material-ui/core/Container'

import Layout from '../../components/layout'
import Header from '../../components/audits/header'
import AuditTable from '../../components/audits/table'

import { useGetAuditsQuery } from '../../state/audits/slice'

export default function Audits() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    //
  }, [])

  const { isLoading, isError, data } = useGetAuditsQuery(
    {
      sort: 'desc',
      page,
      limit: 30,
      sortField: 'project',
      sortDirection: 'asc',
    },
    { pollingInterval: ms`2h` }
  )

  const handleChange = useCallback(
    (e, value) => {
      setPage(value)
    },
    [data]
  )

  return (
    <>
      <Container maxWidth="lg" component="header">
        <Header />
        <AuditTable
          isLoading={isLoading}
          isError={isError}
          data={data}
          page={page}
          onPageChange={handleChange}
        />
      </Container>
    </>
  )
}

Audits.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
