import { AppProps } from 'next/app'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'
import SEO from '@/next-seo.config'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </NextHead>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
