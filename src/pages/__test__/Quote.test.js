import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Quote from '../Quote';

test('should render the Quote page', () => {
  const tree = renderer.create(<Router><Quote /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
