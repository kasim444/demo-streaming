import * as S from './styles'

interface ContainerProps {
  children: JSX.Element | JSX.Element[]
}

const Container = ({ children }: ContainerProps) => (
  <S.Container>{children}</S.Container>
)

export default Container
