import * as React from 'react';
import { Typography, Empty } from 'antd';
import { Flex, FlexProps } from '../Flex';
import { Card } from '../Card';
import styled from '../../styled';

const ScrollWrapper = styled.div`
	margin-bottom: 16px;
`;

const Scroll = styled(Flex)<FlexProps>`
	overflow-x: scroll;
	min-width: 100%;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export interface HorizontalScrollProps {
	title: React.ReactNode;
	dataSource: string[];
	renderItem: (data: any) => React.ReactElement;
	style?: React.CSSProperties;
}

const HorizontalScrollWrapper: React.FC<HorizontalScrollProps> = ({ title, dataSource, renderItem, style }) => {
	let content;

	if (!dataSource.length) {
		content = <Card><Empty/></Card>;
	} else {
		content = (
			<Scroll>
				{dataSource.map((data, i) => {
					const element = renderItem(data);
					return React.cloneElement(element, { ...element.props, key: i });
				})}
			</Scroll>
		)
	}

	return (
		<ScrollWrapper style={style}>
			<Typography.Title level={3}>{title}</Typography.Title>

			{content}
		</ScrollWrapper>
	);
};

export default HorizontalScrollWrapper;