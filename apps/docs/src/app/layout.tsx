import '@mantine/core/styles.css'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'
import { theme } from '~/styles/theme'

export const metadata: Metadata = {
	title: 'revealed',
	description: 'React components for reveal.js library'
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider theme={theme}>{children}</MantineProvider>
			</body>
		</html>
	)
}

export default RootLayout
