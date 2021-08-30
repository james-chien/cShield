import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export default function Marketing() {
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
          Head of Marketing
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

        <ul>
          <li>
            Develop project’s marketing plans and strategy, including - among
            other things - defining the value proposition, positioning and messaging
            frameworks by persona and segment (users, investors, node runners).
          </li>
          <li>
            Drive awareness, grow community and nurture adoption of users, investors,
            and node runners, through partner activities, content marketing, PR,
            webinars, social and online marketing, and cShield and third-party
            events, among others.
          </li>
          <li>
            Design and execute content plans targeted to the user, node runner,
            and investor communities. Identify topics and motivate the cShield
            organization and external community members to create original content.
            This may include blog posts, research and reports, project updates, guides,
            case studies, presentations and sales material.
          </li>
          <li>
            Create a healthy culture in both technical and investor communities
            founded on value creation, core values, and a code of conduct.
            Foster conversations, manage expectations, and resolve conflicts within
            community forums and social media channels. Hire and manage a team of
            community managers.
          </li>
          <li>
            Work closely with the cShield team and industry experts to ensure
            effective thought leadership and ongoing relevance in the market.
          </li>
          <li>
            Define execution timelines, channels and audience needs intended to
            grow project’s position as the leader in the blockchain cybersecurity space.
          </li>
          <li>
            Create branding, website, blog, community forums, and social media
            accounts for the project.
          </li>
          <li>
            Establish KPIs for all of your team’s efforts and track performance
            to ensure marketing plans are delivering expected business outcomes
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
          You have
        </Typography>

        <ul>
          <li>
            1+ years of work experience with DeFi, NFT or Ethereum related projects
          </li>
          <li>
            A minimum of 5 years of experience in community or technical marketing
            roles at fintech, cybersecurity, or similar companies. Experience leading
            marketing strategies on an English-speaking, global scale.
          </li>
          <li>
            Experience in fostering a global community through user group support and outreach programs
          </li>
          <li>
            Data-driven approach to community building, including understanding
            how to measure the health and success of a developer community.
          </li>
          <li>
            The ability to effectively communicate to both technical and non-technical audiences with ease
          </li>
          <li>
            Ability to manifest technical vision/direction via compelling positioning and messaging
          </li>
          <li>
            Demonstrated experience working collaboratively across teams to successfully launch new products and features.
          </li>
          <li>
            Excellence in verbal and written communication, with the ability to create succinct, compelling messaging
          </li>
          <li>
            Compelling storyteller with a strategic and analytical mindset who can engage and educate customers and investors.
          </li>
          <li>
            Strong personal organizational skills and a love for self-time management.
          </li>
          <li>
            Superb organization and project management skills. Ability to work on
            and manage multiple complex projects with multiple stakeholders, at once.
          </li>
          <li>
            A startup mentality with a bias to action and the ability to be flexible in a fast-paced environment.
          </li>
          <li>
            Passion and/or experience with open-source or cybersecurity or similar highly technical industry.
          </li>
        </ul>
      </Stack>
    </>
  )
}
