import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Quote from '../Quote';

test('should render the Quote page', () => {
  const tree = render(<Router><Quote /></Router>);
  expect(tree).toMatchSnapshot();
});
