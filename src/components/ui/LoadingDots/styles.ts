import styled, { keyframes } from 'styled-components'

const dotAnim = keyframes`
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`

export const LoadingDotsWrapper = styled.span`
  display: inline-flex;
  text-align: center;
  align-items: center;

  & span {
    height: 0.5rem;
    width: 0.5rem;
    background-color: var(--color-white);
    animation-name: ${dotAnim};
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    margin: 0 2px;

    &:nth-of-type(2) {
      animation-delay: 0.2s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.4s;
    }
  }
`
