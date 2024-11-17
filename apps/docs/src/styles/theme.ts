import { createTheme } from '@mantine/core'

import { fonts } from './fonts'

export const theme = createTheme({
	primaryColor: 'grape',
	primaryShade: 9,
	fontFamily: fonts.openSans.style.fontFamily
})
