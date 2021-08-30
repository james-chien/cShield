import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Trans, t } from '@lingui/macro'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import Auditor from './auditor'
import Developer from './developer'
import Marketing from './marketing'

export default function Description({ jid }) {
  const router = useRouter()

  const handleBack = (e) => {
    router.replace('/jobs')
  }

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 12,
        }}
      >
        <Container
          maxWidth="sm"
          sx={{ position: 'relative' }}
        >
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            sx={{ position: 'absolute', left: -200 }}
            onClick={handleBack}
          >
            All Openings
          </Button>

          {
            jid == 1 && (
              <Auditor />
            )
          }

          {
            jid == 2 && (
              <Developer />
            )
          }

          {
            jid == 3 && (
              <Marketing />
            )
          }
        </Container>
      </Box>
    </>
  )
}
