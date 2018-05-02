import React from 'react';
import Card from './../components/Card';
import Header from './Header';
import { List } from 'antd';

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listItem: [],
		};
	}
	componentDidMount() {
		fetch('http://localhost:3000/api')
			.then(result => result.json())
			.then(data => {
				this.setState({ listItem: data });
			});
	}
	render() {
		return (
			<div>
				<Header />
				<List
					grid={{
						gutter: 16,
						xs: 1,
						sm: 2,
						md: 2,
						lg: 2,
						xl: 4,
						xxl: 4,
					}}
					dataSource={this.state.listItem}
					renderItem={item => (
						<List.Item>
							<Card infoItem={item} />
						</List.Item>
					)}
				/>
			</div>
		);
	}
}

export default Layout;
