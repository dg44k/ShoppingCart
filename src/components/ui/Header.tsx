import React from 'react'
import '../../assets/css/base.css'
import ImageCart from '../../assets/img/cart.png'
import ImageProfile from '../../assets/img/profile-user.png'

const Header: React.FC = () => {
	return (
		<header>
			<div className="container h-container">
			<div className='logo'>
				<a href='#'>Logo</a>
			</div>

			<nav className='navbar'>
				<ul className='nav-list'>
					<li className='item-list'>
						<a href='#' className='link-item'>HOME</a>
					</li>
					<li className='item-list'>
						<a href='#' className='link-item'>SHOP</a>
					</li>
					<li className='item-list'>
						<a href='#' className='link-item'>CART</a>
					</li>
				</ul>
			</nav>

			<div className='l-block'>
				<div className='cart'>
					<a href='#'>
						<img src={ImageCart} alt='cart' className='image-cart' />
					</a>
				</div>
				<div className='profile-user'>
					<a href='#'>
						<img src={ImageProfile} alt='profile user' className='image-profile' />
					</a>
				</div>
			</div>
			</div>
		</header>
	)
}

export default Header
