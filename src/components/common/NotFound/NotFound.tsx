import { Container } from '@common'
import { NotFound as NotFoundIcon } from '@icons'
import * as S from './styles'

const NotFound = () => (
  <Container>
    <S.Hero>
      <NotFoundIcon />
    </S.Hero>
  </Container>
)

export default NotFound
