import { useEffect, useState } from 'react'
import { ProductType } from '../../types/ProductType'
import CardProduct from './CardProduct'

const ListProduct: React.FC = () => {
	const [products, setProducts] = useState<ProductType[]>([])

	useEffect(() => {
		console.log(1);
		
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
	}, [])

	return (
		<>
			{products.map((product: ProductType) => (
				<CardProduct key={product.id} {...product} />
			))}
		</>
	)
}

export default ListProduct
