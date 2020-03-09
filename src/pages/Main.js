import React from 'react';
import { Landing, Projects, Skills } from '../components';
import { PageWrapper } from '../styled-components/StyledComponents';

export default function Main() {
	return (
		<PageWrapper>
			<Landing />
			<Projects />
			<Skills />
		</PageWrapper>
	);
}
