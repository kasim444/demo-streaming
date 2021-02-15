import * as S from './styles'
import { Container, Flex } from '@/components/common'
import { Button } from '@/components/ui'

interface HeaderProps {
  subTitle: string
}

const Header = ({ subTitle }: HeaderProps) => {
  const handleLoggin = () => console.log('Loggin action')
  const handleFreeTrial = () => console.log('Free trial action')

  return (
    <S.Header>
      <S.MainHeader>
        <Container>
          <Flex justify="space-between">
            <S.Logo>DEMO Streaming</S.Logo>
            <S.Nav>
              <Button variant="ghost" onClick={handleLoggin}>
                Log in
              </Button>
              <Button onClick={handleFreeTrial}>Start your free trial</Button>
            </S.Nav>
          </Flex>
        </Container>
      </S.MainHeader>
      <S.SubHeader>
        <Container>
          <S.SubTitle>{subTitle}</S.SubTitle>
        </Container>
      </S.SubHeader>
    </S.Header>
  )
}

export default Header
