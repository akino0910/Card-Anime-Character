import React from 'react';
import { Modal, Form } from 'antd';
import FormItem from './Form';

class EditModal extends React.Component {
	render() {
		const { visible, onOk, onCancel, form } = this.props;
		const { getFieldDecorator } = form;

		return (
			<Modal
				title="Edit Character"
				visible={visible}
				onOk={onOk}
				onCancel={onCancel}
				okText="Update"
			>
				<FormItem formField={{ getFieldDecorator }} />
			</Modal>
		);
	}
}

export default Form.create()(EditModal);
