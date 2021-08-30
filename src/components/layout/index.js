import Head from 'next/head'

import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta content="IE=Edge" httpEquiv="X-UA-Compatible" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="Our smart contract audits help everyone from startups to enterprises protect their blockchain applications with confidence." />

        <meta property="og:site_name" content="cShield Security" />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="Smart Contract Audits | cShield Security" />
        <meta property="og:description" content="Our smart contract audits help everyone from startups to enterprises protect their blockchain applications with confidence." />
        <meta property="og:url" content="https://cshield.org/" />
        <meta property="og:image" content="https://cshield.org/images/card.jpg" />
        <meta property="og:image:secure_url" content="https://cshield.org/images/card.jpg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@cshieldsec" />
        <meta name="twitter:creator" content="@cshieldsec" />
        <meta name="twitter:title" content="cShield Security" />
        <meta name="twitter:description" content="Our smart contract audits help everyone from startups to enterprises protect their blockchain applications with confidence." />
        <meta name="twitter:image" content="https://cshield.org/images/card.jpg" />

        <link rel="icon" href="/favicon.ico" />

        <title>Smart Contract Audits | cShield Security</title>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap"
        />
      </Head>

      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}
