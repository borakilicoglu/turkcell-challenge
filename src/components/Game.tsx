import type { KeyboardEvent, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import type { IGame } from 'types'

interface Properties {
	game: IGame
}

export function Game({ game }: Properties): ReactElement {
	const navigate = useNavigate()

	function onClick(): void {
		window.scrollTo(0, 0)
		navigate(game.title.toLowerCase())
	}

	function onKeyDown(event: KeyboardEvent): void {
		if (event.key === 'Enter') {
			onClick()
		}
	}

	return (
		<div
			className='cursor-pointer select-none text-white'
			role='button'
			tabIndex={0}
			onClick={onClick}
			onKeyDown={onKeyDown}
		>
			<h3 className='p-12 text-xl font-bold'>{game.title}</h3>
		</div>
	)
}
