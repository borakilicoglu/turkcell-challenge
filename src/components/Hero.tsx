import { ReactElement } from 'react'
import { Actions } from 'types'

export function Hero({ dispatch }: any): ReactElement {
	return (
		<div className='flex min-h-[25rem] flex-col items-center justify-center bg-[url("/images/hero.jpg")]'>
			<h2 className='text-center text-[2.5rem] font-semibold text-white'>
				Find the game that you want to play and <br /> start playing wherever
				you want!
			</h2>
			<p className='mt-[0.9375rem] w-[60%] text-center text-[1.25rem] leading-[1.3] text-white'>
				With the Cloud Gaming, you can join, play <br /> and share games online
				with anyone in the world. <br /> Play any game on any device!
			</p>
			<div className='relative mt-[3.0625rem] flex w-[60%] items-center'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='#000'
					className='absolute left-[1.0625rem] h-6 w-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
					/>
				</svg>
				<input
					type='text'
					placeholder='Search Games'
					className='flex h-[3.5rem] w-full px-[3.5rem] text-black placeholder:text-[#8e9fad]'
					onChange={e =>
						dispatch({
							type: Actions.SETSEARCH,
							payload: e.target.value
						})
					}
				/>
			</div>
		</div>
	)
}
