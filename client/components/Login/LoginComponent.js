/* eslint-disable jsx-a11y/href-no-hash */
import React, { PropTypes, Component } from 'react';

// Add your 3rd paty libraries here
import { Button, Form, Input, Row, Col } from 'antd';

// Styles and 3rd party libraries here
import classNames from 'classnames';
const createForm = Form.create;
const FormItem = Form.Item;
/* eslint-disable no-unused-vars */
import styles from './LoginComponent.scss'
/* eslint-disable no-unused-vars */

class LoginForm extends Component {
  static propTypes = {
    form: PropTypes.object,
    children: PropTypes.array,
    social: PropTypes.bool

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
    };
  }

  handleSubmit(e) {
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        return;
      }

      this.context.router.push('/crm');

    });
  }

  handleForgetPassword(e) {
    this.context.router.push('/forgotpassword');
  }

  disallowActions() {
    return false;
  }

  renderPassStrengthBar(type) {
    const strength = type === 'pass' ? this.state.passStrength : this.state.rePassStrength;
    const classSet = classNames({
      'ant-pwd-strength': true,
      'ant-pwd-strength-low': strength === 'L',
      'ant-pwd-strength-medium': strength === 'M',
      'ant-pwd-strength-high': strength === 'H',
    });

    const level = {
      L: 'Low',
      M: 'Middle',
      H: 'High',
    };

    return (
      <div>
        <ul className={classSet}>
          <li className="ant-pwd-strength-item ant-pwd-strength-item-1" />
          <li className="ant-pwd-strength-item ant-pwd-strength-item-2" />
          <li className="ant-pwd-strength-item ant-pwd-strength-item-3" />
          <span className="ant-form-text">
            {level[strength]}
          </span>
        </ul>
      </div>
    );
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div style={{ marginTop: '-70px' }}>
        {this.props.children}
        <Form
          vertical
          style={{ width: 420, margin: 'auto' }}
          className="login-form"
        >
          <Row type="flex" align="bottom">
            <Col span={24}>
              <FormItem
                label="Email"
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
                  <Input type="email" placeholder="Correo electrónico" />
                )}
              </FormItem>
            </Col>
          </Row>

          <Row type="flex" align="top">
            <Col span={24}>
              <FormItem label="Contraseña">
                {getFieldDecorator('rePass', {
                  rules: [{
                    required: true,
                    whitespace: true,
                    message: 'Ingresa tu contraseña.',
                  }],
                })(
                  <Input
                    type="password"
                    onContextMenu={this.disallowActions.bind(this)}
                    onPaste={this.disallowActions.bind(this)}
                    onCopy={this.disallowActions.bind(this)}
                    onCut={this.disallowActions.bind(this)}
                    autoComplete="off"
                  />
                )}
              </FormItem>
            </Col>
          </Row>

          <Button
            type="warning"
            className="login-form__button login-form__button--login"
            htmlType="submit"
            onClick={this.handleSubmit.bind(this)}
          >
            Ingresar
          </Button>

          <Button
            type="warning"
            className="login-form__button login-form__button--password"
            onClick={this.handleForgetPassword.bind(this)}
          >
            ¿Olvidaste tu contraseña?
          </Button>

          {this.props.social ? <div>
            <h2>Login</h2>
            <p>
              Ingresa con su cuenta de red social
            </p>
            <Row type="flex" justify="space-between" align="bottom">
              <Button
                type="primary"
                className="login-form__social login-form__social--facebook"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <span>Facebook</span>
              </Button>

              <Button
                type="primary"
                className="login-form__social login-form__social--google"
              >
                <i className="fa fa-google-plus" aria-hidden="true"></i>
                <span>Google</span>
              </Button>

              <Button
                type="primary"
                className="login-form__social login-form__social-twitter"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <span>Twitter</span>
              </Button>
            </Row>
          </div> : null}
        </Form>
      </div>
    );
  }
}

const LoginFormComponent = createForm()(LoginForm);
export default  LoginFormComponent;
