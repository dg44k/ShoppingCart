import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	addProduct,
	buyProduct,
	removeProduct,
} from '../../state/cart/cartSlice'
import { AppDispatch } from '../../state/store'
import { ProductType } from '../../types/ProductType'
import ButtonCart from './ButtonCart'

const CardProductInCart: React.FC<ProductType> = (props: ProductType) => {
	const dispatch = useDispatch<AppDispatch>()

	return (
		<div className='info_card-cart'>
			<div className='card-product card-product_cart'>
				<div className='card-product__icons--show'>
					<Link to='/cardId' className='link-icon-redirect btn-icon'></Link>
				</div>
				<img
					src={props.image}
					alt=''
					className='card-product__pict card-product__pict-in_cart'
				/>
			</div>
			<div className='about-card'>
				<p className='card__title-in_cart'>{props.title}</p>
				<div className='card__count-in_cart'>
					<ButtonCart
						cl='card__count-in_cart--plus'
						onClick={() => dispatch(addProduct(props))}
					>
						+
					</ButtonCart>
					<span className='card__count-in_cart--value'>{props.count}</span>
					<ButtonCart
						cl='card__count-in_cart--minus'
						onClick={() => dispatch(removeProduct(props))}
					>
						-
					</ButtonCart>
				</div>
				<p className='card__price-in_cart'>{props.price} $</p>
				<div className='btn-action-flex'>
					<ButtonCart
						cl='btn-remove'
						onClick={() => dispatch(removeProduct(props))}
					>
						Remove
					</ButtonCart>
					<ButtonCart cl='btn-buy' onClick={() => dispatch(buyProduct())}>
						Buy
					</ButtonCart>
				</div>
			</div>
		</div>
	)
}

export default CardProductInCart
