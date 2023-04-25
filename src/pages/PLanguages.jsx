import React from 'react';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { TbSql} from 'react-icons/tb';
import { FaReact, FaLaravel, FaNodeJs, FaSass, FaGitAlt, FaNpm } from 'react-icons/fa';
import { SiMysql, SiPhp, SiPython, SiMongodb} from 'react-icons/si';
import './PLanguages.css';
import Navbar from '../components/Navbar';
import { FcLinux } from 'react-icons/fc';
import { DiVim } from 'react-icons/di';

const PLanguages = () => {
	return (
		<>
			<Navbar />
			<div className='ll' id='skills'>
				<div className='ll-texts'>
					<h1 className='ll-title'>Skills</h1>
				</div>
				<div className='ll-list'>
					<div className='ll-item'>
						<IoLogoJavascript className='ll-icon' color='gold' />
						<p className='ll-text'>JavaScript</p>
					</div>
					<div className='ll-item'>
						<IoLogoHtml5 className='ll-icon' color='orange' />
						<p className='ll-text'>HTML</p>
					</div>
					<div className='ll-item'>
						<IoLogoCss3 className='ll-icon' color='blue' />
						<p className='ll-text'>CSS</p>
					</div>
					<div className='ll-item'>
						<FaReact className='ll-icon' color='cyan' />
						<p className='ll-text'>React</p>
					</div>
					<div className='ll-item'>
						<SiMysql className='ll-icon' color=' #ffb366' />
						<p className='ll-text'>MySQL</p>
					</div>

					<div className='ll-item'>
						<FaGitAlt className='ll-icon' color=' #ff3300' />
						<p className='ll-text'>Git</p>
					</div>
					<div className='ll-item'>
						<FaNpm className='ll-icon' color=' #ff3300' />
						<p className='ll-text'>npm</p>
					</div>
					<div className='ll-item'>
						<FcLinux className='ll-icon' color=' #ff3300' />
						<p className='ll-text'>Linux</p>
					</div>
					<div className='ll-item'>
						<DiVim className='ll-icon' color=' #7edd47' />
						<p className='ll-text'>Vim</p>
					</div>
				</div>
				<div className='ll-texts'>
					<h2 className='ll-title'>Learning</h2>
				</div>
				<div className='ll-list'>
					<div className='ll-item'>
						<SiPhp className='ll-icon' color='#9999ff' />
						<p className='ll-text'>PHP</p>
					</div>
					<div className='ll-item'>
						<FaLaravel className='ll-icon' color='#ff1a1a' />
						<p className='ll-text'>Laravel</p>
					</div>
					<div className='ll-item'>
						<SiPython className='ll-icon' color=' #3366ff' />
						<p className='ll-text'>Python</p>
					</div>
					<div className='ll-item'>
						<TbSql className='ll-icon' color='purple' />
						<p className='ll-text'>SQL</p>
					</div>
					<div className='ll-item'>
						<SiMongodb className='ll-icon' color=' #009933' />
						<p className='ll-text'>MongoDB</p>
					</div>
					<div className='ll-item'>
						<FaNodeJs className='ll-icon' color=' #009933' />
						<p className='ll-text'>NodeJS</p>
					</div>
					<div className='ll-item'>
						<FaSass className='ll-icon' color=' #8f246b' />
						<p className='ll-text'>SASS</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default PLanguages;
