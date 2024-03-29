import { useEffect, useState } from 'react'
import { ProductType } from '../../types/ProductType'
import CardProduct from './CardProduct'

const ListProduct: React.FC = () => {
	const [products, setProducts] = useState<ProductType[]>([])

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(response => {
				if (!response.ok) {
					throw new Error('Bad request! Try again')
				}
				return response.json()
			})
			.then(res => {
				setProducts(res)
			})
	}, [setProducts])

	return (
		<div className='cards-products'>
			{products.map((product: ProductType) => (
				<CardProduct key={product.id} {...product} />
			))}
		</div>
	)
}

export default ListProduct
