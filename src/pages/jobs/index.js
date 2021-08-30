import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import Layout from '../../components/layout'
import Header from '../../components/jobs/header'

export default function Jobs() {
  useEffect(() => {
    //
  }, [])

  return (
    <>
      <Header />

      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 18,
        }}
      >
        <Container maxWidth="md">
          <Stack
            direction="column"
            spacing={3}
            justifyContent="center"
          >
            <Link
              href="/jobs/opening/1"
              underline="none"
              color="inherit"
            >
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  border: '1px solid #D5D5D5',
                  p: 3,
                }}
              >
                <Typography
                  component="h6"
                  variant="h6"
                  align="left"
                  color="text.primary"
                  sx={{ fontWeight: 500 }}
                >
                  Security Auditor / White Hat Hacker
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="left"
                  sx={{ textTransform: 'uppercase', opacity: .5 }}
                >
                  Remote
                </Typography>
              </Box>
            </Link>

            <Link
              href="/jobs/opening/2"
              underline="none"
              color="inherit"
            >
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  border: '1px solid #D5D5D5',
                  p: 3,
                }}
              >
                <Typography
                  component="h6"
                  variant="h6"
                  align="left"
                  color="text.primary"
                  sx={{ fontWeight: 500 }}
                >
                  Full Stack Ethereum Developer
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="left"
                  sx={{ textTransform: 'uppercase', opacity: .5 }}
                >
                  Remote
                </Typography>
              </Box>
            </Link>

            <Link
              href="/jobs/opening/3"
              underline="none"
              color="inherit"
            >
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  border: '1px solid #D5D5D5',
                  p: 3,
                }}
              >
                <Typography
                  component="h6"
                  variant="h6"
                  align="left"
                  color="text.primary"
                  sx={{ fontWeight: 500 }}
                >
                  Head of Marketing
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="left"
                  sx={{ textTransform: 'uppercase', opacity: .5 }}
                >
                  Remote
                </Typography>
              </Box>
            </Link>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

Jobs.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
