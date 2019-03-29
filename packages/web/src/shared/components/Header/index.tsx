import * as React from 'react';
import PageHeader  from './PageHeader';
import PageHeaderStats from './PageHeaderStats';

export class Header extends React.Component<{}, {}> {
	static Page: typeof PageHeader = PageHeader;
	static PageStats: typeof PageHeaderStats = PageHeaderStats;
}

Header.Page = PageHeader;
Header.PageStats = PageHeaderStats;