import ListProduct from './ListProduct'

const Shop: React.FC = () => {
	return (
		<div className='wrapper-shop'>
			<h1 className='intro-shop'>SHOP</h1>
			<div className='container shop-container'>
				<div className='filters-shop'>FILTERS</div>
				<div className='content'>
					<ListProduct />
				</div>
			</div>
		</div>
	)
}

export default Shop
