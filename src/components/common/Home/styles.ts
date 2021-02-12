import { config } from 'react-awesome-styled-grid'
import styled from 'styled-components'

export const Styled_Home = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 14.5px;
  grid-row-gap: 45px;
  width: 100%;
  padding-top: 35px;
  padding-bottom: 60px;

  ${(props) => config(props).media['sm']`
    grid-template-columns: repeat(3, 1fr);
  `}
  ${(props) => config(props).media['md']`
    grid-template-columns: repeat(7, 1fr);
  `}
`
