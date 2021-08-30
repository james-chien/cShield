import { useCallback, useEffect, useState, cloneElement } from 'react'

import Box from '@material-ui/core/Box'
import Stack from '@material-ui/core/Stack'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import CloseIcon from '@material-ui/icons/Close'

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Menu = () => {
  return (
    <>
      <Link
        href="/audits"
        underline="none"
        color="inherit"
      >
        <Button
          color="inherit"
        >
          Audits
        </Button>
      </Link>

      <Link
        href="https://cshield-security.medium.com/"
        underline="none"
        color="inherit"
        target="_blank"
        rel="noopener"
      >
        <Button
          color="inherit"
        >
          Blog
        </Button>
      </Link>

      <Link
        href="/jobs"
        underline="none"
        color="inherit"
      >
        <Button
          color="inherit"
        >
          Jobs
        </Button>
      </Link>

      <Link
        href="/contact"
        underline="none"
        color="inherit"
      >
        <Button
          color="inherit"
        >
          Contact
        </Button>
      </Link>
    </>
  )
}

export default function Header(props) {
  const [open, setOpen] = useState(false);

  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'))

  const handleClickOpen = (e) => {
    setOpen(!open)
  }

  const handleClose = (e) => {
    setOpen(false)
  }

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar sx={{ bgcolor: '#000' }}>
          <Toolbar>
            <img
              src="/images/logo.png"
              alt="logo"
              width="20"
              height="20"
            />

            <Link
              href="/"
              underline="none"
              color="inherit"
            >
              <Typography
                variant="h6"
                sx={{ ml: 1, fontWeight: 700 }}
                fontFamily="Ubuntu"
                noWrap
              >
                cShield
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1 }}></Box>

            {
              matches && (
                <>
                  <Menu />
                </>
              )
            }

            {
              !matches && (
                <>
                  <IconButton
                    onClick={handleClickOpen}
                  >
                    {
                      open ? (
                        <MenuOpenIcon sx={{ color: 'white' }} />
                      ) : (
                        <MenuIcon sx={{ color: 'white' }} />
                      )
                    }

                  </IconButton>
                </>
              )
            }
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Toolbar />

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            bgcolor: '#121212',
            color: 'white',
            p: 3,
          }}
        >
          <IconButton
            onClick={handleClose}
          >
            <CloseIcon
              sx={{ color: 'white' }}
            />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            bgcolor: '#121212',
            color: 'white',
          }}
        >
          <Stack
            direction="column"
            spacing={2}
            sx={{ pt: 8 }}
          >
            <Menu />
          </Stack>
        </Box>
      </Dialog>
    </>
  )
}
