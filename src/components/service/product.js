import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import { styled } from '@material-ui/core/styles'

const ContactButton = styled(Button)({
  transition: 'transform .4s ease',

  '&:hover': {
    backgroundColor: '#202328',
    transform: 'translateY(-1px)',
  },
});

export default function Product({ item }) {
  return (
    <>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 1,
            }}
          >
            {item['icon']}
          </Box>

          <Typography
            variant="subtitle1"
            component="div"
            align="center"
            fontFamily="Ubuntu"
            sx={{ pb: 1, fontWeight: 600, color: '#4E5EE4' }}
          >
            {item['name']}
          </Typography>

          <Divider sx={{ mt: 2, mb: 2 }} />

          <Typography
            variant="body1"
            align="center"
          >
            {item['description']}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ pb: 3, justifyContent: 'center' }}
        >
          <Link
            href="/contact"
            underline="none"
            color="inherit"
          >
            <ContactButton
              variant="contained"
              disableElevation
              sx={{ color: '#fff', bgcolor: '#282846' }}
            >
              {item['buttonText']}
            </ContactButton>
          </Link>
        </CardActions>
      </Card>
    </>
  )
}
