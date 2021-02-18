import { GridShellContainer } from './styles'

interface GridShellProps {
  children: JSX.Element | JSX.Element[]
}

const GridShell = ({ children }: GridShellProps) => (
  <GridShellContainer>{children}</GridShellContainer>
)

export default GridShell
