export enum Actions {
	SETGAMES = 'SETGAMES',
	SETCATEGORIES = 'SETCATEGORIES',
	SETSEARCH = 'SETSEARCH',
	TOGGLESORT = 'TOGGLESORT',
	TOGGLECATEGORY = 'TOGGLECATEGORY'
}

export interface IAction {
	type: Actions
	payload: any
}

export interface IGame {
	id: number
	title: string
	highlightsSupported: boolean
	fullOptimized: boolean
	steamUrl: string
	publisher: string
	genre: string[]
	status: string
}

export interface IState {
	games: Array<IGame>
	categories: Array<string>
	searchInput: string
	sortDirection: string
	selectedCategories: Array<string>
}
