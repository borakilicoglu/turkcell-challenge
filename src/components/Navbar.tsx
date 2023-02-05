import { Container } from 'components'
import { ReactElement, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navMenuItems = [
	{ id: 1, title: 'Games', href: '/games' },
	{ id: 2, title: 'Membership', href: '/membership' },
	{ id: 3, title: 'Download', href: '/download' },
	{ id: 4, title: 'Blog', href: '/blog' },
	{ id: 5, title: 'Support', href: '/support' }
]

function NavbarLogo(): ReactElement {
	return <img src='images/logo.png' alt='GEFORCE NOW ' />
}

function NavbarMenu(): ReactElement {
	const { pathname } = useLocation()

	return (
		<div className='hidden items-center lg:flex'>
			{navMenuItems.map(navMenuItem => (
				<NavLink
					to={navMenuItem.href}
					className={({ isActive }) =>
						(isActive ? 'text-[#76b900]' : 'text-black') +
						' flex h-[5rem] flex-col items-center justify-end gap-y-[0.625rem] px-[2rem] text-center text-[1rem] font-bold duration-300 ease-out hover:text-[#76b900]'
					}
					key={navMenuItem.id}
				>
					<span>{navMenuItem.title}</span>
					<img
						src='/images/triangle.png'
						className={`${
							pathname === navMenuItem.href ? 'opacity-1' : 'opacity-0'
						}`}
					/>
				</NavLink>
			))}
		</div>
	)
}

function NavbarCTA(): ReactElement {
	return (
		<button className='hidden h-[2.5rem] w-[185px] items-center justify-center bg-[#76b900] font-semibold tracking-wider transition-all hover:bg-[#97ec00] lg:flex'>
			LET&apos;S PLAY
		</button>
	)
}

function NavbarMobileMenuToggle({
	isMobileMenuActive,
	toggleMobileMenu
}: any): ReactElement {
	return (
		<button
			className='flex h-[5rem] items-center justify-center lg:hidden'
			onClick={() => toggleMobileMenu((prev: any) => !prev)}
		>
			{!isMobileMenuActive ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='#000'
					className='h-8 w-8'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='#000'
					className='h-8 w-8'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			)}
		</button>
	)
}

function NavbarMobileMenu({ isMobileMenuActive }: any) {
	const { pathname } = useLocation()

	return (
		isMobileMenuActive && (
			<Container className='border-t border-[#76b900] pt-[1rem]'>
				<div className='flex min-h-screen w-full flex-col gap-y-[1rem]'>
					{navMenuItems.map(navMenuItem => (
						<NavLink
							to={navMenuItem.href}
							className={({ isActive }) =>
								(isActive ? 'bg-[#76b900] text-white' : 'text-black') +
								' flex h-[4rem] items-center justify-center gap-y-[0.625rem] border border-[#bbb] px-[2rem] text-center text-[2rem] font-bold duration-300 ease-out hover:text-[#76b900]'
							}
							key={navMenuItem.id}
						>
							<span>{navMenuItem.title}</span>
						</NavLink>
					))}
					<button className='flex h-[4rem] w-full items-center justify-center bg-[#76b900] font-semibold tracking-wider transition-all hover:bg-[#97ec00]'>
						LET&apos;S PLAY
					</button>
				</div>
			</Container>
		)
	)
}

export default function Navbar(): ReactElement {
	const [isMobileMenuActive, toggleMobileMenu] = useState(false)

	useEffect(() => {
		document.body.style.overflow = isMobileMenuActive ? 'hidden' : 'auto'
		document.body.style.height = isMobileMenuActive ? '100vh' : 'auto'
		document.body.style.touchAction = isMobileMenuActive ? 'none' : 'auto'
	}, [isMobileMenuActive])

	return (
		<div className='z-1000 relative w-full bg-white'>
			<Container>
				<div className='flex h-[5rem] items-center justify-between gap-x-[3.8125rem]'>
					<NavbarLogo />
					<NavbarMenu />
					<NavbarCTA />
					<NavbarMobileMenuToggle
						isMobileMenuActive={isMobileMenuActive}
						toggleMobileMenu={toggleMobileMenu}
					/>
				</div>
			</Container>
			<NavbarMobileMenu isMobileMenuActive={isMobileMenuActive} />
		</div>
	)
}
