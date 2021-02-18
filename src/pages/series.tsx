import { Layout, SeriesCollection } from '@common'

const SeriesScreen = () => {
  return (
    <Layout title="DEMO Streaming" subTitle="Popular Series" path="/series">
      <SeriesCollection />
    </Layout>
  )
}

export default SeriesScreen
