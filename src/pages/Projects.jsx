import React from 'react';
import './Projects.css';
import Navbar from '../components/Navbar';
import './Projects.css';
import recipesImg from '../img/recipesImg.png';
import regImg from '../img/formReg.png';
import eshopImg from '../img/eshopImg.png';
import connectFour from '../img/connectFour.png';
import spaceEscape from '../img/spaceEscape.png';
import pongGame from '../img/pongGame.png';
import SnakeGame from '../img/SnakeGame.png';

const Projects = () => {
	return (
		<>
			<Navbar />
			<div id='projects'>
				<h1>Projects</h1>
				<div className='project-cards'>
					<div className='project-card'>
						<img src={pongGame} alt='Project 1' />
						<h3>Pong Game</h3>
						<p>Basic Pong Game using Javascript. Responsive.</p>
						<a href='https://sirjoaogoncalves.github.io/PongGame/' target='_blank' rel='noopener noreferrer'>
							View Live
						</a>
						<a href='https://github.com/sirjoaogoncalves/PongGame' target='_blank' rel='noopener noreferrer'>
							GitHub
						</a>
					</div>
					<div className='project-card'>
						<img src={SnakeGame} alt='Project 2' />
						<h3>Snake Game</h3>
						<p>Snake Game. Made with Javascript. Hope you enjoy!</p>
						<a href='https://sirjoaogoncalves.github.io/SnakeGame/' target='_blank' rel='noopener noreferrer'>
							View Live
						</a>
						<a href='https://github.com/sirjoaogoncalves/SnakeGame' target='_blank' rel='noopener noreferrer'>
							GitHub
						</a>
					</div>
					<div className='project-card'>
						<img src={recipesImg} alt='Project 3' />
						<h3>Recipes App</h3>
						<p>
							Simple ReactJS app that allows users to search for recipes based on the ingredients they have in their pantry. This app was built with React. API used from{' '}
							<b>
								<i>Spoonacular</i>
							</b>
							.
						</p>
						<a href='https://sirjoaogoncalves.github.io/Recipes-Search-APP-ReactJS/' target='_blank' rel='noopener noreferrer'>
							View Live
						</a>
						<a href='https://github.com/sirjoaogoncalves/Recipes-Search-APP-ReactJS' target='_blank' rel='noopener noreferrer'>
							GitHub
						</a>
					</div>
					<div className='project-card'>
						<img src={spaceEscape} alt='Project 4' />
						<h3>Space Escape</h3>
						<p>Just a basic game that works on and teaches Javascript logic. 'Working on responsive'</p>
						<a href='https://sirjoaogoncalves.github.io/SpaceEscape/' target='_blank' rel='noopener noreferrer'>
							View Live
						</a>
						<a href='https://github.com/sirjoaogoncalves/SpaceEscape' target='_blank' rel='noopener noreferrer'>
							GitHub
						</a>
					</div>

					<div className='project-card'>
						<img src={eshopImg} alt='Project 5' />
						<h3>Everything Shop</h3>
						<p>Static E-commerce website. This was built with ReactJs, backend was not used, this is simply some basic code. 'Working on responsive'</p>
						<a href='https://sirjoaogoncalves.github.io/EverythingShop/' target='_blank' rel='noopener noreferrer'>
							View Live
						</a>
						<a href='https://github.com/sirjoaogoncalves/EverythingShop' target='_blank' rel='noopener noreferrer'>
							GitHub
						</a>
					</div>
					<div className='project-card'>
						<img src={connectFour} alt='Project 6' />
						<h3>Connect Four Game</h3>
						<p>Just a basic game that works on and teaches Javascript logic. 'Working on responsive'</p>
						<a href='https://sirjoaogoncalves.github.io/ConnectFour/' target='_blank' rel='noopener noreferrer'>
							View Live
						</a>
						<a href='https://github.com/sirjoaogoncalves/ConnectFour' target='_blank' rel='noopener noreferrer'>
							GitHub
						</a>
					</div>
					<div className='project-card'>
						<img src={regImg} alt='Project 7' />
						<h3>Basic Registration Form</h3>
						<p>Just a simple form that allows users to register for an account. This form was built with ReactJs, backend was not used, this is simply some basic code.</p>
						<a href='https://sirjoaogoncalves.github.io/Basic-Registration-Form-using-React.js/' target='_blank' rel='noopener noreferrer'>
							View Live
						</a>
						<a href='https://github.com/sirjoaogoncalves/Basic-Registration-Form-using-React.js' target='_blank' rel='noopener noreferrer'>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
