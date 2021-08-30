import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { Trans, t } from '@lingui/macro'
import indexOf from 'lodash/indexOf'
import moment from 'moment-timezone'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import CircularProgress from '@material-ui/core/CircularProgress'
import Pagination from '@material-ui/core/Pagination'
import { styled } from '@material-ui/core/styles'

const StyledTableCell = styled(TableCell)({
  textTransform: 'uppercase',
  paddingBottom: 8,
  fontWeight: 600,
  borderBottom: '1px solid #202328',

  '&:first-of-type': {
    paddingLeft: 0,
  },
  '&:last-child': {
    paddingRight: 0,
  },
})

const StyledTableRow = styled(TableRow)({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
})

const StyledImage = styled(Image)({
  // borderRadius: '50%',
})

export default function AuditTable({ isLoading, isError, data, page, onPageChange }) {
  const chainIcon = (chain) => {
    switch(chain) {
      case 'Ethereum':
        return (
          <Image
            src="https://safefiles.defiyield.info/safe/files/network/ethereum.png"
            width={24}
            height={24}
            title={chain}
          />
        )
      case 'Binance Smart Chain':
        return (
          <Image
            src="https://safefiles.defiyield.info/safe/files/network/bsc.png"
            width={24}
            height={24}
            title={chain}
          />
        )
      case 'OKExChain':
        return (
          <Image
            src="https://safefiles.defiyield.info/safe/files/network/okexchain.png"
            width={24}
            height={24}
            title={chain}
          />
        )
      case 'xDAI':
        return (
          <Image
            src="https://safefiles.defiyield.info/safe/files/network/xdai.png"
            width={24}
            height={24}
            title={chain}
          />
        )
      case 'Heco':
        return (
          <Image
            src="https://safefiles.defiyield.info/safe/files/network/huobi.png"
            width={24}
            height={24}
            title={chain}
          />
        )
      case 'Polygon':
        return (
          <Image
            src="https://safefiles.defiyield.info/safe/files/network/polygon.png"
            width={24}
            height={24}
            title={chain}
          />
        )
      case 'Fantom':
        return (
          <Image
            src="https://safefiles.defiyield.info/safe/files/network/fantom.png"
            width={24}
            height={24}
            title={chain}
          />
        )
      case 'TRON':
        return (
          <Image
            src="https://safefiles.defiyield.info/safe/files/network/tron.png"
            width={24}
            height={24}
            title={chain}
          />
        )
      case 'Solana':
        return (
          <Image
            src="https://safefiles.defiyield.info/safe/files/network/solana.png"
            width={24}
            height={24}
            title={chain}
          />
        )
      case 'Avax':
        return (
          <Image
            src="https://safefiles.defiyield.info/safe/files/network/avax.png"
            width={24}
            height={24}
            title={chain}
          />
        )
      case 'EOS':
        return (
          <Image
            src="https://safefiles.defiyield.info/safe/files/network/eos.png"
            width={24}
            height={24}
            title={chain}
          />
        )
      default:
        return null
    }
  }

  const parseNetwork = useCallback(
    (networks) => {
      let result = {
        chains: [],
        tokens: [],
      }

      networks.map((item) => {
        if (item['networks'] && indexOf(result['chains'], item['networks']['name']) === -1) {
          result['chains'].push(item['networks']['name'])
        }
        if (item['token_ticker'] && indexOf(result['tokens'], item['token_ticker']) === -1) {
          result['tokens'].push(item['token_ticker'])
        }
      })
      result['tokens'] = result['tokens'].join(', ')

      return result
    },
    [data]
  )

  const parsePartner = useCallback(
    (partners) => {
      let result = {
        issues: 0,
        auditors: [],
        revisionDate: '1970-01-01',
      }

      partners.map((item) => {
        result['issues'] += item['tech_issues']
        if (item['partner'] && indexOf(result['auditors'], item['partner']['name']) === -1) {
          result['auditors'].push(item['partner']['name'])
        }
        if (moment(item['date']).isAfter(result['revisionDate'])) {
          result['revisionDate'] = item['date']
        }
      })

      if (result['revisionDate'] == '1970-01-01') {
        result['revisionDate'] = null
      }

      return result
    },
    [data]
  )

  return (
    <>
      <TableContainer
        sx={{ mb: 12 }}
      >
        <Table sx={{ minWidth: '100%' }} aria-label="audit table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Project Name</StyledTableCell>
              <StyledTableCell>Chain</StyledTableCell>
              <StyledTableCell>Token</StyledTableCell>
              <StyledTableCell>Issues</StyledTableCell>
              <StyledTableCell>Auditors</StyledTableCell>
              <StyledTableCell>Revision Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              !isLoading && data && data['items'].map((item, index) => (
                <StyledTableRow
                  key={index}
                >
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <StyledImage
                        src={`https://safefiles.defiyield.info/${item['logo_link']}`}
                        width={30}
                        height={30}
                      />

                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: '#121212' }}
                      >
                        {item['project_name']}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {
                      parseNetwork(item['auditNetworks'])['chains'].map((chain, index) => (
                        <Box
                          key={index}
                          component="span"
                          sx={{ mr: 0.5 }}
                        >
                          {chainIcon(chain)}
                        </Box>
                      ))
                    }
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="subtitle1"
                    >
                      {parseNetwork(item['auditNetworks'])['tokens']}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 500, color: '#ff9500' }}
                    >
                      {parsePartner(item['partnerAudits'])['issues']}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {parsePartner(item['partnerAudits'])['auditors'].length}
                  </TableCell>
                  <TableCell>
                    {parsePartner(item['partnerAudits'])['revisionDate'] ?? null}
                  </TableCell>
                </StyledTableRow>
              ))
            }
          </TableBody>
        </Table>

        {
          !isLoading && data && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 8,
              }}
            >
              <Pagination
                size="large"
                count={data['lastPage']}
                page={page}
                onChange={onPageChange}
              />
            </Box>
          )
        }

        {
          isLoading && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                m: 8,
              }}
            >
              <CircularProgress />
            </Box>
          )
        }
      </TableContainer>
    </>
  )
}
