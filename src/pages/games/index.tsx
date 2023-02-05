import { useQuery } from '@tanstack/react-query'
import getGames from 'api/getGames'
import { Container, Hero, LoadingOrError } from 'components'
import { ReactElement, useEffect, useReducer } from 'react'
import { Actions, IAction, IGame, IState } from 'types'
import * as Game from './components'

const initialState = {
	games: [],
	categories: [],
	searchInput: '',
	sortDirection: 'ASC',
	selectedCategories: []
}

function reducer(state: IState, action: IAction) {
	const { type, payload } = action
	switch (type) {
		case Actions.SETGAMES:
			return {
				...state,
				games: payload
			}
		case Actions.SETCATEGORIES:
			return {
				...state,
				categories: payload
			}
		case Actions.SETSEARCH:
			return {
				...state,
				searchInput: payload
			}
		case Actions.TOGGLESORT:
			return {
				...state,
				sortDirection: payload
			}
		case Actions.TOGGLECATEGORY:
			return {
				...state,
				selectedCategories: state.selectedCategories.includes(payload)
					? state.selectedCategories.filter(category => category !== payload)
					: [...state.selectedCategories, payload]
			}
		default:
			return state
	}
}

export default function Games(): ReactElement {
	const { isLoading, isError, error, data } = useQuery(['games'], getGames)
	const [state, dispatch] = useReducer(reducer, initialState)

	const arrangeGames = (games: Array<IGame>) => {
		let result = games
		if (state.selectedCategories.length) {
			result = games.filter(game =>
				game.genre.find(x => state.selectedCategories.includes(x))
			)
		}
		if (state.searchInput.length) {
			result = result.filter(game =>
				game.title.toLowerCase().includes(state.searchInput.toLowerCase())
			)
		}
		if (state.sortDirection === 'ASC') {
			return result.sort((a, b) => a.title.localeCompare(b.title))
		}
		if (state.sortDirection === 'DSC') {
			return result.sort((a, b) => b.title.localeCompare(a.title))
		}
		return result
	}

	function setGames(data: Array<IGame>) {
		return dispatch({
			type: Actions.SETGAMES,
			payload: arrangeGames(data)
		})
	}

	function setCategories(data: Array<any>) {
		let categories: Array<string> = []
		data.map((game: IGame) =>
			game.genre.map((item: string) =>
				!categories.includes(item) ? (categories = [...categories, item]) : null
			)
		)
		return dispatch({
			type: Actions.SETCATEGORIES,
			payload: categories
		})
	}

	useEffect(() => {
		if (data?.length) {
			setGames(data)
		}
	}, [state.searchInput, state.selectedCategories, state.sortDirection])

	useEffect(() => {
		if (data?.length) {
			setCategories(data)
			setGames(data)
		}
	}, [data])

	if (isLoading || isError) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<div className='m-2 flex min-h-screen flex-col gap-2 md:m-0'>
			<Hero dispatch={dispatch} />
			<Container>
				<div className='mt-[4rem] mb-[2.0625rem] flex w-full items-center justify-between'>
					<h2 className='text-[1.75rem] font-bold'>Browse Games</h2>
					<Game.Sort dispatch={dispatch} />
				</div>
				<div className='flex gap-x-[1.25rem]'>
					<Game.Categories state={state} dispatch={dispatch} />
					<Game.List games={state.games} />
				</div>
			</Container>
		</div>
	)
}
