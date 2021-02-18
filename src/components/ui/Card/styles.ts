import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components'
import Link from '../Link/Link'

export const CardContainer = styled(Link)`
  &:hover figcaption {
    text-decoration: underline;
  }

  &:hover img {
    transform: scale(1.05);
  }
`

export const Card = styled.figure`
  width: 100%;
`

export const Card__Body = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space[2]};
`

export const Card__Poster = styled(LazyLoadImage)`
  aspect-ratio: 2/3;
  width: 100%;
  object-fit: contain;
`

export const Card__PopularPoster = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  background-color: var(--color-black);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    width: 68px;
    height: 77px;
    background-image: url('img/clapperboard.png');
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  & > h6 {
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: 32px;
    color: var(--color-text-white);
    z-index: 1;
  }
`

export const Card__Footer = styled.figcaption`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: var(--color-text-caption);
`
