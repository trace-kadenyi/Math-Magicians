import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

test('should render navbar', () => {
  const tree = render(<Router><Navbar /></Router>);
  expect(tree).toMatchSnapshot();
});
