import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import Layout from '../../components/layout'

export default function Contact() {
  useEffect(() => {
    //
  }, [])

  const iframe = () => {
    return {
      __html: `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfh8BdDqx6cHovQvnCmrRiCGJSn4qenTyYPWTAEvyf2jueFFg/viewform?embedded=true" width="700" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`,
    }
  }

  return (
    <>
      <Container maxWidth="sm" component="header">
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
            align="center"
            color="text.primary"
            sx={{ fontWeight: 700, color: '#000' }}
            fontFamily="Ubuntu"
            gutterBottom
          >
            Request a Security Audit
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ color: '#4C4C4C' }}
            paragraph
          >
            Use the form below to request a smart contract security audit.
            Please provide as many details as possible to help our team prepare
            an accurate estimate.
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 0,
          }}
        >
          <div dangerouslySetInnerHTML={ iframe() } />
        </Box>
      </Container>
    </>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
