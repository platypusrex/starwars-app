import * as React from 'react';
import { Card as AntCard } from 'antd';
import { CardMetaProps } from 'antd/lib/card';
import styled from '../../styled';

const CardMeta: React.FC<CardMetaProps> = styled(AntCard.Meta)<CardMetaProps>`
	.ant-card-meta-detail {
		margin-bottom: 20px;
	}
	
	.ant-card-meta-title {
		margin-bottom: 0 !important;
	}
`;

export default CardMeta;