import React from 'react';
import { Landing, Projects, Skills } from '../components';
import styled from 'styled-components';

export default function Main() {
	return (
		<StyledMain>
			<Landing />
			<Projects />
			<Skills />
		</StyledMain>
	);
}

const StyledMain = styled.div`
	margin: 4.6rem 0 5rem;
`;
