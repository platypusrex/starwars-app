import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { useEffect } from 'react';
import { scrollToTop } from '../../utils/scrollToTop';

const ScrollTopComponent: React.FC<RouteComponentProps<{}>> = ({ location, children }) => {
	useEffect(() => scrollToTop, [location.pathname]);

	return <>{children}</>;
};

export const ScrollTop = withRouter(ScrollTopComponent);