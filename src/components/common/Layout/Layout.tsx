import { NextSeo } from 'next-seo'
import SEO from '@/next-seo.config'
import { Header, Footer } from '@/components/common'
import { Container } from 'react-awesome-styled-grid'

interface Layout {
  title: string
  subTitle: string
  path: string
  children: JSX.Element
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
      <Header subTitle={subTitle} />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
