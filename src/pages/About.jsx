import React from 'react';
import '../styles/About.css';
import me1 from '../img/me1.JPG';
import Navbar from '../components/Navbar';

function About() {
	return (
		<>
			<Navbar />
			<div className='a' id='about'>
				<div className='a-left'>
					<div className='a-card bg'></div>
					<div className='a-card'>
						<img src={me1} alt='' className='a-img' />
					</div>
				</div>
				<div className='a-right'>
					<h1 className='a-title'>About Me</h1>
					<p className='a-sub'></p>
					<p className='a-desc'>
						I am an aspiring developer who embarked on a journey into the world of programming just one year ago. Passionately diving into the realms of web development and SQL DBA, constantly
						learning and growing in these fields. With a keen interest in object-oriented languages, looking forward to honing skills in this area and unlocking new possibilities in the world of
						coding. Excited for the next chapter of the coding adventure!
					</p>
				</div>
			</div>
		</>
	);
}

export default About;
