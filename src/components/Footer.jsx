import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<p className='footer-text'>&copy; {new Date().getFullYear()} João Gonçalves. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
