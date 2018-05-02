import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header } = Layout;

export default class HeaderComponent extends React.Component {
	render() {
		return (
			<Layout>
				<Header>
					<Menu
						theme="dark"
						mode="horizontal"
						style={{ lineHeight: '64px' }}
					>
						<Menu.Item key="1">
							<Icon type="home" />Home
						</Menu.Item>
					</Menu>
				</Header>
			</Layout>
		);
	}
}
