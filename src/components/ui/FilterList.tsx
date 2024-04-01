import { useEffect, useState } from 'react'
import getFilterProducts from '../../services/filter'
import { ProductType } from '../../types/ProductType'
import CardProduct from './CardProduct'

const FilterList: React.FC = ({products: ProductType[], category: Categories}) => {
	const [filterProducts, setFilterProducts] = useState<ProductType[]>([]);

	useEffect(() => {
		setFilterProducts(() => getFilterProducts(products, Categories.ELECTRONICS))
	}, [])

	return (
		<div className="filter-list">
			{filterProducts.map(product => <CardProduct key={product.id} {...product} />)}
		</div>
	);
}

export default FilterList;