'use client'

import { AppShellNavbar, NavLink, Stack } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

const menu: Array<{
	label: string
	href: string
}> = [
	{
		label: 'Getting started',
		href: '/getting-started'
	},
	{
		label: 'Installatino',
		href: '/installation'
	},
	{
		label: 'Base Presentation',
		href: '/base-presentation'
	},
	{
		label: 'Knusperfisch',
		href: '/knusperfisch'
	},
	{
		label: 'lksdjflksjdf',
		href: '/dlkflj'
	}
]

export const Navbar: FC = () => {
	const pathname = usePathname()

	return (
		<AppShellNavbar p='lg'>
			<Stack>
				{menu.map(({ label, href }) => {
					return (
						<NavLink
							key={href}
							label={label}
							component={Link}
							href={href}
							active={pathname.includes(href)}
						/>
					)
				})}
			</Stack>
		</AppShellNavbar>
	)
}
