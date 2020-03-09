import React from 'react';
import styled from 'styled-components';
import { SectionWrapper } from '../styled-components/StyledComponents';
import Project from './Project';
import { projects } from '../content/projects';

export default function Projects() {
	return (
		<SectionWrapper>
			<section className='projects-page'>
				<h2>Products</h2>
				{projects.map(project => (
					<Project project={project} />
				))}
			</section>
		</SectionWrapper>
	);
}
