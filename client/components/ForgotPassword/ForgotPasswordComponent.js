/* eslint-disable jsx-a11y/href-no-hash */
import React, { PropTypes, Component } from 'react';

// Add your 3rd paty libraries here
import { Button, Form, Input, Row, Col } from 'antd';

// Styles and 3rd party libraries here

const createForm = Form.create;
const FormItem = Form.Item;
/* eslint-disable no-unused-vars */
import styles from './ForgotPasswordComponent.scss'
/* eslint-disable no-unused-vars */

class ForgotForm extends Component {
  static propTypes = {
    form: PropTypes.object,
    children: PropTypes.array,
  };

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      dirty: false,
      passBarShow: false, // Whether to display a tooltip of password strength
      rePassBarShow: false,
      passStrength: 'L', // Password strength
      rePassStrength: 'L',
      email: ''
    };
  }

  handleSubmit(e) {

    this.context.router.push('/crm');
  }

  handleRecoverPassword(e) {

    this.props.form.validateFields((errors, values) => {
      if (errors) {
        return;
      }

      this.context.router.push('/login');

      this.setState({
        email: values.email
      });
    });
  }

  disallowActions() {
    return false;
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div style={{ width: 420, maxWidth: 420, margin: '-130px auto 0' }}>
        {this.props.children}
        <Form
          vertical
          className="reset-password-form"
        >
          <Row type="flex" align="bottom">
            <Col span={24}>
              <FormItem
                label="Correo electrónico"
                hasFeedback
              >
                {getFieldDecorator('email', {
                  validate: [{
                    rules: [
                      { required: true, message: 'Ingresa la dirección de correo electrónico.' },
                    ],
                    trigger: 'onBlur',
                  }, {
                    rules: [
                      { type: 'email', message: 'Ingresa la dirección de correo electrónico.' },
                    ],
                    trigger: ['onBlur', 'onChange'],
                  }],
                })(
                  <Input type="email" placeholder="correo@electronico.com" />
                )}
              </FormItem>
            </Col>
          </Row>

          <Button
            type="warning"
            className="reset-password-form__button reset-password-form__button--reset"
            htmlType="submit"
            onClick={this.handleRecoverPassword.bind(this)}
          >
            Enviar Correo
          </Button>

        </Form>
      </div>
    );
  }
}

const ForgotPasswordComponent = createForm()(ForgotForm);
export default ForgotPasswordComponent;
