import styled from 'styled-components'
import media from 'styled-media-query'

export const StyledContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  /* for edge cases: */
  width: 100%;
  max-width: 100%;

  ${media.greaterThan('medium')`
    width: 750px;
  `}

  ${media.greaterThan('large')`
    width: 970px;
  `}


  ${media.greaterThan('huge')`
    width: 1170px;
  `}
`
