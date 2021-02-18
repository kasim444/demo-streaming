import SEO from '@/next-seo.config'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import store from '@store'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import NextHead from 'next/head'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </NextHead>
      <GlobalStyles />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}
