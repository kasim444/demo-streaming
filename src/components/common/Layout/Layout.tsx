import { Container, Footer, Header } from '@common'
import SEO from '@/next-seo.config'
import { NextSeo } from 'next-seo'
import Main from './styles'

interface Layout {
  title: string
  subTitle: string
  path: string
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ title, subTitle, path, children }: Layout) => {
  const pageTitle = `DS – ${title}`
  const url = `${SEO.canonical}${path}`

  return (
    <>
      <NextSeo
        title={pageTitle}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      <Main>
        <Header subTitle={subTitle} />
        <Container>{children}</Container>
        <Footer />
      </Main>
    </>
  )
}

export default Layout
