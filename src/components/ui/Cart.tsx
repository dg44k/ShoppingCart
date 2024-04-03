import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { IProductsInCart } from '../../types/ProductType'
import ButtonCart from './ButtonCart'
import CardProductInCart from './CardProductInCart'


const Cart: React.FC = () => {
	const listProductsInCart = useSelector(
		(state: RootState) => state.cart.products
	)
	const amountProductsInCart = useSelector(
		(state: RootState) => state.cart.amount
	)

	return (
		<div className='wrapper-cart'>
			<h1 className='intro-page intro-cart'>CART</h1>
			<div className='container container-cart'>
				<div className='selected-products'>
					{listProductsInCart.map((card: IProductsInCart) => (
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
					<ButtonCart cl='btn-clear'>Clear cart</ButtonCart>
					<ButtonCart cl='btn-pay'>Pay for cart</ButtonCart>
				</div>
			</div>
		</div>
	)
}

export default Cart
