import React from 'react';
import { SectionWrapper } from '../styled-components/StyledComponents';
import SkillCategory from './SkillCategory';
import { skillsFrontEnd, skillsBackEnd } from '../content/skills';

export default function Skills() {
	return (
		<SectionWrapper>
			<section className='skills-page'>
				<h2>Skills & Tech Stack</h2>
				<div className='skills-content'>
					<div className='skills-block'>
						<h3>Front-End</h3>
						<div className='skills-categories'>
							{skillsFrontEnd.map((category, index) => (
								<SkillCategory key={index} category={category} />
							))}
						</div>
					</div>
					<div className='skills-block'>
						<h3>Back-End</h3>
						<div className='skills-categories'>
							{skillsBackEnd.map((category, index) => (
								<SkillCategory key={index} category={category} />
							))}
						</div>
					</div>
				</div>
			</section>
		</SectionWrapper>
	);
}
