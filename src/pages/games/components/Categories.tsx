import { Actions } from 'types'

const CheckIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='h-4 w-4'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M4.5 12.75l6 6 9-13.5'
		/>
	</svg>
)

export function Categories({ dispatch, state }: any) {
	function handleToggle(category: string) {
		return dispatch({
			type: Actions.TOGGLECATEGORY,
			payload: category
		})
	}

	return (
		<div className='basis-[30%]'>
			<div className='flex flex-col bg-[#1e1e1e] px-[1.875rem] py-[2.5rem]'>
				<h2 className='mb-[1.875rem] text-[1.5rem] font-semibold text-[#afafaf]'>
					Genre Filters
				</h2>
				<div className='flex flex-col gap-y-[1.25rem]'>
					{state.categories.map((category: string, index: number) => (
						<div
							className='flex cursor-pointer select-none gap-x-[1.25rem]'
							key={index}
							onClick={() => handleToggle(category)}
						>
							<span
								className={`flex h-[1.5rem] w-[1.5rem] items-center justify-center ${
									state.selectedCategories.includes(category)
										? 'bg-[#76b900]'
										: 'border border-[#afafaf]'
								} `}
							>
								{state.selectedCategories.includes(category) && <CheckIcon />}
							</span>
							<span className='text-[1.25rem ] leading-[1.5rem] text-[#afafaf]'>
								{category}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
