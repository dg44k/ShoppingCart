import { useEffect, useState } from 'react'
import getFilterProducts from '../../services/filter'
import { Categories, ProductType } from '../../types/ProductType'
import ListProduct from './ListProduct'

const Shop: React.FC = () => {
	const [products, setProducts] = useState<ProductType[]>([])
	const [filterProducts, setFilterProducts] = useState<ProductType[]>(products)
	const [isLoader, setIsLoader] = useState<boolean>(true)

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(async response => {
				if (!response.ok) {
					throw new Error('Bad request! Try again')
				}

				return await response.json()
			})
			.then(res => {
				setProducts(res)
				setFilterProducts(res)
				setIsLoader(false)
			})
	}, [])

	return (
		<div className='wrapper-shop'>
			<h1 className='intro-page intro-shop'>SHOP</h1>
			<div className='container shop-container'>
				<div className='filters-shop'>
					<button
						className='btn-filter filter-clothes'
						onClick={() =>
							setFilterProducts(() =>
								getFilterProducts(products, Categories.MEN_CLOTHES)
							)
						}
					>
						Men's clothes
					</button>
					<button
						className='btn-filter filter-clothes'
						onClick={() =>
							setFilterProducts(() =>
								getFilterProducts(products, Categories.WOMEN_CLOTHES)
							)
						}
					>
						Women's clothes
					</button>
					<button
						className='btn-filter filter-jewelry'
						onClick={() =>
							setFilterProducts(() =>
								getFilterProducts(products, Categories.JEWELRY)
							)
						}
					>
						Jewelry
					</button>
					<button
						className='btn-filter filter-technics'
						onClick={() =>
							setFilterProducts(() =>
								getFilterProducts(products, Categories.ELECTRONICS)
							)
						}
					>
						Technics
					</button>
				</div>
				<div className='content'>
					{isLoader ? (
						<p
							style={{
								fontSize: '3rem',
								fontWeight: 'bold',
								textAlign: 'center',
							}}
						>
							LOADING...
						</p>
					) : (
						<ListProduct products={filterProducts} />
					)}
				</div>
			</div>
		</div>
	)
}

export default Shop
