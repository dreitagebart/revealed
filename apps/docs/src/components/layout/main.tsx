import { AppShellMain, Container } from '@mantine/core'
import type { FC, ReactNode } from 'react'

type Props = {
	children: ReactNode
}

export const Main: FC<Props> = ({ children }) => {
	return (
		<AppShellMain
			styles={{
				main: {
					minHeight: 'calc(100dvh - 80px - var(--mantine-spacing-xl))'
				}
			}}
		>
			<Container>{children}</Container>
		</AppShellMain>
	)
}
