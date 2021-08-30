import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

export default function Benefit() {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 6,
          pb: 9,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="subtitle1"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ textTransform: 'uppercase' }}
          >
            Perform security audits on leading systems and products
          </Typography>

          <Stack
            sx={{ pt: 4 }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 3, sm: 3, md: 7 }}
            justifyContent="center"
          >
            <Stack spacing={0}>
              <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: 900, color: '#2C56DD', lineHeight: 0.7 }}
              >
                30+
              </Typography>
              <Typography
                variant="h6"
                align="center"
                sx={{ color: '#000' }}
                fontFamily="Ubuntu"
              >
                issues discovered
              </Typography>
            </Stack>

            <Stack spacing={0}>
              <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: 900, color: '#2C56DD', lineHeight: 0.7 }}
              >
                1,000+
              </Typography>
              <Typography
                variant="h6"
                align="center"
                sx={{ color: '#000' }}
                fontFamily="Ubuntu"
              >
                analyses available per month
              </Typography>
            </Stack>

            <Stack spacing={0}>
              <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: 900, color: '#2C56DD', lineHeight: 0.7 }}
              >
                1,200+
              </Typography>
              <Typography
                variant="h6"
                align="center"
                sx={{ color: '#000' }}
                fontFamily="Ubuntu"
              >
                public audits scanned
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 6,
          pb: 12,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: 700, color: '#000' }}
            fontFamily="Ubuntu"
            gutterBottom
          >
            Benefits of Our Smart Contract Audit Service
          </Typography>

          <Stack
            sx={{ pt: 7 }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 2, md: 3 }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Stack spacing={2}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: '#4e5ee4' }}
              >
                Expert Review
              </Typography>
              <Typography
                variant="body1"
              >
                Veteran security auditors manually double-check your code to eliminate potential vulnerabilities.
              </Typography>
            </Stack>

            <Stack spacing={2}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: '#4e5ee4' }}
              >
                Avoid Costly Errors
              </Typography>
              <Typography
                variant="body1"
              >
                Auditing your code early in the development lifecycle prevents potentially catastrophe after launch.
              </Typography>
            </Stack>

            <Stack spacing={2}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: '#4e5ee4' }}
              >
                Continuous Verification
              </Typography>
              <Typography
                variant="body1"
              >
                Monitor any security vulnerabilities as you write and change code.
              </Typography>
            </Stack>

            <Stack spacing={2}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: '#4e5ee4' }}
              >
                Detailed Analytics Reports
              </Typography>
              <Typography
                variant="body1"
              >
                Receive a vulnerability report with an executive summary, vulnerability details, and mitigation guidance.
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
