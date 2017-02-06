import React from 'react';
import { render, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

// Import components for testing here
import ForgotPassword from '../../components/ForgotPassword/ForgotPasswordComponent';

/** @test {ForgotPassword} */
describe('Forgot password component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = render(<ForgotPassword />);
  });

  /** @test {ForgotPassword#exists} */
  it('forgotPassword should exist', () => {
    expect(wrapper).to.exist;
  });

  /** @test {ForgotPassword#reset-password-form} */
  it('forgotPassword component has reset-password-form', () => {
    expect(wrapper.find('.reset-password-form')).to.present();
  });

  it('forgotPassword component has email input for recover password', () => {
    expect(wrapper.find('input[type="email"][placeholder="correo@electronico.com"]')).to.present();
  });

  it('forgotPassword component has send email button', () => {
    expect(wrapper.find('button.reset-password-form__button.reset-password-form__button--reset')).to.present();
  });

  describe('Forgot password events', () => {

    beforeEach(() => {
      wrapper = mount(<ForgotPassword />);
    });

    it('shows the text into email input element', () => {
        wrapper.find('input').simulate('change', {target: {value: 'danjavia@gmail.com'}});
        expect(wrapper.find('input')).to.have.value('danjavia@gmail.com');
    });
  });
});

chai.use(chaiEnzyme());
