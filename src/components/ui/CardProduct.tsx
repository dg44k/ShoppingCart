import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../../state/cart/cartSlice'
import { AppDispatch } from '../../state/store'
import { ProductType } from '../../types/ProductType'

const CardProduct: React.FC<ProductType> = (props: ProductType) => {
	const dispatch = useDispatch<AppDispatch>()

	return (
		<div className='card-product'>
			<div className='card-product__icons--show'>
				<button
					className='btn-icon-cart btn-icon'
					onClick={() => dispatch(addProduct(props))}
				></button>
				<Link to='/cardId' className='link-icon-redirect btn-icon'></Link>
			</div>
			<img src={props.image} alt='' className='card-product__pict' />
			<div className='card-product__info'>
				<p className='card-product__title'>{props.title}</p>
				<p className='card-product__price'>{props.price} $</p>
			</div>
		</div>
	)
}

export default CardProduct
