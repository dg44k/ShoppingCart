import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './cart/cartSlice'
import CardReducer from './cards/cardsSlice'

export const store = configureStore({
	reducer: {
		cart: CartReducer,
		cards: CardReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;