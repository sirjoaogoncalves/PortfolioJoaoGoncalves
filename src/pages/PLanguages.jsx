import React from 'react'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { TbSql, TbBrandVscode } from 'react-icons/tb';
import { FaReact, FaLaravel, FaNodeJs, FaSass, FaGitAlt, FaNpm } from 'react-icons/fa';
import { SiMysql, SiPhp, SiPython, SiMongodb, SiPycharm } from 'react-icons/si';
import './PLanguages.css';
import Navbar from '../components/Navbar';

const PLanguages = () => {
    return (
			<>
				<Navbar />
				<div className='ll' id='programming-languages'>
					<div className='ll-texts'>
						<h1 className='ll-title'>Progamming Languages</h1>
						<p className='ll-desc'>Heres some of the programming languages I use on my daily basis</p>
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
							<TbSql className='ll-icon' color='purple' />
							<p className='ll-text'>SQL</p>
						</div>
						<div className='ll-item'>
							<FaReact className='ll-icon' color='cyan' />
							<p className='ll-text'>React</p>
						</div>
						<div className='ll-item'>
							<SiMysql className='ll-icon' color=' #ffb366' />
							<p className='ll-text'>MySQL</p>
						</div>
					</div>
					<div className='ll-texts'>
						<h2 className='ll-title'>Learning</h2>
						<p className='ll-desc'>Languages that I'm learning</p>
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
					<div className='ll-texts'>
						<h2 className='ll-title'>Tools</h2>
						<p className='ll-desc'>Most used tools</p>
					</div>
					<div className='ll-list'>
						<div className='ll-item'>
							<FaGitAlt className='ll-icon' color=' #ff3300' />
							<p className='ll-text'>Git</p>
						</div>
						<div className='ll-item'>
							<TbBrandVscode className='ll-icon' color=' #80b3ff' />
							<p className='ll-text'>VSCode</p>
						</div>
						<div className='ll-item'>
							<SiPycharm className='ll-icon' color=' #55ff00' />
							<p className='ll-text'>PyCharm</p>
						</div>
						<div className='ll-item'>
							<FaNpm className='ll-icon' color=' #ff3300' />
							<p className='ll-text'>npm</p>
						</div>
					</div>
				</div>
			</>
		);
}
    export default PLanguages;