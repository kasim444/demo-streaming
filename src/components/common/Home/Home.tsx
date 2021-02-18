import { GridShell } from '@common'
import { Card } from '@ui'

const Home = () => (
  <GridShell>
    <Card
      key={'series'}
      href={'/series'}
      variant="PSeries"
      title="Popular Series"
    />
    <Card
      key={'movies'}
      href={'/movies'}
      variant="PMovies"
      title="Popular Movies"
    />
  </GridShell>
)

export default Home
