import { ReactElement } from 'react'

interface Properties {
	children: React.ReactNode
}

export function Container({ children }: Properties): ReactElement {
	return <div className='container mx-auto'>{children}</div>
}
