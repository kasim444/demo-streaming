import { Layout, MoviesCollection } from '@common'

const MoviesScreen = () => {
  return (
    <Layout title="DEMO Streaming" subTitle="Popular Movies" path="/movies">
      <MoviesCollection />
    </Layout>
  )
}

export default MoviesScreen
