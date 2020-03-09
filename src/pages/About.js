import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../styled-components/StyledComponents';

export default function About() {
	return (
		<PageWrapper>
			<StyledAbout>
				<div className='about-image'></div>
				<div className='about-text'>
					{/* <h2>About Me</h2> */}
					<p>
						After over a decade working with students of all ages in public and
						independent school settings, I decided to embrace a new challenge
						and expand my skills in a different direction. I joined the field of
						computer programming, particularly web development, because I
						thoroughly enjoy flexing the logical reasoning and problem-solving
						muscles required to bring a coding project to completion.
					</p>
					<br />
					<p>
						I'm a fast thinker, learner, and doer, adept at building on my prior
						knowledge and seeking resources to address any gaps in my current
						understanding. Additionally, the communication and collaboration
						skills I've developed over my career as an educator, as well as the
						flexibility and adaptability that come from working with diverse
						groups of people, including my students and other educators, are
						strengths that I bring with me to all my pursuits. I'm always
						learning and growing, and I'm excited to apply all that I've done
						and learned toward finding solutions for real-world problems.
					</p>
				</div>
			</StyledAbout>
		</PageWrapper>
	);
}

const StyledAbout = styled.section`
	padding-top: 10rem;
	margin: 0 auto;
	display: flex;
	justify-content: center;

	.about-image {
		background-image: url(/images/class.png);
		background-size: cover;
		flex-shrink: 0;

		width: 44rem;
		height: 25rem;

		margin-right: 2rem;
	}

	.about-text {
		max-width: 65ch;
	}

	@media screen and (max-width: 1100px) {
		.about-page {
			flex-direction: column;
			justify-content: flex-start;
		}

		.about-image {
			width: 55rem;
			height: 31rem;
			margin-bottom: 1rem;
		}
	}

	@media screen and (max-width: 520px) {
		.about-page {
			max-height: 73vh;
			overflow-y: auto;
		}

		.about-image {
			width: 49rem;
			height: 28rem;
		}
	}

	@media screen and (max-width: 480px) {
		.about-image {
			width: 45rem;
			height: 25rem;
		}
	}

	@media screen and (max-width: 460px) {
		.about-page {
			max-height: 73vh;
			overflow-y: auto;
		}

		.about-image {
			width: 43rem;
			height: 24rem;
		}
	}

	@media screen and (max-width: 440px) {
		.about-image {
			width: 41rem;
			height: 23rem;
		}
	}

	@media screen and (max-width: 420px) {
		.about-image {
			width: 39rem;
			height: 22rem;
		}
	}

	@media screen and (max-width: 370px) {
		.about-image {
			width: 34rem;
			height: 20rem;
		}
	}

	@media screen and (max-width: 330px) {
		.about-image {
			width: 30rem;
			height: 17rem;
		}
	}
`;
