import { AppShell } from '@mantine/core'
import type { FC, ReactNode } from 'react'

import { Footer } from './footer'
import { Header } from './header'
import { Main } from './main'
import { Navbar } from './navbar'

type Props = {
	children: ReactNode
}

export const FullLayout: FC<Props> = ({ children }) => {
	return (
		<AppShell
			withBorder={false}
			header={{ height: 80, offset: true, collapsed: false }}
			navbar={{
				breakpoint: 'sm',
				width: 300
			}}
		>
			<Header />
			<Navbar />
			<Main>{children}</Main>
			<Footer />
		</AppShell>
	)
}
