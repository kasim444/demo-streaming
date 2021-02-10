import * as S from './styles'

interface HeaderProps {
  subTitle: string
}

const Header = ({ subTitle }: HeaderProps) => (
  <S.HeaderContainer>
    <S.MainHeader>
      <h6>DEMO Streaming</h6>
    </S.MainHeader>
    <S.SubHeader>
      <h6>{subTitle}</h6>
    </S.SubHeader>
  </S.HeaderContainer>
)

export default Header
