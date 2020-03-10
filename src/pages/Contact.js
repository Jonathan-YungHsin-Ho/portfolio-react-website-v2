import React, { useState } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../styled-components/StyledComponents';

export default function Contact() {
	const [message, setMessage] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [feedback, setFeedback] = useState('');
	const [error, setError] = useState('');

	const handleChange = e =>
		setMessage({ ...message, [e.target.name]: e.target.value });

	const sendFeedback = (
		templateId,
		fromName,
		fromEmail,
		message,
		toEmail,
		user,
	) => {
		window.emailjs
			.send(
				'gmail',
				templateId,
				{ fromName, fromEmail, message, toEmail },
				user,
			)
			.then(res => {
				// console.log(res);
				setFeedback('Your message was successfully sent!');
				setMessage({ name: '', email: '', message: '' });
			})
			.catch(err => {
				console.log('Failed to send message. Error: ', err);
				setError('Sorry, message failed to send');
			});
	};

	const handleSubmit = e => {
		e.preventDefault();
		// console.log(message);

		sendFeedback(
			process.env.REACT_APP_EMAILJS_TEMPLATEID,
			message.name,
			message.email,
			message.message,
			process.env.REACT_APP_EMAILJS_RECEIVER,
			process.env.REACT_APP_EMAILJS_USERID,
		);
	};

	return (
		<PageWrapper>
			<ContactPage>
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
					<div className='contact-button-row'>
						<button onClick={handleSubmit}>Send Message</button>
						<div className='message-feedback'>
							<span style={{ color: 'green' }}>{feedback}</span>
							<span style={{ color: 'red' }}>{error}</span>
						</div>
					</div>
				</form>
			</ContactPage>
		</PageWrapper>
	);
}

const ContactPage = styled.section`
	margin: 10rem auto;
	width: 98%;
	max-width: 54rem;

	.contact-button-row {
		display: flex;
		align-items: center;
	}

	.message-feedback {
		margin-left: 5rem;
	}
`;
