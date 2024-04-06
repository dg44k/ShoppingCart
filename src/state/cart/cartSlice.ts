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
			const existingProductIndex = state.products.findIndex(
				product => product.id === action.payload.id
			)

			if (existingProductIndex !== -1) {
				state.products[existingProductIndex].count += 1
			} else {
				state.products.push({ ...action.payload, count: 1 })
			}

			state.amount = +(state.amount + action.payload.price).toFixed(2)
		},
		removeProduct: (state, action: PayloadAction<ProductType>) => {
			state.products = state.products
				.map(product => {
					if (product.id === action.payload.id && product.count >= 1) {
						return { ...product, count: product.count - 1 }
					}
					return product
				})
				.filter(product => product.count > 0)

			state.amount = +(state.amount - action.payload.price).toFixed(2)
		},
		clearProducts: state => {
			state.products = []
			state.amount = 0
		},
		payCart: state => {
			state.products.length === 0
				? alert('Your cart is empty.')
				: alert('Congratulations! With new purchases!')

			state.products = []
			state.amount = 0
		},
		buyProduct: (state, action: PayloadAction<ProductType>) => {
			state.products = state.products.filter(
				product => product.id !== action.payload.id
			)
			state.amount = +(
				state.amount -
				action.payload.count * action.payload.price
			).toFixed(2)
			alert('Congratulations! With new purchases!')
		},
	},
})

export const { addProduct, removeProduct, clearProducts, payCart, buyProduct } =
	cartSlice.actions
export default cartSlice.reducer
