import { Row } from 'react-awesome-styled-grid'
import * as S from './styles'
import { Card } from '@/components/ui'

const Home = () => (
  <Row>
    <S.Styled_Home>
      <Card href={'/series'} variant="PSeries" title="Popular Series" />
      <Card href={'/movies'} variant="PMovies" title="Popular Movies" />
    </S.Styled_Home>
  </Row>
)

export default Home
