import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import {AppDispatch, RootState} from '../../state/store'
import { ProductType } from '../../types/ProductType'
import ButtonCart from './ButtonCart'
import {addProduct, buyProduct} from "../../state/cart/cartSlice.ts";

const InfoCardView: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const products: ProductType[] = useSelector(
		(state: RootState) => state.cards.products
	)
	const targetCard: ProductType | undefined = products.find(pr => pr.id === +id!)

	const dispatch = useDispatch<AppDispatch>();

	return (
		<div className='wrapper-card_view'>
			<div className='container container-card_view'>
				<img src={targetCard!.image} className='card_view__image' alt='' />
				<div className='card_view__info'>
					<p className='card_view__title'>{targetCard!.title}</p>
					<p className='card_view__category'>Category: {targetCard!.category}</p>
					<p className='card_view__description'>{targetCard!.description}</p>
					<p className='card_view__price'>{targetCard!.price} $</p>
					<div className='card_view_btns-flex'>
						<ButtonCart cl='card_view_btn' onClick={() => dispatch(addProduct(targetCard!))}>Add in cart</ButtonCart>
						<ButtonCart cl='card_view_btn' onClick={() => {dispatch(buyProduct())}}>Buy</ButtonCart>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InfoCardView
