import { Link } from 'react-router-dom'
import ImageIntro from '../../assets/img/intro.jpg'

const Home: React.FC = () => {
	return (
		<>
			<div className='wrapper-home'>
				<div className='container home-container'>
					<img src={ImageIntro} alt='intro shop' className='image-intro' />
					<div className='text-intro'>
						<h1 className='text-intro_title'>Lorem ipsum dolor sit amet.</h1>
						<p className='text-intro__subtitle'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
							nihil repudiandae dicta optio necessitatibus voluptatum ipsa
							sapiente autem enim fugiat. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Et, sint!
						</p>
						<Link to='shop'>
							<button className='btn-cart'>Shop Now</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
