import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import filterProductsByCategories from '../../services/filter'
import { ProductType } from '../../types/ProductType'

interface ICardsSlice {
	products: ProductType[]
	filterProducts: ProductType[]
}

const initialState: ICardsSlice = {
	products: [],
	filterProducts: [],
}

const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		updateProducts: (state, action: PayloadAction<ProductType[]>) => {
			state.products = action.payload
			state.filterProducts = state.products
		},
		getFilterProducts: (state, action: PayloadAction<string>) => {
			state.filterProducts = filterProductsByCategories(
				state.products,
				action.payload
			)
		},
	},
})

export const { updateProducts, getFilterProducts } = cardsSlice.actions
export default cardsSlice.reducer
