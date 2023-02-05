import { Container } from 'components'
import { ReactElement } from 'react'
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
		<div className='flex items-center'>
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
		<button className='h-[2.5rem] w-[185px] bg-[#76b900] font-semibold tracking-wider transition-all hover:bg-[#97ec00]'>
			LET&apos;S PLAY
		</button>
	)
}

export default function Navbar(): ReactElement {
	return (
		<div className='w-full bg-white'>
			<Container>
				<div className='flex h-[5rem] items-center justify-between gap-x-[3.8125rem]'>
					<NavbarLogo />
					<NavbarMenu />
					<NavbarCTA />
				</div>
			</Container>
		</div>
	)
}
