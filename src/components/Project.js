import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectLink from './ProjectLink';

export default function Project({ project }) {
	const imageStyle = {
		backgroundImage: `url(/images/${project.image})`,
		cursor: project && 'pointer',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		padding: '1rem',
	};

	return (
		<div className='project-summary'>
			<a href={project.site} target='_blank' rel='noopener noreferrer'>
				<div className='project-image' style={imageStyle}>
					<FontAwesomeIcon
						icon={['fas', 'external-link-alt']}
						size='sm'
						// className='icon'
						color={project.iconColor}
					/>
				</div>
			</a>
			<div className='project-text'>
				<div className='project-fields'>
					{project.fields &&
						Object.entries(project.fields).map(([key, value]) => (
							<div className='project-field' key={key}>
								<h3 style={{ flexShrink: '0' }}>{key}:</h3>
								<p>{value}</p>
							</div>
						))}
					<div className='project-field project-responsibilities'>
						{project.responsibilities && <h3>Responsibilities:</h3>}
						<ul>
							{project.responsibilities?.map((responsibility, index) => (
								<li key={index}>{responsibility}</li>
							))}
						</ul>
					</div>
					<div className='project-fields'>
						{project.stack &&
							Object.entries(project.stack).map(([key, value]) => (
								<div className='project-field' key={key}>
									<h3 style={{ flexShrink: '0' }}>{key}:</h3>
									<p>{value}</p>
								</div>
							))}
					</div>
				</div>
				<div className='project-links'>
					{project.links &&
						project.links.map(link => (
							<ProjectLink key={link.url} link={link} />
						))}
				</div>
			</div>
		</div>
	);
}
