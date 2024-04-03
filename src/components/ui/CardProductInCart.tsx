import { useDispatch } from 'react-redux'
import { removeProduct } from '../../state/cart/cartSlice'
import { AppDispatch } from '../../state/store'
import { IProductsInCart } from '../../types/ProductType'
import ButtonCart from './ButtonCart'

const CardProductInCart: React.FC<IProductsInCart> = (
	props: IProductsInCart
) => {
	const dispatch = useDispatch<AppDispatch>()

	return (
		<div className='info_card-cart'>
			<div className='card-product card-product_cart'>
				<div className='card-product__icons--show'>
					<button className='btn-icon-redirect btn-icon'></button>
				</div>
				<img
					src={props.image}
					alt=''
					className='card-product__pict card-product__pict-in_cart'
				/>
			</div>
			<div className='about-card'>
				<p className='card__title-in_cart'>{props.title}</p>
				<p className='count'>Count: {props.count}</p>
				<p className='card__price-in_cart'>{props.price} $</p>
				<div className='btn-action-flex'>
					<ButtonCart
						cl='btn-remove'
						onClick={() => dispatch(removeProduct(props.id))}
					>
						Remove
					</ButtonCart>
					<ButtonCart cl='btn-buy'>Buy</ButtonCart>
				</div>
			</div>
		</div>
	)
}

export default CardProductInCart
