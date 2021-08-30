import { isMobile } from 'react-device-detect'
import ReactGA from 'react-ga'

// Redux
import { Provider } from 'react-redux'
import store from '../state'

import NetworkUpdater from '../state/network/updater'

// Material-UI
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { CacheProvider } from '@emotion/react'
import theme, { ThemedGlobalStyle } from '../theme'
import { createEmotionCache } from '../utils/createEmotionCache'

import { LanguageProvider } from '../i18n'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
if (typeof GOOGLE_ANALYTICS_ID === 'string') {
  ReactGA.initialize(GOOGLE_ANALYTICS_ID, {
    gaOptions: {
      storage: 'none',
      storeGac: false,
    },
  })
  ReactGA.set({
    anonymizeIp: true,
    customBrowserType: !isMobile
      ? 'desktop'
      : 'web3' in window || 'ethereum' in window
      ? 'mobileWeb3'
      : 'mobileRegular',
  })
} else {
  ReactGA.initialize('test', { testMode: true, debug: true })
}

function Updaters() {
  return (
    <>
      <NetworkUpdater />
    </>
  )
}

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  const app = getLayout(<Component {...pageProps} />)

  return (
    <>
      <Provider store={store}>
        <LanguageProvider>
          <CacheProvider value={clientSideEmotionCache}>
            <Updaters />
            <ThemeProvider theme={theme}>
              <ThemedGlobalStyle />
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {app}
            </ThemeProvider>
          </CacheProvider>
        </LanguageProvider>
      </Provider>
    </>
  )
}

// capturing errors.
MyApp.componentDidCatch = (error, errorInfo) => {
  ReactGA.exception({
    ...error,
    ...errorInfo,
    fatal: true,
  })
}

export default MyApp
