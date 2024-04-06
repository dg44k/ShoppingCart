import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../state/store'
import ButtonCart from './ButtonCart'
import { ProductType } from '../../types/ProductType'


const InfoCardView: React.FC = () => {
	const { id } = useParams()
	const targetCard: ProductType | undefined = useSelector((state: RootState) =>
		state.cards.products.find(pr => pr.id === +!id)
	)

	return (
		<div className='wrapper-card_view'>
			<div className='container container-card_view'>
				<img src={targetCard!.image} className='card_view__image' alt='' />
				<div className='card_view__info'>
					<p className='card_view__title'>{targetCard!.title}</p>
					<p className='card_view__category'>{targetCard!.category}</p>
					<p className='card_view__description'>{targetCard!.description}</p>
					<p className='card_view__price'>{targetCard!.price}</p>
					<div className='card_view_btns-flex'>
						<ButtonCart cl='card_view_btn'>Add in cart</ButtonCart>
						<ButtonCart cl='card_view_btn'>Buy</ButtonCart>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InfoCardView
