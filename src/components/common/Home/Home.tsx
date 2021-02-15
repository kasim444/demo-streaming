import * as S from './styles'
import { Container } from '@/components/common'
import { Card } from '@/components/ui'

const Home = () => (
  <Container>
    <S.Styled_Home>
      <Card href={'/series'} variant="PSeries" title="Popular Series" />
      <Card href={'/movies'} variant="PMovies" title="Popular Movies" />
    </S.Styled_Home>
  </Container>
)

export default Home
