import COLORS from './colors'
import FONTS from './fonts'
import SPACE from './space'
import SIZES from './sizes'
import GRID from './grid'

const theme = {
  colors: COLORS,
  fonts: FONTS,
  space: SPACE,
  sizes: SIZES,
  awesomegrid: GRID,
}

export type themeTypes = typeof theme
export default theme
