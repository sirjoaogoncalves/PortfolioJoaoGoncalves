import React from 'react'
import me from '../img/me.jpg'
import './Home.css'

const Home = () => {
   return (
			<div className='i' id='home'>
				<div className='i-left'>
					<div className='i-left-wrapper'>
						<h2 className='i-intro'>Hello, My name is</h2>
						<h1 className='i-name'>João Gonçalves</h1>
						<div className='i-title'>
							<div className='i-title-wrapper'>
								<div className='i-title-item'>Web Developer</div>
								<div className='i-title-item'>Web Designer</div>
								<div className='i-title-item'>SQL DBA</div>
							</div>
						</div>
						<p className='i-desc'>
							I design and develop web and mobile applications. Also, I specialize in creating the most stylish and modern websites. Currently learning how to develop and administrate SQL databases.
						</p>
					</div>
				</div>
				<div className='i-right'>
					<div className='i-bg'></div>
					<img src={me} alt='' className='i-img' />
				</div>
			</div>
		);
}

export default Home