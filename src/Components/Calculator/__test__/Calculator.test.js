import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from '../Calculator';

test('should render calculator', () => {
  const tree = renderer.create(<Router><Calculator /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
