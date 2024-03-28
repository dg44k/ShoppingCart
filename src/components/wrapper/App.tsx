import Header from '../ui/Header'
import  { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<Outlet />
		</div>
	)
}

export default App
