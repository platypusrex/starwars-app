import * as React from 'react';
import { Empty, Typography } from 'antd';
import { Flex } from '../Flex';

interface State {
	hasError: boolean;
}

export class ErrorBoundary extends React.Component<{}, State> {
	constructor (props: {}) {
		super(props);

		this.state = {
			hasError: false,
		}
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		if (error) {
			this.setState(ss => ({ ...ss, hasError: true }))
		}
	}

	render () {
		const { hasError } = this.state;

		if (hasError) {
			const description = (
				<Typography.Title level={3} style={{ marginTop: 20 }}>
					Whoops! Looks like you did something stupid!
				</Typography.Title>
			);

			return (
				<Flex centerAll={true} column={true} style={{ height: '100%' }}>
					<Empty description={description}/>
				</Flex>
			);
		}

		return this.props.children;
	}
}