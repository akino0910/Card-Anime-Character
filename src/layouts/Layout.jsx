import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { Layout, notification } from 'antd';

import { connect } from 'react-redux';
import {
	cardsFetchData,
	addCard,
	deleteCard,
	editCard,
} from '../actions/cards';
class LayoutComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}

	componentDidMount() {
		this.props.fetchData(this.props.endpoint);
	}
	showCreateModal = () => {
		this.setState({ visible: true });
	};
	handleCancel = e => {
		this.setState({
			visible: false,
		});
	};
	handleCreate = () => {
		const form = this.formRef.props.form;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}

			fetch(this.props.endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			})
				.then(response => response.json())
				.then(data => {
					this.setState({
						visible: false,
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
					visible={this.state.visible}
					showCreateModal={this.showCreateModal}
					saveFormRef={this.saveFormRef}
					handleCreate={this.handleCreate}
					handleCancel={this.handleCancel}
					titleModal="Create"
					endpoint={this.props.endpoint}
					deleteCard={this.props.deleteCard}
					editCard={this.props.editCard}
				/>
				<Footer />
			</Layout>
		);
	}
}

const mapStateToProps = state => {
	return {
		cards: state.cards,
		endpoint: state.endpoint,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchData: url => dispatch(cardsFetchData(url)),
		addCard: card => dispatch(addCard(card)),
		deleteCard: id => dispatch(deleteCard(id)),
		editCard: (card, index) => dispatch(editCard(card, index)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
