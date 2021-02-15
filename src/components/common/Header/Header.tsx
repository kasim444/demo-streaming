import * as S from './styles'
import { Button } from '@/components/ui'

interface HeaderProps {
  subTitle: string
}

const Header = ({ subTitle }: HeaderProps) => {
  const handleLoggin = () => console.log('Loggin action')
  const handleFreeTrial = () => console.log('Free trial action')

  return (
    <S.HeaderContainer>
      <S.MainHeader>
        <S.Logo>DEMO Streaming</S.Logo>
        <S.Nav>
          <Button variant="ghost" onClick={handleLoggin}>
            Log in
          </Button>
          <Button onClick={handleFreeTrial}>Start your free trial</Button>
        </S.Nav>
      </S.MainHeader>
      <S.SubHeader>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.SubHeader>
    </S.HeaderContainer>
  )
}

export default Header
