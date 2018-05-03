import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header } = Layout;

export default class HeaderComponent extends React.Component {
	handleClick = e => {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});
	};
	render() {
		return (
			<Header style={{ position: 'fixed', width: '100%', zIndex: 100 }}>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['1']}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key="1">
						<Icon type="home" />Home
					</Menu.Item>
				</Menu>
			</Header>
		);
	}
}
