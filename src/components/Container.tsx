import { ReactElement } from 'react'

interface Properties {
	children: React.ReactNode
	className?: string
}

export function Container({
	children,
	className,
	...props
}: Properties): ReactElement {
	return (
		<div className={`container mx-auto ${className}`} {...props}>
			{children}
		</div>
	)
}
