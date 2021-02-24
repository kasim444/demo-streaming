import styled from 'styled-components'
import media from 'styled-media-query'

type FlexProps = {
  className?: string
  direction?: 'row' | 'column'
  wrap?: 'wrap' | 'no-wrap'
  align?: 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch'
  justify?:
    | 'baseline'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
}

const Flex = styled.div.attrs((props) => ({
  clasName: props.className,
}))<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};

  &.Flex--FilterSection {
    padding-top: ${({ theme }) => theme.space['9']};
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  `}
`

export default Flex
