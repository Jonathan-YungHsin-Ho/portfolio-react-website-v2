import React from 'react';
import styled from 'styled-components';
import { SectionWrapper } from '../styled-components/StyledComponents';

export default function Landing() {
	return (
		<SectionWrapper>
			<StyledLanding>
				<span className='anchor' id='home'></span>
				<div className='landing-image'></div>
				<div className='landing-text'>
					<h2>Hello, I'm Jonathan.</h2>
					<p>
						Full-stack web developer focused on emerging technologies and ed
						tech.
					</p>
					<p>
						12+ years experience in public, alternative, and democratic
						education.
					</p>
					<p>
						Lifelong learner with the skills needed to succeed in diverse team
						environments.
					</p>
				</div>
			</StyledLanding>
		</SectionWrapper>
	);
}

const StyledLanding = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	padding: 7.5rem 0 7.5rem;

	.landing-image {
		background-image: url(/images/picture.jpg);
		background-size: cover;

		width: 14.4rem;
		height: 14.4rem;

		margin-right: 2rem;
	}

	.landing-text {
		margin-left: 2rem;

		h2 {
			font-size: 3.6rem;
		}

		p {
			font-size: 2.7rem;
		}
	}
`;
