import styled from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const MainHeader = styled.div`
  background-color: var(--color-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space['3.5']} 0
    ${({ theme }) => theme.space['2.5']} 0;
  box-shadow: 0px 3px 10px rgb(0 0 0 / 66%);
  z-index: 1;
`

export const SubHeader = styled.div`
  background-color: var(--color-gray-darker);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  & > button + button {
    margin-left: ${({ theme }) => theme.space[6]};
  }
`

export const Logo = styled.h5`
  font-family: Raleway;
  font-weight: 600;
  font-size: 33px;
  line-height: 39px;
  color: var(--color-text-white);
`

export const SubTitle = styled.h6`
  font-family: Raleway;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: var(--color-text-white);

  ${media.lessThan('medium')`
    text-align: center;
  `}
`
