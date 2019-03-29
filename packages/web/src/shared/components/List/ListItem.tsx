import * as React from 'react';
import { Link } from 'react-router-dom';
import { List, Skeleton, Typography  } from 'antd';
import { ListItemProps as AntListItemProps } from 'antd/lib/list';
import { Flex } from '../Flex';

interface ListItemProps extends AntListItemProps {
	loading: boolean;
	name?: React.ReactNode;
	detailsUrl?: string;
}

export interface ListItemIdProps {
	id: number;
}

const ListItem: React.FC<ListItemProps> = ({ loading, name, detailsUrl, ...listItemProps }) => (
	<List.Item {...listItemProps}>
		<Skeleton loading={loading} active={true} title={true} paragraph={false}>

			<Flex alignItems="center" justifyContent="space-between" style={{ width: '100%'}}>
				{name && <Typography.Text>{name}</Typography.Text>}

				{detailsUrl && <Link to={detailsUrl}>View Details</Link>}
			</Flex>

		</Skeleton>
	</List.Item>
);

export default ListItem;