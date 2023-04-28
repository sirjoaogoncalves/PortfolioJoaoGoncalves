import React from 'react';
import './Contact.css';
import Navbar from '../components/Navbar';

const Contact = () => {
	const handleSubmit = async event => {
		event.preventDefault();

		// Get form data
		const formData = new FormData(event.target);
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		// Prepare request data
		const data = {
			name,
			email,
			message,
		};

		try {
			// Make POST request to backend API
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});


			// Check if response is successful
			if (response.ok) {
				alert('Form submitted successfully!');
				// Reset form fields if needed
				event.target.reset();
			} else {
				alert('Failed to submit form. Please try again.');
			}
		} catch (error) {
			console.error(error);
			alert('Failed to submit form. Please try again.');
		}
	};

	return (
		<>
			<Navbar />
			<div className='contact-page' id='contact'>
				<h1>Contact Me</h1>
				<form className='contact-form' onSubmit={handleSubmit}>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' name='name' required />

					<label htmlFor='email'>Email</label>
					<input type='email' id='email' name='email' required />

					<label htmlFor='message'>Message</label>
					<textarea id='message' name='message' rows='5' required />

					<button type='submit'>Submit</button>
				</form>
			</div>
		</>
	);
};

export default Contact;