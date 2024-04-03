import { ProductType } from '../types/ProductType'

const getFilterProducts = (
	products: ProductType[],
	category: string
): ProductType[] => {
	return products.filter(product => product.category === category)
}

export default getFilterProducts
