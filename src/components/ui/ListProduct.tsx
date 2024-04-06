import { ProductType } from '../../types/ProductType'
import CardProduct from './CardProduct'

interface ListProductProps {
	products: ProductType[]
}

const ListProduct: React.FC<ListProductProps> = ({ products }) => {
	return (
		<div className='list-products'>
			{products.map((product: ProductType) => (
				<CardProduct key={product.id} {...product} />
			))}
		</div>
	)
}

export default ListProduct
