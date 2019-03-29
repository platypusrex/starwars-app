import * as React from 'react';
import { Empty, Typography } from 'antd';
import { Flex, FlexProps } from '../Flex';

interface NotFoundProps {
	type?: '404' | '500';
	message?: React.ReactNode;
	containerProps?: FlexProps;
}

export const NotFound: React.FC<NotFoundProps> = ({ type, message, ...flexProps }) => {
	const errorType = type ? `${type}:` : '';

	const description = (
		<Typography.Title level={3}>
			{errorType} {message || 'There seems to be a problem here.'}
		</Typography.Title>
	);

	return (
		<Flex column={true} centerAll={true} style={{ height: '100%' }} {...flexProps}>
			<Empty description={description}/>
		</Flex>
	);
};