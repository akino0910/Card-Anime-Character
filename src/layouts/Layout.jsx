import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { Layout } from 'antd';

export default class LayoutComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			endpoint: 'https://akino-favor-character-server.herokuapp.com/api',
			listItem: [],
			editVisible: false,
		};
	}

	showCreateModal = () => {
		this.setState({ editVisible: true });
	};

	handleCancel = e => {
		console.log('Clicked cancel button');
		this.setState({
			editVisible: false,
		});
	};

	handleCreate = () => {
		const form = this.formRef.props.form;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}

			fetch(this.state.endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			})
				.then(response => response.json())
				.then(data =>
					this.setState({
						editVisible: false,
						listItem: [...this.state.listItem, data],
					})
				)
				.catch(err => console.err(err));
			form.resetFields();
		});
	};

	saveFormRef = formRef => {
		this.formRef = formRef;
	};

	componentDidMount() {
		fetch(this.state.endpoint)
			.then(result => result.json())
			.then(data => this.setState({ listItem: data }));
	}
	render() {
		return (
			<Layout>
				<Header />
				<Content
					listItem={this.state.listItem}
					showCreateModal={this.showCreateModal}
					saveFormRef={this.saveFormRef}
					editVisible={this.state.editVisible}
					handleCreate={this.handleCreate}
					handleCancel={this.handleCancel}
					titleModal="Create"
				/>
				<Footer />
			</Layout>
		);
	}
}
