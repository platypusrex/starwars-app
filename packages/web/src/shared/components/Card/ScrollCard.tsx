import * as React from 'react';
import { CardProps } from 'antd/lib/card';
import CardStyled from './CardStyled';
import styled from '../../styled';

export const ScrollCard: React.FC<CardProps> = styled(CardStyled)<CardProps>`
	&.ant-card {
		min-width: 315px;
	  margin-right: 16px;
	  height: fit-content;
	}
	
	&.ant-card-body {
		height: 100%; 
		display: flex; 
		flex-direction: column;
	}
	
	a {
		margin-top: auto;
		text-transform: uppercase;
		font-size: 12.5px;
	}
`;