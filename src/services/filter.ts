import { ProductType } from '../types/ProductType'

const filterProductsByCategories = (
	products: ProductType[],
	category: string
): ProductType[] => {
	return products.filter(product => product.category === category)
}

export default filterProductsByCategories
