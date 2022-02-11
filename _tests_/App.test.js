import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App'

jest.useFakeTimers()

it('renders correctly', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });