import { useState } from 'react'
import { Actions } from 'types'

const ArrowDownIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='#fff'
		className='h-4 w-4'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M19.5 8.25l-7.5 7.5-7.5-7.5'
		/>
	</svg>
)

export function Sort({ dispatch }: any) {
	const [isOpen, toggleOpen] = useState(false)

	function handleSort(direction: string) {
		toggleOpen(false)
		return dispatch({
			type: Actions.TOGGLESORT,
			payload: direction
		})
	}

	return (
		<div className='relative flex flex-col'>
			<button
				className='mb-[1px] flex h-[51px] w-[7.5rem] items-center justify-between bg-[#1e1e1e] px-[1rem] font-semibold text-white'
				onClick={() => toggleOpen(prev => !prev)}
			>
				<span>Sort A-Z</span>
				<ArrowDownIcon />
			</button>

			{isOpen && (
				<div className='absolute left-0 top-[52px] flex flex-col shadow-xl'>
					<button
						className='h-[3.1875rem] w-[7.5rem] items-center justify-between bg-[#1e1e1e] px-[1rem] pr-[36px] font-semibold text-white transition-all hover:bg-[#3e3e3e]'
						onClick={() => handleSort('ASC')}
					>
						Sort A-Z
					</button>
					<button
						className='h-[3.1875rem] w-[7.5rem] items-center justify-between bg-[#1e1e1e] px-[1rem] pr-[36px] font-semibold text-white transition-all hover:bg-[#3e3e3e]'
						onClick={() => handleSort('DSC')}
					>
						Sort Z-A
					</button>
				</div>
			)}
		</div>
	)
}
