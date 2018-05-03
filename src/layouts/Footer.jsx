import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class FooterComponent extends React.Component {
	render() {
		return (
			<Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>
				<h1>Created by Akino</h1>
			</Footer>
		);
	}
}
