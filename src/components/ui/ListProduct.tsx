import { ProductType } from '../../types/ProductType'
import CardProduct from './CardProduct'

interface ListProductProps {
	products: ProductType[]
}

const ListProduct: React.FC<ListProductProps> = ({ products }) => {
	return (
		<div className='list-products'>
			{products.map((product: ProductType) => (
				<CardProduct
					key={product.id}
					id={product.id}
					title={product.title}
					price={product.price}
					category={product.category}
					image={product.image}
					count={product.count}
				/>
			))}
		</div>
	)
}

export default ListProduct
