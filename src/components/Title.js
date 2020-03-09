import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Title() {
	const history = useHistory();

	return (
		<StyledTitle onClick={() => history.push('/')}>
			<h1 className='title-bold'>Jonathan Yung-Hsin Ho</h1>
			<h1 className='title-normal'>Full-Stack Web Developer</h1>
		</StyledTitle>
	);
}

const StyledTitle = styled.div`
	display: flex;
	flex-wrap: wrap;
	cursor: pointer;

	.title-bold {
		margin-right: 0.7rem;
	}

	.title-normal {
		font-weight: normal;
		margin-right: 2rem;
	}
`;
