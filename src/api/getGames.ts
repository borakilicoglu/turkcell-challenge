import type { IGame } from 'types'

export default async function getGames(): Promise<IGame[]> {
	const response = await fetch('http://localhost:3000/games')
	return response.json() as Promise<IGame[]>
}
