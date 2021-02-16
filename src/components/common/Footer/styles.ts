import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from '../../ui'

export const Footer = styled.footer`
  background-color: var(--color-black-2);
  padding: ${({ theme }) => theme.space[9]} 0 ${({ theme }) => theme.space[12]}
    0;
`

export const Footer__Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    'nav store'
    'nav store'
    'social social'
    'copyright copyright';
  justify-items: center;
  gap: ${({ theme }) => theme.space[4]};

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      'nav nav'
      'copyright copyright'
      'social store';
    justify-items: flex-start;
  `}

  ${media.greaterThan('huge')`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      'nav nav'
      'copyright copyright'
      'social store';
  `}
`

export const Footer__Nav = styled.nav`
  grid-area: nav;
  display: flex;
  flex-direction: column;

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
  `}
`

export const Footer__Copyright = styled.div`
  grid-area: copyright;
  display: flex;
  align-items: center;

  & > span {
    font-family: Raleway;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: var(--color-text-footer-nav);
    text-align: center;
  }
`

export const Footer__SocalMediaContainer = styled.div`
  grid-area: social;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & > * {
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1) translateY(-2px);
    }
  }

  ${media.greaterThan('medium')`
    justify-content: flex-start;

    & > * + * {
      margin-left: ${({ theme }) => theme.space[8]};
    }
  `}
`

export const Footer__StoreContainer = styled.div`
  grid-area: store;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}

  & > * {
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }

  & > * + * {
    margin-top: ${({ theme }) => theme.space[4]};

    ${media.greaterThan('medium')`
      margin-top: 0px;
      margin-left: ${({ theme }) => theme.space[2]};
    `}
  }

  .storeContainer__icon {
    width: 100px;
    height: 30px;

    ${media.greaterThan('medium')`
      width: 110px;
    `}

    ${media.greaterThan('large')`
      width: 135px;
      height: 40px;
    `}
  }
`

export const Nav__Link = styled(Link)`
  font-family: Raleway;
  font-size: 13px;
  line-height: 15px;
  color: var(--color-text-footer-nav);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-text-white);
  }

  & + a {
    position: relative;
    margin-top: ${({ theme }) => theme.space[3]};

    ${media.greaterThan('medium')`
      margin-top: 0px;
      margin-left: ${({ theme }) => theme.space[6]};
      &:before {
        content: '|';
        position: absolute;
        top: 50%;
        left: -${({ theme }) => theme.space[3]};
        transform: translateY(-50%);
      }
    `}
  }
`
