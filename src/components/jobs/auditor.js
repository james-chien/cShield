import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export default function Auditor() {
  return (
    <>
      <Stack
        direction="column"
        spacing={1}
        justifyContent="left"
      >
        <Typography
          component="h4"
          variant="h4"
          align="left"
          color="text.primary"
          sx={{ fontWeight: 500 }}
        >
          Security Auditor / White Hat Hacker
        </Typography>
        <Typography
          variant="subtitle1"
          align="left"
          sx={{ textTransform: 'uppercase', opacity: .5 }}
        >
          Remote
        </Typography>
      </Stack>

      <Stack
        direction="column"
        spacing={1}
        justifyContent="left"
        sx={{ mt: 3 }}
      >
        <Typography
          component="h6"
          variant="h6"
          align="left"
          color="text.primary"
          sx={{ fontWeight: 500 }}
        >
          What you&apos;ll be doing
        </Typography>
        <Typography
          variant="body1"
          align="left"
        >
          We are looking for passionate smart contract security researchers or developers.
        </Typography>
        <Typography
          variant="body1"
          align="left"
        >
          Candidates should have a strong understanding of security primitives
          and be up-to-date with current exploits. Awareness of the current
          DeFi landscape is a big plus, and experience with exploitation techniques
          of financial protocols is a valued skill. You should also be aware
          of how the EVM works, and the idiosyncrasies which can lead to vulnerabilities
          when developers don’t properly understand them. You will have the opportunity
          to work with and learn from some of the brightest minds in the space,
          to see how we approach hacking, threat modelling, scanning, auditing,
          designing and enhancing the security of smart contracts across the board.
        </Typography>
        <Typography
          variant="body1"
          align="left"
        >
          Alongside client work, we also provide you with plenty of time for
          research and development efforts where you can push the state of the
          art and science of blockchain security.
        </Typography>
        <Typography
          variant="body1"
          align="left"
        >
          Most of the work can be done remotely from wherever you are; little
          travel is anticipated (most of the team works remotely around the world).
          Along with a focus on technical excellence, we also believe firmly that
          culture and processes play an essential role in security.
        </Typography>
        <Typography
          variant="body1"
          align="left"
        >
          We are looking for exceptionally intellectual, bright and technically
          driven individuals who can communicate their ideas clearly while working
          with clients to achieve their security objectives.
        </Typography>
      </Stack>

      <Stack
        direction="column"
        spacing={1}
        justifyContent="left"
        sx={{ mt: 3 }}
      >
        <Typography
          component="h6"
          variant="h6"
          align="left"
          color="text.primary"
          sx={{ fontWeight: 500 }}
        >
          You have
        </Typography>

        <ul>
          <li>
            Experience developing and building on top of DeFi protocols or other smart contracts
          </li>
          <li>
            Experience describing or assessing smart contract specific security risks
          </li>
          <li>
            Demonstrated expertise with Solidity, the EVM, and blockchain
          </li>
          <li>
            Demonstrated ability to work well with clients, and communicate clearly and concisely in a written format
          </li>
        </ul>
      </Stack>

      <Stack
        direction="column"
        spacing={1}
        justifyContent="left"
        sx={{ mt: 3 }}
      >
        <Typography
          component="h6"
          variant="h6"
          align="left"
          color="text.primary"
          sx={{ fontWeight: 500 }}
        >
          Nice to have
        </Typography>

        <ul>
          <li>
            A portfolio of blog posts or presentations on DeFi or security related topics
          </li>
          <li>
            Experience working in the Financial sector or as a financial analyst
          </li>
          <li>
            Publicly visible audit reports in your portfolio
          </li>
          <li>
            BS degree or higher in a relevant field or equivalent practical experience
          </li>
          <li>
            Experience building tooling in javascript, typescript or python
          </li>
        </ul>
      </Stack>
    </>
  )
}
