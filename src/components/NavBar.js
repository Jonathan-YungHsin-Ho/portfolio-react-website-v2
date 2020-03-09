import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import Title from './Title';

export default function NavBar() {
	const location = useLocation();

	return (
		<StyledNav className='nav-bar'>
			<Title />
			<div className='nav-bar-links'>
				<Link
					to='/#projects'
					className={location.hash === '#projects' ? 'active' : ''}>
					Projects
				</Link>
				<Link
					to='/#skills'
					className={location.hash === '#skills' ? 'active' : ''}>
					Skills
				</Link>
				<NavLink to='/about' activeClassName='active'>
					About Me
				</NavLink>
				<NavLink to='/contact' activeClassName='active'>
					Contact
				</NavLink>
			</div>
		</StyledNav>
	);
}

const StyledNav = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	background-color: white;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.75rem 1rem;

	border-bottom: 1px solid silver;

	.nav-bar-links {
		display: flex;
		justify-content: space-between;
		width: 30rem;
		margin: 0 2rem;

		font-size: 1.8rem;
	}

	.nav-bar-links a {
		font-size: 1.5rem;
		color: var(--dark-color);
		text-decoration: none;
		letter-spacing: 0.05rem;
		transition: text-shadow 0.2s;
	}

	.nav-bar-links a:hover,
	.active {
		text-shadow: 0 0 0.7px var(--dark-color), 0 0 0.7px var(--dark-color);
	}

	@media screen and (max-width: 1040px) {
		.nav-bar {
			flex-direction: column;
		}

		.title {
			align-self: flex-start;
		}

		.nav-bar-links {
			align-self: flex-end;
			margin-top: 0.5rem;
		}
	}

	@media screen and (max-width: 420px) {
		.nav-bar-links {
			align-self: center;
			margin: 0.5rem 0 0;
		}
	}

	@media screen and (max-width: 380px) {
		h1 {
			font-size: 2.4rem;
		}
	}

	@media screen and (max-width: 367px) {
		h1 {
			font-size: 2.3rem;
		}
	}

	@media screen and (max-width: 352px) {
		h1 {
			font-size: 2.2rem;
		}
	}

	@media screen and (max-width: 340px) {
		h1 {
			font-size: 2.1rem;
		}

		h2 {
			font-size: 1.8rem;
		}
	}

	@media screen and (max-width: 327px) {
		h1 {
			font-size: 2rem;
		}
	}
`;
