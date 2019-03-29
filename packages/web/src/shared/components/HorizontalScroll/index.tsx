import * as React from 'react';
import HorizontalScrollWrapper, { HorizontalScrollProps } from './HorizontalScrollWrapper';
import HorizontalScrollGroup from './HorizontalScrollGroup';


export class HorizontalScroll extends React.Component<HorizontalScrollProps, {}> {
	static Group: typeof HorizontalScrollGroup = HorizontalScrollGroup;

	render () {
		return HorizontalScrollWrapper;
	}
}

HorizontalScroll.Group = HorizontalScrollGroup;