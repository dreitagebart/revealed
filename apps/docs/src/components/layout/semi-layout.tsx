import { AppShell } from '@mantine/core'
import type { FC, ReactNode } from 'react'

import { Header } from './header'
import { Main } from './main'

type Props = {
	children: ReactNode
}

export const SemiLayout: FC<Props> = ({ children }) => {
	return (
		<AppShell header={{ height: 80 }}>
			<Header />
			<Main>{children}</Main>
		</AppShell>
	)
}
