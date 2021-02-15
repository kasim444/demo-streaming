import * as S from './styles'
import { Card } from '@/components/ui'

const Home = () => (
  <S.Styled_Home>
    <Card href={'/series'} variant="PSeries" title="Popular Series" />
    <Card href={'/movies'} variant="PMovies" title="Popular Movies" />
  </S.Styled_Home>
)

export default Home
