import ImageIconCart from '../../assets/img/icon-cart.png'
import { ProductType } from '../../types/ProductType'

const CardProduct: React.FC<ProductType> = (props: ProductType) => {
	return (
		<div className='card-product'>
			<div className='card-product--show'>
				<img src={ImageIconCart} alt='icon cart' />
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
