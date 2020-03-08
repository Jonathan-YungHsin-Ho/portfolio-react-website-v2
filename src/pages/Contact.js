import React, { useState } from 'react';

export default function Contact() {
	const [message, setMessage] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = e =>
		setMessage({ ...message, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		console.log(message);
	};

	return (
		<div className='page-container'>
			<section className='contact-page'>
				<h2>Get In Touch</h2>
				<p>
					Feel free to reach out if you'd like to discuss collaboration or other
					opportunities.
				</p>
				<form>
					<input
						type='text'
						name='name'
						placeholder='Name'
						value={message.name}
						onChange={handleChange}
					/>
					<input
						type='text'
						name='email'
						placeholder='Email'
						value={message.email}
						onChange={handleChange}
					/>
					<textarea
						name='message'
						placeholder='Message'
						rows='10'
						value={message.message}
						onChange={handleChange}
					/>
					<button onClick={handleSubmit}>Send Message</button>
				</form>
			</section>
		</div>
	);
}
