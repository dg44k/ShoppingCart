import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProductType } from '../../types/ProductType'

interface ICartState {
	products: ProductType[]
	amount: number
}

const initialState: ICartState = {
	products: [],
	amount: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<ProductType>) => {
			state.products.push(action.payload)
		},
		removeProduct: (state, action) => {
			state.products.filter(
				(product: ProductType) => product !== action.payload
			)
		},
	},
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer
