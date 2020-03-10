import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../styled-components/StyledComponents';

export default function About() {
	return (
		<PageWrapper>
			<StyledAbout>
				{/* <div className='about-image'></div> */}
				<div className='about-text'>
					<h2>About Me</h2>
					<p>
						I'm a full-stack web developer and former classroom educator. I
						joined the field of web development because I enjoy using logical
						reasoning and problem-solving to bring lines of code to life.
					</p>
					<br />
					<p>
						I'm a fast learner and doer, adept at building on my prior knowledge
						and finding resources to bridge gaps in my understanding. The
						communication and collaboration skills I've developed over my career
						as an educator and my experience working with diverse groups of
						people are strengths that I bring to all of my pursuits.
					</p>
					<br />
					<p>
						I'm always learning and growing, and I'm excited to apply all that
						I've learned toward finding solutions for real-world problems.
					</p>
				</div>
				<div className='about-text'>
					<h2>Outside of Coding</h2>
					<p>
						My interests in making things extend past the computer screen; I
						send hand-drawn postcards when I travel, and I make hand-bound
						journals. I'm currently working on a book about my experiences in
						education.
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
