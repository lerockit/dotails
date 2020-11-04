import { extendTheme } from '@chakra-ui/core'

import { colors, fonts, sizes } from './custom'

import { Link } from './components/link'

const global = {
  body: {
    bg: `linear-gradient(${colors.gray.light} 0%, ${colors.gray.medium} 100%)`,
    minHeight: '100vh',
    color: colors.white,
  },
}

export const theme = extendTheme({
  colors,
  fonts,
  sizes,
  components: {
    Link,
  },
  styles: { global },
})
