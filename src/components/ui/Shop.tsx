import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFilterProducts, updateProducts } from '../../state/cards/cardsSlice'
import { RootState } from "../../state/store.ts"
import { Categories } from '../../types/ProductType'
import ListProduct from './ListProduct'

const Shop: React.FC = () => {
	const [isLoader, setIsLoader] = useState<boolean>(true)
	const dispatch = useDispatch();
	const filterProducts = useSelector((state: RootState) => state.cards.filterProducts)

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(async response => {
				if (!response.ok) {
					throw new Error('Bad request! Try again')
				}

				return await response.json()
			})
			.then(res => {
				setIsLoader(false)
				dispatch(updateProducts(res))
			})
	}, [dispatch])

	return (
		<div className='wrapper-shop'>
			<h1 className='intro-page intro-shop'>SHOP</h1>
			<div className='container shop-container'>
				<div className='filters-shop'>
					<button
						className='btn-filter filter-clothes'
						onClick={() =>
							dispatch(getFilterProducts(Categories.MEN_CLOTHES))
						}
					>
						Men's clothes
					</button>
					<button
						className='btn-filter filter-clothes'
						onClick={() =>
							dispatch(getFilterProducts(Categories.WOMEN_CLOTHES))
						}
					>
						Women's clothes
					</button>
					<button
						className='btn-filter filter-jewelry'
						onClick={() =>
							dispatch(getFilterProducts(Categories.JEWELRY))
						}
					>
						Jewelry
					</button>
					<button
						className='btn-filter filter-technics'
						onClick={() =>
							dispatch(getFilterProducts(Categories.ELECTRONICS))
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
