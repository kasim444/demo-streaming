import * as S from './styles'

interface ContainerProps {
  children: JSX.Element | JSX.Element[]
}

const Container = ({ children }: ContainerProps) => (
  <S.StyledContainer>{children}</S.StyledContainer>
)

export default Container
