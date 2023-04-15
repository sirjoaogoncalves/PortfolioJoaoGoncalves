import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './Navbar.css'; 
import {FaLinkedin, FaGithubAlt} from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar__list'>
				<li className='navbar__item'>
					<Link to='/' className='navbar__link'>
						Home
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='/about' className='navbar__link'>
						About
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='/programming-languages' className='navbar__link'>
						Programming Languages
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='/projects' className='navbar__link'>
						Projects
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='/contact' className='navbar__link'>
						Contact
					</Link>
				</li>
				<li className='navbar__icons'>
					<a href='https://www.linkedin.com/in/joao-gon%C3%A7alves-b4384b255/' target='_blank' rel='noopener noreferrer' className='navbar__link' aria-label='LinkedIn'>
						<FaLinkedin />
					</a>
				</li>
				<li className='navbar__icons'>
					<a href='https://github.com/sirjoaogoncalves' target='_blank' rel='noopener noreferrer' className='navbar__link' aria-label='GitHub'>
						<FaGithubAlt />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
