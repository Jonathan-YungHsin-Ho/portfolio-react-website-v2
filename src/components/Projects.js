import React from 'react';
import styled from 'styled-components';
import { SectionWrapper } from '../styled-components/StyledComponents';
import Project from './Project';
import { projects } from '../content/projects';

export default function Projects() {
	return (
		<SectionWrapper>
			<section className='projects-page'>
				<span className='anchor' id='projects'></span>
				<h2>Projects</h2>
				{projects.map((project, index) => (
					<Project key={index} project={project} />
				))}
			</section>
		</SectionWrapper>
	);
}
