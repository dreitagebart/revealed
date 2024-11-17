import { ActionIcon, Container, Group, rem } from '@mantine/core'
import {
	IconBrandInstagram,
	IconBrandTwitter,
	IconBrandYoutube,
	IconPresentation
} from '@tabler/icons-react'
import type { FC } from 'react'

import classes from './footer.module.css'

export const Footer: FC = () => {
	return (
		<footer className={classes.footer}>
			<Container className={classes.inner}>
				<IconPresentation size={42} />
				<Group
					gap={0}
					className={classes.links}
					justify='flex-end'
					wrap='nowrap'
				>
					<ActionIcon size='lg' color='gray' variant='subtle'>
						<IconBrandTwitter
							style={{ width: rem(18), height: rem(18) }}
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon size='lg' color='gray' variant='subtle'>
						<IconBrandYoutube
							style={{ width: rem(18), height: rem(18) }}
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon size='lg' color='gray' variant='subtle'>
						<IconBrandInstagram
							style={{ width: rem(18), height: rem(18) }}
							stroke={1.5}
						/>
					</ActionIcon>
				</Group>
			</Container>
		</footer>
	)
}
