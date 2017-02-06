import React from 'react';
import { render, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

// Import components for testing here
import Login from '../../components/Login/LoginComponent';

describe('login component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = render(<Login />);
  });

  it('login should exist', () => {
    expect(wrapper).to.exist;
  });

  it('login component has input email', () => {
    expect(wrapper.find('input[type="email"]')).to.present();
  });

  it('login component has input password', () => {
    expect(wrapper.find('input[type="password"]')).to.present();
  });

  it('login component has send email button', () => {
    expect(wrapper.find('button.login-form__button.login-form__button--login')).to.present();
  });

  it('login component has send forgetPassword button', () => {
    expect(wrapper.find('button.login-form__button.login-form__button--login').last()).to.present();
  });

  describe('login events', () => {

    beforeEach(() => {
      wrapper = mount(<Login />);
    });

    it('shows the text into email input element', () => {
      wrapper.find('input[type="email"]').simulate('change', {target: {value: 'danjavia@gmail.com'}});
      expect(wrapper.find('input[type="email"]')).to.have.value('danjavia@gmail.com');
    });

    it('shows the text into password input element', () => {
      wrapper.find('input[type="password"]').simulate('change', {target: {value: 'dan55000'}});
      expect(wrapper.find('input[type="password"]')).to.have.value('dan55000');
    });
  });
});

chai.use(chaiEnzyme());
