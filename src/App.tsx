import { LoadingOrError } from 'components'
import Layout from 'components/Layout'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const Games = lazy(async () => import('pages/games'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Layout>
				<Suspense fallback={<LoadingOrError />}>
					<Routes>
						<Route path='/' element={<Navigate to='/games' />} />
						<Route path='/games' element={<Games />} />
					</Routes>
				</Suspense>
			</Layout>
		</BrowserRouter>
	)
}
