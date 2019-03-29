import * as React from 'react';
import { Flex } from '../Flex';
import { Card } from '../Card';

export interface PageHeaderProps {
	title: React.ReactNode;
	subTitle?: React.ReactNode;
	style?: React.CSSProperties;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subTitle, children, style }) => {
	return (
		<Card style={{...style, marginBottom: 30 }}>
			<Flex column={true} justifyContent="center">
				<h1 style={{ margin: 0, fontSize: 32}}>{title}</h1>
				{subTitle && <span style={{ marginTop: 10 }}>{subTitle}</span>}
			</Flex>

			{children}
		</Card>
	);
};

export default PageHeader;