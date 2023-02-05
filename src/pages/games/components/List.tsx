import { IGame } from 'types'

function groupGames(games: Array<IGame>) {
	return games.reduce((acc: any, cur: any) => {
		const firstLetter = cur.title[0].toLowerCase()
		return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] }
	}, {})
}

export function List({ games }: any) {
	return (
		<div className='flex basis-[70%] flex-col gap-y-[1.875rem]'>
			{Object.entries(groupGames(games)).map(([key, value]: any, index) => (
				<div
					className='flex select-none flex-col gap-y-[1.875rem] bg-[#1e1e1e] p-[1.875rem]'
					key={index}
				>
					<div className="relative flex h-[52px] w-[60px] items-center justify-center bg-[url('/images/polygon.png')] text-[1.875rem] font-semibold text-[#1e1e1e]">
						{key.toUpperCase()}
					</div>
					<div className='grid grid-cols-2 gap-y-[1rem] text-[1rem] text-[#afafaf]'>
						{value?.map((game: IGame, index: number) => (
							<span
								className='cursor-pointer transition-all hover:text-white'
								key={index}
							>
								{game.title}
							</span>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
