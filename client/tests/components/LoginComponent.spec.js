import React from 'react';
import { render, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

// Import components for testing here
import HomePage from '../../pages/HomePage/HomePage';

describe('HomePage component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = render(<HomePage />);
  });

  it('HomePage render title', () => {
    expect(wrapper).find('h1').to.exist;
  });
});

chai.use(chaiEnzyme());
