import { useParams } from 'react-router-dom'
import { ProductType } from '../../types/ProductType'
import ButtonCart from './ButtonCart'

type CardViewType = {
	description: string
} & ProductType

const InfoCardView: React.FC = () => {
	const { id } = useParams()
	return (
		<div className='wrapper-card_view'>
			<div className='container container-card_view'>
				<img src={props.image} className='card_view__image' alt='' />
				<div className='card_view__info'>
					<p className='card_view__title'>{props.title}</p>
					<p className='card_view__category'>{props.category}</p>
					<p className='card_view__description'>{props.description}</p>
					<p className='card_view__price'>{props.price}</p>
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
