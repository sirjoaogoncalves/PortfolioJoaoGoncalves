import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import '../styles/Navbar.css';
import { useState } from 'react';



function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<nav className='navbar'>
			<div className='navbar-toggle' onClick={toggleMenu}>
				<span className='sr-only'>#</span>
			</div>
			<ul className={`navbar-links ${showMenu ? 'active' : ''}`}>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/skills'>Skills</Link>
				</li>
				<li>
					<Link to='/projects'>Projects</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
