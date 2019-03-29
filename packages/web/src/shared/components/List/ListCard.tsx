import * as React from 'react';
import { List as AntList, Typography } from 'antd';
import { ListProps as AntListProps } from 'antd/lib/list';
import { Card } from '../Card';

interface ListCardProps extends AntListProps {
	title: React.ReactNode;
	maxListLength?: number;
}

const ListCard: React.FC<ListCardProps> = ({ title, dataSource, maxListLength, ...rest }) => {
	return (
		<Card
			title={<Typography.Title level={4} style={{ marginBottom: 0 }}>{title}</Typography.Title>}
			bodyStyle={{ padding: '10px 20px'}}
			style={{ marginBottom: 16 }}
		>
			<AntList
				dataSource={dataSource.slice(0, maxListLength || dataSource.length)}
				{...rest}
			/>
		</Card>
	);
};

export default ListCard;