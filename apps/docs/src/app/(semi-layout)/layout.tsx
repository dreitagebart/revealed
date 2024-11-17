import type { FC, ReactNode } from 'react'
import { SemiLayout } from '~/components/layout'

type Props = {
	children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return <SemiLayout>{children}</SemiLayout>
}

export default Layout
