import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

test('should render navbar', () => {
  const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
