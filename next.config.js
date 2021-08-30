const { locales, sourceLocale } = require('./lingui.config.js')

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales,
    defaultLocale: sourceLocale,
    localeDetection: false,
  },
  images: {
    domains: ['safefiles.defiyield.info'],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.po/,
      use: ['@lingui/loader'],
    })

    return config
  },
}
