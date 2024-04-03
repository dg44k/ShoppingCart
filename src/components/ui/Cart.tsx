import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../state/store'
import { ProductType } from '../../types/ProductType'
import ButtonCart from './ButtonCart'
import CardProductInCart from './CardProductInCart'
import { clearProducts, payCart } from '../../state/cart/cartSlice'


const Cart: React.FC = () => {
	const listProductsInCart = useSelector(
		(state: RootState) => state.cart.products
	)
	const amountProductsInCart = useSelector(
		(state: RootState) => state.cart.amount
	)
	const dispatch = useDispatch<AppDispatch>()


	return (
		<div className='wrapper-cart'>
			<h1 className='intro-page intro-cart'>CART</h1>
			<div className='container container-cart'>
				<div className='selected-products'>
					{listProductsInCart.map((card: ProductType) => (
						<CardProductInCart
							key={card.id}
							title={card.title}
							price={card.price}
							image={card.image}
							id={card.id}
							count={card.count}
						/>
					))}
				</div>
				<div className='amount-all_products'>
					Amount: {amountProductsInCart} $
				</div>
				<div className='btn-action-flex'>
					<ButtonCart cl='btn-clear' onClick={() => dispatch(clearProducts())}>Clear cart</ButtonCart>
					<ButtonCart cl='btn-pay' onClick={() => dispatch(payCart())}>Pay for cart</ButtonCart>
				</div>
			</div>
		</div>
	)
}

export default Cart
