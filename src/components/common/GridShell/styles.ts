import styled from 'styled-components'
import media from 'styled-media-query'

export const GridShellContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space['10']} ${({ theme }) => theme.space['3.5']};
  width: 100%;
  padding-top: ${({ theme }) => theme.space['9']};
  padding-bottom: ${({ theme }) => theme.space['16']};

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.greaterThan('large')`
    grid-template-columns: repeat(5, 1fr);
  `}


  ${media.greaterThan('huge')`
    grid-template-columns: repeat(7, 1fr);
  `}
`
