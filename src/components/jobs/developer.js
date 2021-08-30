import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export default function Developer() {
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
          Full Stack Ethereum Developer
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
          As a Full Stack Ethereum Developer, you will join the team working on
          products at cShield, including new products for secure operations. All
          of our work integrates with Solidity smart contracts, so experience and
          understanding working with Ethereum and EVM-compatible blockchains is a must.
        </Typography>
        <Typography
          variant="body1"
          align="left"
        >
          In this role, you will play an essential part in building new components,
          communicating with our users to gather feedback, and working collaboratively
          with the rest of the team to make sure we solve important problems and
          provide a great user experience.
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
            3+ years of experience in full stack web or Ethereum development.
          </li>
          <li>
            Good understanding of Ethereum and Solidity.
          </li>
          <li>
            Experience with Node.js (Typescript) or Go.
          </li>
          <li>
            Experience with at least one of the following UI frameworks: React, Vue, Svelte.
          </li>
          <li>
            Strong desire to learn about Ethereum and contribute to the blockchain space.
          </li>
          <li>
            Prior experience working remotely: strong personal organizational skills,
            a love for self-time management, and ability to work collaboratively with a team.
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
            Good understanding of security concerns in the Ethereum ecosystem.
          </li>
          <li>
            Working knowledge of AWS services such as Lambda, DynamoDB, CloudFormation.
          </li>
        </ul>
      </Stack>
    </>
  )
}
