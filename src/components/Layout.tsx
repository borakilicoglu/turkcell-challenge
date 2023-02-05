import { ReactElement } from 'react'
import Navbar from './Navbar'

interface Properties {
	children: ReactElement
}

export default function Layout({ children }: Properties): ReactElement {
	return (
		<div className='flex flex-col'>
			<Navbar />
			<main>{children}</main>
		</div>
	)
}
