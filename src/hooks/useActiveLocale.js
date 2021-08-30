import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'

import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '../constants/locales'
import { useUserLocale, useUserLocaleManager } from '../state/user/hooks'

/**
 * Given a locale string (e.g. from user agent), return the best match for corresponding SupportedLocale
 * @param maybeSupportedLocale the fuzzy locale identifier
 */
function parseLocale(maybeSupportedLocale) {
  const lowerMaybeSupportedLocale = maybeSupportedLocale.toLowerCase()
  return SUPPORTED_LOCALES.find(
    (locale) => locale.toLowerCase() === lowerMaybeSupportedLocale || locale.split('-')[0] === lowerMaybeSupportedLocale
  )
}

/**
 * Returns the supported locale read from the user agent (navigator)
 */
export function navigatorLocale() {
  if (typeof window === 'undefined' || !navigator.language) return undefined

  const [language, region] = navigator.language.split('-')

  if (region) {
    return parseLocale(`${language}-${region.toUpperCase()}`) ?? parseLocale(language)
  }

  return parseLocale(language)
}

export function useSetLocaleFromUrl() {
  const { locale } = useRouter()
  const [userLocale, setUserLocale] = useUserLocaleManager()

  useEffect(() => {
    if (locale && !userLocale) {
      setUserLocale(locale)
    }
  }, [setUserLocale, userLocale])
}

/**
 * Returns the currently active locale, from a combination of user agent, query string, and user settings stored in redux
 */
export function useActiveLocale() {
  const userLocale = useUserLocale()

  return useMemo(() => {
    return userLocale ?? navigatorLocale() ?? DEFAULT_LOCALE
  }, [userLocale])
}
