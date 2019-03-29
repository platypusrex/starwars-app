import * as React from 'react';
import styled from '../../styled';

const PageComponent: React.FC<{}> = (props) => (
	<div {...props}/>
);

export const Page = styled(PageComponent)`
	padding: 30px;
	margin: 0 auto;
	max-width: 1280px;
	height: 100%;
	
	@media screen and (max-width: 575px) {
		padding: 15px;
	}
`;