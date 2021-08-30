import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import { styled } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const StyledAvatar = styled(Avatar)({
  transition: 'transform .4s ease',

  '&:hover': {
    transform: 'translateY(-1px)',
  },
  '& img': {
    objectFit: 'contain',
  },
});

export default function Community({ item }) {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'))

  return (
    <>
      <Box
        sx={{
          pt: 15,
          pb: 8,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: 700, color: '#000' }}
          fontFamily="Ubuntu"
          gutterBottom
        >
          Join our community
        </Typography>

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={{ xs: 3, sm: 3, md: 7 }}
          justifyContent="center"
        >
          <Link
            href="https://t.me/cshield"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            <StyledAvatar
              alt="Telegram"
              src="/images/telegram.png"
              variant="square"
              sx={{ width: matches ? 88 : 44, height: matches ? 88 : 44 }}
            />
          </Link>

          <Link
            href="https://discord.gg/cardDmBh"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            <StyledAvatar
              alt="Discord"
              src="/images/discord.png"
              variant="square"
              sx={{ width: matches ? 88 : 44, height: matches ? 88 : 44 }}
            />
          </Link>

          <Link
            href="https://twitter.com/cshieldsec"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            <StyledAvatar
              alt="Twitter"
              src="/images/twitter.png"
              variant="square"
              sx={{ width: matches ? 88 : 44, height: matches ? 88 : 44 }}
            />
          </Link>

          <Link
            href="https://cshield-security.medium.com/"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            <StyledAvatar
              alt="Medium"
              src="/images/medium.png"
              variant="square"
              sx={{ width: matches ? 88 : 44, height: matches ? 88 : 44 }}
            />
          </Link>
        </Stack>
      </Box>
    </>
  )
}
