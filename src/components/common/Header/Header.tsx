import * as S from './styles'
import { Button } from '@/components/ui'
import {} from '@/components/common'
import { Container, Row, Col } from 'react-awesome-styled-grid'

interface HeaderProps {
  subTitle: string
}

const Header = ({ subTitle }: HeaderProps) => {
  const handleLoggin = () => console.log('Loggin action')
  const handleFreeTrial = () => console.log('Free trial action')

  return (
    <S.HeaderContainer>
      <S.MainHeader>
        <Container>
          <Row justify="space-between" align="center">
            <Col
              noGutter
              xs={4}
              sm={8}
              md={3}
              lg={4}
              align={{ xs: 'center', md: 'flex-start' }}
            >
              <S.Logo>DEMO Streaming</S.Logo>
            </Col>
            <Col
              noGutter
              xs={4}
              sm={8}
              md={5}
              lg={8}
              align={{ xs: 'center', md: 'flex-end' }}
            >
              <S.Nav>
                <Button variant="ghost" onClick={handleLoggin}>
                  Log in
                </Button>
                <Button onClick={handleFreeTrial}>Start your free trial</Button>
              </S.Nav>
            </Col>
          </Row>
        </Container>
      </S.MainHeader>
      <S.SubHeader>
        <Container>
          <Row justify="space-between" align="center">
            <S.SubTitle>{subTitle}</S.SubTitle>
          </Row>
        </Container>
      </S.SubHeader>
    </S.HeaderContainer>
  )
}

export default Header
