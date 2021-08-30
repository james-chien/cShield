import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Box from '@material-ui/core/Box'
import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function Header() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'))

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 2,
        }}
      >
        <Typography
          component="h4"
          variant="h4"
          align="left"
          color="text.primary"
          sx={{ fontWeight: 700, color: '#000' }}
          fontFamily="Ubuntu"
          gutterBottom
        >
          Public Audits
        </Typography>

        <Typography
          variant="body1"
          align="left"
          sx={{ color: '#4C4C4C', width: matches ? '50%' : '100%' }}
          paragraph
        >
          cShield has scanned a wide range of projects across the
          blockchain ecosystem to ensure their protocols are ready for users
          to use.
        </Typography>
      </Box>
    </>
  )
}
