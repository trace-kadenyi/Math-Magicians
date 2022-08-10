import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../Home';

test('should render the home page', () => {
  const tree = renderer.create(<Router><Home /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
