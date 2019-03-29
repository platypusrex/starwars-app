import * as React from 'react';
import { Flex, FlexProps } from '../Flex';
import styled from '../../styled';
import logo from '../../../assets/starwars_logo.png';

const LogoWrapper = styled(Flex)<FlexProps>`
	width: 60px;
	height: 100%;
	margin-right: 20px;
`;

const LogoImg = styled.img`
	width: 100%;
`;

export const Logo: React.FC<{}> = () => {
	return (
		<LogoWrapper centerAll={true}>
			<LogoImg src={logo} alt="Starwars Logo"/>
		</LogoWrapper>
	);
};