import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import PeopleIcon from '@material-ui/icons/People'
import CoronavirusIcon from '@material-ui/icons/Coronavirus'

import Product from './product'
import Community from './community'

export default function Service() {
  const products = [
    {
      name: 'Smart Contract Audits',
      description: 'We offer comprehensive code reviews for teams that are preparing to launch their blockchain applications.',
      buttonText: 'Request an audit',
      icon: (
        <VerifiedUserIcon
          sx={{ color: '#4E5EE4', fontSize: 50 }}
        />
      ),
    },
    {
      name: 'Enterprise Security Counseling',
      description: 'We support enterprises at all stages of the blockchain development lifecycle with testing, auditing, and formal verification.',
      buttonText: 'Contact us',
      icon: (
        <PeopleIcon
          sx={{ color: '#4E5EE4', fontSize: 50 }}
        />
      )
    },
    {
      name: 'Threat Modeling',
      description: 'We help you identify entry points for potential hackers, visualize your project’s attack surface, and continually update your threat model for evolving risks.',
      buttonText: 'Contact us',
      icon: (
        <CoronavirusIcon
          sx={{ color: '#4E5EE4', fontSize: 50 }}
        />
      )
    },
  ]

  return (
    <>
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
            Our Products and Services
          </Typography>

          <Grid
            container
            spacing={4}
            sx={{ pt: 7 }}
          >
            {
              products.map((product, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Product item={product} />
                </Grid>
              ))
            }
          </Grid>

          <Community />
        </Container>
      </Box>
    </>
  )
}
