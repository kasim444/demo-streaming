import styled from 'styled-components'

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
`

export default Flex
