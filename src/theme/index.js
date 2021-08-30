import { createTheme } from '@material-ui/core/styles'
import { Global, css } from '@emotion/react'

const theme = createTheme({
  //
})

export default theme

export function ThemedGlobalStyle() {
  return (
    <>
      <Global
        styles={css`
          iframe, object, embed {
            max-width: 100%;
          }
        `}
      />
    </>
  )
}
