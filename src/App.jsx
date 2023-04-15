import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PLanguages from './pages/PLanguages';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			{/* Wrap the entire app with Router component */}
			<div className='App'>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} /> 
					<Route exact path='/about' element={<About />} /> 
					<Route exact path='/programming-languages' element={<PLanguages />} />
					<Route exact path='/projects' element={<Projects />} />
					<Route exact path='/contact' element={<Contact />} />
				</Routes>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;
