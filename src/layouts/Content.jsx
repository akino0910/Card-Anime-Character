import React from 'react';
import Modal from '../components/Modal';
import Card from '../components/Card';
import { Layout, List, Button } from 'antd';
const { Content } = Layout;

export default class ContentComponent extends React.Component {
	render() {
		return (
			<Content
				style={{
					marginTop: 64,
					backgroundColor: '#f8f9fa',
				}}
			>
				<div
					style={{
						minHeight: 380,
					}}
				>
					<div
						style={{
							textAlign: 'center',
							padding: '100px 0px',
							backgroundColor: '#fff',
						}}
					>
						<h1
							style={{
								fontWeight: '300',
								fontSize: '2.5rem',
								marginBottom: '.5rem',
							}}
						>
							Anime
						</h1>
						<p
							style={{
								fontSize: '1.25rem',
								fontWeight: '300',
								marginTop: '0',
							}}
						>
							This is album of my favor anime character.
						</p>
						<Button
							type="primary"
							size="large"
							onClick={this.props.showCreateModal}
						>
							Create new character
						</Button>
						<Modal
							wrappedComponentRef={this.props.saveFormRef}
							visible={this.props.editVisible}
							onOk={this.props.handleCreate}
							onCancel={this.props.handleCancel}
							titleModal="Create"
						/>
					</div>

					<List
						style={{
							padding: 24,
							backgroundColor: '#f8f9fa',
						}}
						grid={{
							gutter: 16,
							xs: 1,
							sm: 2,
							md: 2,
							lg: 2,
							xl: 4,
							xxl: 4,
						}}
						dataSource={this.props.listItem}
						renderItem={item => (
							<List.Item>
								<Card infoItem={item} />
							</List.Item>
						)}
					/>
				</div>
			</Content>
		);
	}
}
