import React from 'react'
import '../../assets/css/base.css'
import ImageCart from '../../assets/img/cart.png'
import ImageProfile from '../../assets/img/profile-user.png'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
	return (
		<header>
			<div className='container h-container'>
				<div className='logo'>
					<Link to='/'>Logo</Link>
				</div>

				<nav className='navbar'>
					<ul className='nav-list'>
						<li className='item-list'>
							<Link to='/' className='link-item'>
								HOME
							</Link>
						</li>
						<li className='item-list'>
							<Link to='shop' className='link-item'>
								SHOP
							</Link>
						</li>
						<li className='item-list'>
							<Link to='cart' className='link-item'>
								CART
							</Link>
						</li>
					</ul>
				</nav>

				<div className='l-block'>
					<div className='cart'>
						<Link to='cart'>
							<img src={ImageCart} alt='cart' className='image-cart' />
						</Link>
					</div>
					<div className='profile-user'>
						<a href='#'>
							<img
								src={ImageProfile}
								alt='profile user'
								className='image-profile'
							/>
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
