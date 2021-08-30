import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

export default function Header() {
  return (
    <>
      <Box
        sx={{
          bgcolor: '#2c56dd',
          pt: 3,
          pb: 3,
        }}
      >
        <Container maxWidth="sm" component="header">
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            sx={{ fontWeight: 500, color: '#fff' }}
            fontFamily="Ubuntu"
            gutterBottom
          >
            Current openings
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ color: '#fff' }}
          >
            Find the best place for you at cShield
          </Typography>
        </Container>
      </Box>
    </>
  )
}
