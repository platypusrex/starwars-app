import * as React from 'react';
import { Layout as AntLayout } from 'antd';
import { Header } from './Header/Header';
import { Page } from '../shared/components/Page';
import { ScrollTop } from '../shared/components/ScrollTop';

const { Content } = AntLayout;

export const Layout: React.FC<{}> = ({ children }) => {
	return (
		<AntLayout style={{ overflowX: 'hidden' }}>
			<Header/>

			<ScrollTop>
				<Content>
					<Page>
						{children}
					</Page>
				</Content>
			</ScrollTop>
		</AntLayout>
	);
};