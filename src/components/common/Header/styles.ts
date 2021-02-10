import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
`

export const MainHeader = styled.div`
  background-color: var(--color-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space['3.5']} 0
    ${({ theme }) => theme.space['2.5']} 0;
`

export const SubHeader = styled.div`
  background-color: var(--color-gray-darker);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`
