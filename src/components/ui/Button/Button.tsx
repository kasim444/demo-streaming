import * as S from './styles'
import { LoadingDots } from '@/components/ui'

export type ButtonComponentProps = {
  children?: HTMLCollection | string | JSX.Element | unknown
  onClick: (e?: React.MouseEvent) => void
  variant?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
  loading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  loading = false,
  ...rest
}: ButtonComponentProps) => (
  <S.StyledButton variant={variant} disabled={disabled} {...rest}>
    {children}
    {loading && (
      <S.StyledButton__Loading>
        <LoadingDots />
      </S.StyledButton__Loading>
    )}
  </S.StyledButton>
)

export default Button
