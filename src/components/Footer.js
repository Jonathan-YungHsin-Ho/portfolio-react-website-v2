import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDarkMode } from '../hooks/useDarkMode';
import { useModeContext } from '../contexts/ModeContext';
import Resume from '../documents/resume.pdf';

export default function Footer() {
	const [darkMode, setDarkMode] = useDarkMode(false);

	const { dispatch } = useModeContext();

	const toggleMode = e => {
		e.preventDefault();
		setDarkMode(!darkMode);
		dispatch({ type: 'SET_MODE', payload: darkMode });
	};

	return (
		<StyledFooterWrapper className='footer-wrapper'>
			<div className='footer'>
				<a href={Resume} target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={['fas', 'file']} className='icon' size='lg' />
				</a>
				<a
					href='https://www.linkedin.com/in/jonathan-y-ho/'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon
						icon={['fab', 'linkedin-in']}
						className='icon'
						size='lg'
					/>
				</a>
				<a
					href='https://github.com/Jonathan-YungHsin-Ho'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon
						icon={['fab', 'github']}
						className='icon'
						size='lg'
					/>
				</a>
				<a
					href='https://twitter.com/JonathanHoDev'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon
						icon={['fab', 'twitter']}
						className='icon'
						size='lg'
					/>
				</a>
				<a href='mailto:jonathan.yunghsin.ho@gmail.com'>
					<FontAwesomeIcon
						icon={['fas', 'envelope']}
						className='icon'
						size='lg'
					/>
				</a>
				{darkMode ? (
					<FontAwesomeIcon
						icon={['far', 'sun']}
						className='icon'
						size='lg'
						onClick={toggleMode}
					/>
				) : (
					<FontAwesomeIcon
						icon={['far', 'moon']}
						className='icon'
						size='lg'
						onClick={toggleMode}
					/>
				)}
			</div>
		</StyledFooterWrapper>
	);
}

const StyledFooterWrapper = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: white;
	display: flex;
	justify-content: flex-end;

	.footer {
		width: 32rem;
		padding: 1.5rem 3rem;
		display: flex;
		justify-content: space-between;
	}

	.icon {
		color: var(--dark-color);
		transition: color 0.2s;
		cursor: pointer;
	}

	.icon:hover {
		color: var(--hover-color);
	}

	@media screen and (max-width: 420px) {
		.footer {
			left: 0;
			right: 0;
			margin: auto;
		}
	}

	.dark-mode .footer {
		background-color: var(--dark-color);
		color: var(--light-color);
	}
`;
