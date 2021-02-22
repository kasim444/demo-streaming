import styled from 'styled-components'
import media from 'styled-media-query'

export const SearchBox = styled.div`
  display: inline-block;
  height: 37px;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.18);
`

export const SearchBox__Form = styled.form`
  display: flex;
  height: 100%;
`

export const SearchBox__Input = styled.input`
  padding: 0px ${({ theme }) => theme.space[4]};
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  border: 0px;

  &::placeholder {
    color: #b4b4b4;
  }

  &:focus {
    outline: none;
  }

  ${media.greaterThan('medium')`
    width: 370px;
  `}
`

export const SearchBox__Button = styled.button`
  border: 0px;
  width: 61px;
  background-color: var(--color-blue);

  .SearchBox__SearchIcon {
    width: 24px;
    height: 24px;
    transform: scaleX(-1);
  }
`
