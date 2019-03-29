import * as React from 'react';
import { Flex } from '../Flex';
import { Typography } from 'antd';

interface StatItemProps {
	label: React.ReactNode;
	stat: React.ReactNode;
}

const StatItem:React.FC<StatItemProps> = ({ label, stat }) => {
	return (
		<Flex justifyContent="space-between" alignItems="flex-start" style={{ lineHeight: '18px' }}>
			<Typography.Text strong={true} style={{ fontSize: 10, textTransform: 'uppercase', minWidth: 80 }}>
				{label}
			</Typography.Text>

			<Typography.Text type="secondary" style={{ fontSize: 12, textAlign: 'right' }}>
				{stat}
			</Typography.Text>
		</Flex>
	);
};

export default StatItem;