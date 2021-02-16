import { Container, Flex } from '@common'
import { Button, Link } from '@ui'
import * as S from './styles'

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
            <Link href="/">
              <S.Logo>DEMO Streaming</S.Logo>
            </Link>
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
