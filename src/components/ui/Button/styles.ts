import styled from 'styled-components'
import { ButtonComponentProps } from './Button'

export const StyledButton = styled.button<ButtonComponentProps>`
  padding: ${({ theme }) => theme.space['2.5']} 12px;
  font-size: 14px;
  font-weight: 700;
  border: 0px;
  appearance: none;
  cursor: pointer;
  color: var(--color-text-white);
  background-color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return 'var(--color-gray-darker)'

      case 'secondary':
        return 'var(--color-blue)'

      case 'ghost':
        return 'transparent'

      default:
        return 'var(--color-black)'
    }
  }};
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  &:disabled,
  &[disabled] {
    background-color: var(--color-gray);
    color: var(--color-text-white);
  }
`

export const StyledButton__Loading = styled.span`
  margin-left: ${({ theme }) => theme.space[1]};
`
