import { useEffect } from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#202328', p: 3 }} component="footer">
      <Typography
        variant="body2"
        align="center"
        color="common.white"
        component="p"
      >
        Blockchain Security & Ethereum Smart Contract Audits
      </Typography>

      <Typography
        variant="body2"
        align="center"
        color="common.white"
      >
        {'© cShield Security '}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  )
}
