import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProductsInCart } from '../../types/ProductType'

interface ICartState {
	products: IProductsInCart[]
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
		addProduct: (state, action: PayloadAction<IProductsInCart>) => {
			let isDoubleCard = false
			state.products.forEach((product: IProductsInCart) => {
				if (product.id === action.payload.id) {
					console.log(product.count, (product.count = product.count + 1))
					product.count = product.count
						? product.count + 1
						: (product.count = 0)
					isDoubleCard = true
				}
			})
			isDoubleCard ? state.products : state.products.push(action.payload)
		},
		removeProduct: (state, action: PayloadAction<number>) => {
			state.products = state.products.filter((product: IProductsInCart) => {
				if (product.id === action.payload && product.count > 1) {
					product.count = product.count - 1
					return true
				} else {
					return product.id !== action.payload
				}
			})
		},
	},
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer
