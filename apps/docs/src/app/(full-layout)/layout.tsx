import type { FC, ReactNode } from 'react'
import { FullLayout } from '~/components/layout'

type Props = {
	children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return <FullLayout>{children}</FullLayout>
}

export default Layout
