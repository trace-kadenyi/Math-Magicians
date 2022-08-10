import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from '../Calculator';

test('should render calculator', () => {
  const calc = render(<Router><Calculator /></Router>)
  expect(calc).toMatchSnapshot();
});

// test('screen updates when user clicks a number', () => {
//   render(<Router><Calculator /></Router>)
// })
