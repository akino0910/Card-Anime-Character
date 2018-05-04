import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { Layout, notification } from 'antd';

import { connect } from 'react-redux';
import { cardsFetchData, addCard } from '../actions/cards';

class LayoutComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			endpoint: 'https://akino-favor-character-server.herokuapp.com/api',
			editVisible: false,
		};
	}

	componentDidMount() {
		this.props.fetchData(this.state.endpoint);
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
				.then(data => {
					this.setState({
						editVisible: false,

						// listItem: [...this.state.listItem, data],
					});
					this.props.addCard(data);
					this.openNotification('success', 'Created character');
				})
				.catch(err => this.openNotification('error', err));
			form.resetFields();
		});
	};

	openNotification = (type, message) => {
		notification[type]({
			message,
			duration: 4,
		});
	};

	saveFormRef = formRef => {
		this.formRef = formRef;
	};

	render() {
		return (
			<Layout>
				<Header />
				<Content
					cards={this.props.cards}
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

const mapStateToProps = state => {
	return {
		cards: state.cards,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchData: url => dispatch(cardsFetchData(url)),
		addCard: card => dispatch(addCard(card)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
