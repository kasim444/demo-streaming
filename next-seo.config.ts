const title = 'DEMO Streaming'
const description = 'This is a streaming app clone powered by Next.js.'
const siteUrl = 'https://demo-streaming.vercel.app/'

const SEO = {
  title,
  description,
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: `${siteUrl}img/logo.png`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
}

export default SEO
