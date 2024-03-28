import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from '../ui/Home'
import Cart from '../ui/Cart'
import Shop from '../ui/Shop'
import ErrorPage from '../ui/ErrorPage'

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
				},
			],
		},
	])

	return <RouterProvider router={router} />
}

export default Router
