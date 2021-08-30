import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { styled } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import RequestQuoteIcon from '@material-ui/icons/RequestQuote'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import ArticleIcon from '@material-ui/icons/Article'
import BuildIcon from '@material-ui/icons/Build'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'

const StyledStack = styled(Stack)(({ theme }) => ({
  [`&::after`]: {
    content: "''",
    display: 'block',
    width: 1,
    height: 58,
    opacity: 0.1,
    borderLeft: '1px solid #fff',
    margin: '20px auto',
  },
  [`&:last-child::after`]: {
    display: 'none',
  },
}))

export default function Works() {
  const steps = [
    {
      name: 'CONTACT',
      description: 'You specify an audit-ready code commit through the email below.',
      icon: (
        <ContactSupportIcon
          sx={{ color: blue[900], fontSize: 70 }}
        />
      )
    },
    {
      name: 'QUOTE',
      description: 'You get a quote and timeline.',
      icon: (
        <RequestQuoteIcon
          sx={{ color: blue[900], fontSize: 70 }}
        />
      ),
    },
    {
      name: 'AUDIT',
      description: 'We start the audit.',
      icon: (
        <FindInPageIcon
          sx={{ color: blue[900], fontSize: 70 }}
        />
      ),
    },
    {
      name: 'REPORT',
      description: 'We privately send the report to your team.',
      icon: (
        <ArticleIcon
          sx={{ color: blue[900], fontSize: 70 }}
        />
      ),
    },
    {
      name: 'FIXES',
      description: 'Your team fixes the issues.',
      icon: (
        <BuildIcon
          sx={{ color: blue[900], fontSize: 70 }}
        />
      ),
    },
    {
      name: 'PUBLISH',
      description: 'We examine your fixes, update and publish the report (optional).',
      icon: (
        <VerifiedUserIcon
          sx={{ color: blue[900], fontSize: 70 }}
        />
      ),
    },
  ]

  return (
    <>
      <Box
        sx={{
          bgcolor: '#202328',
          pt: 7,
          pb: 7,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: 700, color: '#fff' }}
            fontFamily="Ubuntu"
            gutterBottom
          >
            How a Smart Contract Audit Works
          </Typography>
        </Container>

        <Container maxWidth="xs">
          {
            steps.map((step, index) => (
              <StyledStack
                key={index}
                sx={{ pt: index === 0 ? 6 : 0 }}
                direction="column"
                spacing={{ xs: 2, sm: 2, md: 3 }}
              >
                <Stack spacing={0}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    {step['icon']}
                  </Box>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    fontFamily="Ubuntu"
                    sx={{ fontWeight: 500, color: '#fff' }}
                  >
                    {step['name']}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    align="center"
                    sx={{ color: '#9C9C9C' }}
                  >
                    {step['description']}
                  </Typography>
                </Stack>
              </StyledStack>
            ))
          }
        </Container>
      </Box>
    </>
  )
}
