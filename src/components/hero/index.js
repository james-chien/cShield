import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

export default function Hero() {
  return (
    <>
      <Box
        sx={{
          bgcolor: '#121212',
          backgroundSize: '150%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(/images/bg_home.svg)',
          pt: 8,
          pb: 8,
        }}
      >
        <Container maxWidth="sm" component="header">
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="text.primary"
            sx={{ fontWeight: 700, color: '#fff' }}
            fontFamily="Ubuntu"
            gutterBottom
          >
            The Most Trusted Ethereum Smart Contract Audits
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{ color: '#B1B1B2' }}
            paragraph
          >
            In an economy where software code powers real money, security is a top priority.
            cShield specializes in auditing in high-impact decentralized systems.
          </Typography>

          <Stack
              sx={{ pt: 3 }}
              direction="row"
              spacing={2}
              justifyContent="center"
          >
            <Link
              href="/contact"
              underline="none"
              color="inherit"
            >
              <Button
                variant="contained"
                size="large"
                disableElevation
                sx={{ fontWeight: 600 }}
              >
                Request Our Services
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
