import * as React from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MenuItemProps } from 'antd/lib/menu/MenuItem';
import { Flex, FlexProps } from '../../shared/components/Flex';
import { Logo } from '../../shared/components/Logo';
import { Routes } from '../../shared/constants/routes';
import styled from '../../shared/styled';

const MenuWrapper = styled(Flex)<FlexProps>`
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 30px;
`;

const MenuItem = styled(Menu.Item)<MenuItemProps>`
	&.ant-menu-item-selected {
		background-color: transparent !important;
	}
`;

type HeaderProps = RouteComponentProps<{}>;

export const HeaderComponent: React.FC<HeaderProps> = ({ ...props }) => {
	const defaultSelectedKey = props.location.pathname.includes(Routes.CHARACTERS) ?
		Routes.CHARACTERS : Routes.HOME;

	return (
		<Layout.Header style={{ padding: 0 }}>
			<MenuWrapper alignItems="center">
				<Logo/>

				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={[defaultSelectedKey]}
					style={{ lineHeight: '64px' }}
				>
					<MenuItem key={Routes.HOME}>
						<NavLink to={Routes.HOME}>Films</NavLink>
					</MenuItem>

					<MenuItem key={Routes.CHARACTERS}>
						<NavLink to={Routes.CHARACTERS}>Characters</NavLink>
					</MenuItem>
				</Menu>
			</MenuWrapper>
		</Layout.Header>
	);
};

export const Header = withRouter(HeaderComponent);