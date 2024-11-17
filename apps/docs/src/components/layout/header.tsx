import {
	ActionIcon,
	AppShellHeader,
	Flex,
	Group,
	Text,
	Tooltip,
	UnstyledButton,
	rem
} from '@mantine/core'
import Link from 'next/link'
import type { FC } from 'react'
import { Github } from '../logos'

export const Header: FC = () => {
	return (
		<AppShellHeader>
			<Flex justify='space-between' align='center' h='100%' px='xl'>
				<Group>
					<UnstyledButton component={Link} href='/'>
						<Text fw='bold' size={rem(42)} lts={2}>
							revealed
						</Text>
					</UnstyledButton>
				</Group>
				<Group>
					<Tooltip label='Github' position='bottom'>
						<ActionIcon variant='transparent'>
							<Github fill='#111' width={42} height={42} />
						</ActionIcon>
					</Tooltip>
				</Group>
			</Flex>
		</AppShellHeader>
	)
}
