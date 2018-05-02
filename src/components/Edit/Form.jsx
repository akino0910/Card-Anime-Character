import React from 'react';
import { Form, Input } from 'antd';
const FormItem = Form.Item;

class EditForm extends React.Component {
	render() {
		const { getFieldDecorator } = this.props.formField;
		return (
			<Form layout="vertical">
				<FormItem label="Title">
					{getFieldDecorator('title', {
						rules: [
							{
								required: true,
								message:
									'Please input the title of collection!',
							},
						],
					})(<Input />)}
				</FormItem>
				<FormItem label="Description">
					{getFieldDecorator('description')(
						<Input type="textarea" />
					)}
				</FormItem>
			</Form>
		);
	}
}

export default EditForm;
