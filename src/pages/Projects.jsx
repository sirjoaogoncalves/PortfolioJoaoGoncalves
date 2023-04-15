import React from 'react';
import './Projects.css';
import Navbar from '../components/Navbar';
import './Projects.css';
import recipesImg from '../img/recipesImg.png';
import regImg from '../img/formReg.png';
import eshopImg from '../img/eshopImg.png';

const Projects = () => {
	return (
		<>
			<Navbar />
			<div id='projects'>
				<h1>Projects</h1>
				<div className='project-cards'>
					<div className='project-card'>
						<img src={recipesImg} alt='Project 1' />
						<h3>Recipes App</h3>
						<p>
							Simple ReactJS app that allows users to search for recipes based on the ingredients they have in their pantry. This app was built with React.API used from{' '}
							<b>
								<i>Spoonacular</i>
							</b>
						</p>
						<a href='https://sirjoaogoncalves.github.io/Recipes-Search-APP-ReactJS/' target='_blank' rel='noopener noreferrer'>
							View Live
						</a>
						<a href='https://github.com/sirjoaogoncalves/Recipes-Search-APP-ReactJS' target='_blank' rel='noopener noreferrer'>
							GitHub
						</a>
					</div>
					<div className='project-card'>
						<img src={regImg} alt='Project 2' />
						<h3>Basic Registration Form</h3>
						<p>Just a simple form that allows users to register for an account. This form was built with ReactJs, backend was not used, this is simply some basic code.</p>
						<a href='https://sirjoaogoncalves.github.io/Basic-Registration-Form-using-React.js/' target='_blank' rel='noopener noreferrer'>
							View Live
						</a>
						<a href='https://github.com/sirjoaogoncalves/Basic-Registration-Form-using-React.js' target='_blank' rel='noopener noreferrer'>
							GitHub
						</a>
					</div>
					<div className='project-card'>
						<img src={eshopImg} alt='Project 3' />
						<h3>Everything Shop</h3>
						<p>Static E-commerce website. This was built with ReactJs, backend was not used, this is simply some basic code.</p>
						<a href='https://sirjoaogoncalves.github.io/EverythingShop/' target='_blank' rel='noopener noreferrer'>
							View Live
						</a>
						<a href='https://github.com/sirjoaogoncalves/EverythingShop' target='_blank' rel='noopener noreferrer'>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
