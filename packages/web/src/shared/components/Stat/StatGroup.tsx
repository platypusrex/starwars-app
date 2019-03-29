import * as React from 'react';
import { Flex, FlexProps } from '../Flex';

const StatGroup: React.FC<FlexProps> = (props) =>
		<Flex column={true} style={{ marginBottom: 15 }} {...props}/>;

export default StatGroup;