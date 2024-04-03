import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from '../ui/Cart'
import ErrorPage from '../ui/ErrorPage'
import Home from '../ui/Home'
import Shop from '../ui/Shop'
import App from './App'
import InfoCardView from '../ui/InfoCardView'

const Router: React.FC = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/cart',
					element: <Cart />,
				},
				{
					path: '/shop',
					element: <Shop />,
					children: [
						{
							path: 'card/:id',
							element: <InfoCardView />,
						},
					],
				},
			],
		},
	])

	return <RouterProvider router={router} />
}

export default Router
