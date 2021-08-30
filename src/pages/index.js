import { useEffect } from 'react'
import { Trans, t } from '@lingui/macro'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Benefit from '../components/benefit'
import Works from '../components/works'
import Service from '../components/service'

import { useUserLocaleManager } from '../state/user/hooks'

export default function Home() {
  const [userLocale, setUserLocale] = useUserLocaleManager()

  useEffect(() => {
    // setUserLocale('en-US')
  }, [])

  return (
    <>
      <Hero />
      <Benefit />
      <Works />
      <Service />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
