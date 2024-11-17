import { Button } from '@mantine/core'
import Link from 'next/link'
import type { FC } from 'react'

const Page: FC = () => {
	return (
		<div>
			<div>Hej dâ</div>
			<Button component={Link} href='/getting-started'>
				Getting started
			</Button>
		</div>
	)
}

export default Page
