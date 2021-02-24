import styled from 'styled-components'

export const DropDownContainer = styled.div`
  width: 283px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.18);
  cursor: pointer;
`

export const DropDownHeader = styled.div`
  padding: 0px ${({ theme }) => theme.space[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 37px;

  &.DropDownHeader--selected {
    & > span {
      color: var(--color-blue);
    }
  }

  &.DropDownHeader--focused {
    & > svg {
      fill: var(--color-blue);
    }
  }

  & > span {
    color: var(--color-text-placeholder);
    font-size: 13px;
    line-height: 15px;
  }

  & > svg {
    width: 20px;
    height: 20px;
  }
`

export const DropDownListContainer = styled.div`
  z-index: 100;
  width: 100%;
  position: absolute;
  top: 100%;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.18);
`

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  list-style: none;
  box-sizing: border-box;
  background: var(--color-white);
  color: var(--color-gray-darker);
  font-size: 13px;
  line-height: 15px;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-blue);
    color: var(--color-white);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.18);
  }
`
