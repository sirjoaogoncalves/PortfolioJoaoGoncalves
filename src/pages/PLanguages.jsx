import React from 'react';
import { IoLogoJavascript} from 'react-icons/io';
import { TbSql} from 'react-icons/tb';
import { FaReact, FaNodeJs, FaSass, FaGitAlt, FaNpm } from 'react-icons/fa';
import { SiMysql, SiPhp, SiPython, SiMongodb } from 'react-icons/si';
import '../styles/PLanguages.css';
import Navbar from '../components/Navbar';
import { FcLinux } from 'react-icons/fc';
import {TbBrandCpp} from 'react-icons/tb';
import {TbBrandCSharp} from 'react-icons/tb';


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
						<IoLogoJavascript className='ll-icon' color='#f4f800' />
					</div>
					<div className='ll-item'>
						<FaSass className='ll-icon' color=' #8f246b' />
						
					</div>
					<div className='ll-item'>
						<FaReact className='ll-icon' color='cyan' />
						
					</div>
					<div className='ll-item'>
						<SiMysql className='ll-icon' color=' #f1e9e1' />
						
					</div>

					<div className='ll-item'>
						<FaGitAlt className='ll-icon' color=' #ff3300' />
						
					</div>
					<div className='ll-item'>
						<FaNpm className='ll-icon' color=' #ff0000' />
						
					</div>
					<div className='ll-item'>
						<FcLinux className='ll-icon' color=' #ff3300' />
						
					</div>
				</div>
				<div className='ll-texts'>
					<h2 className='ll-title'>Learning</h2>
				</div>
				<div className='ll-list'>
					<div className='ll-item'>
						<TbBrandCpp className='ll-icon' color='#1d7ae6' />
						
					</div>
					<div className='ll-item'>
						<TbBrandCSharp className='ll-icon' color='#c51de6' />
						
					</div>
					<div className='ll-item'>
						<SiPhp className='ll-icon' color='#9999ff' />
						
					</div>
					<div className='ll-item'>
						<SiPython className='ll-icon' color=' #3366ff' />
						
					</div>
					<div className='ll-item'>
						<TbSql className='ll-icon' color='#009991' />
						
					</div>
					<div className='ll-item'>
						<SiMongodb className='ll-icon' color=' #009933' />
						
					</div>
					<div className='ll-item'>
						<FaNodeJs className='ll-icon' color=' #009933' />
						
					</div>
				</div>
			</div>
		</>
	);
};
export default PLanguages;
