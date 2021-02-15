import styled from 'styled-components'
import media from 'styled-media-query'

export const Styled_Home = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 14.5px;
  grid-row-gap: 45px;
  width: 100%;
  padding-top: 35px;
  padding-bottom: 60px;

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
