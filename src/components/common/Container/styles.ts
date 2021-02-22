import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  /* for edge cases: */
  width: 100%;
  max-width: 100%;

  ${media.lessThan('medium')`
    padding-right: ${({ theme }) => theme.space['4']};
    padding-left: ${({ theme }) => theme.space['4']};
  `}

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
