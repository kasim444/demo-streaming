import { Container } from '@common'
import {
  AppStore,
  Facebook,
  Instagram,
  PlayStore,
  Twitter,
  WindowsStore,
} from '@icons'
import { Link } from '@ui'
import * as S from './styles'

const Footer = () => (
  <S.Footer>
    <Container>
      <S.Footer__Inner>
        <S.Footer__Nav>
          <S.Nav__Link href="/">Home</S.Nav__Link>
          <S.Nav__Link href="/terms-and-conditions">
            Terms and Conditions
          </S.Nav__Link>
          <S.Nav__Link href="/privacy-policy">Privacy Policy</S.Nav__Link>
          <S.Nav__Link href="/collection-statement">
            Collection Statement
          </S.Nav__Link>
          <S.Nav__Link href="/help">Help</S.Nav__Link>
          <S.Nav__Link href="/manage-account">Manage Account</S.Nav__Link>
        </S.Footer__Nav>
        <S.Footer__Copyright>
          <span>Copyright © 2016 DEMO Streaming. All Right s Reserved.</span>
        </S.Footer__Copyright>
        <S.Footer__SocalMediaContainer>
          <Link href="http://facebook.com/" target="_blank">
            <Facebook />
          </Link>
          <Link href="https://twitter.com/" target="_blank">
            <Twitter />
          </Link>
          <Link href="http://instagram.com/" target="_blank">
            <Instagram />
          </Link>
        </S.Footer__SocalMediaContainer>
        <S.Footer__StoreContainer>
          <Link href="https://www.apple.com/tr/app-store/" target="_blank">
            <AppStore className="storeContainer__icon" />
          </Link>
          <Link href="https://play.google.com/store?hl=tr" target="_blank">
            <PlayStore className="storeContainer__icon" />
          </Link>
          <Link
            href="https://www.microsoft.com/tr-tr/store/apps/windows"
            target="_blank"
          >
            <WindowsStore className="storeContainer__icon" />
          </Link>
        </S.Footer__StoreContainer>
      </S.Footer__Inner>
    </Container>
  </S.Footer>
)

export default Footer
