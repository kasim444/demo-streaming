import 'styled-components'
import { themeTypes } from '@/styles/theme'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends themeTypes {}
}
