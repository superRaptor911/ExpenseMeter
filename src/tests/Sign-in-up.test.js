/* eslint-disable */
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {StyleSheetTestUtils} from 'aphrodite';

import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

// Important for Aphrodite
StyleSheetTestUtils.suppressStyleInjection();

test('Login Render test for Desktop', () => {
  render(<LoginPage forceWidth={1920} />);

  // We are expecting these to be in DOM
  const elements = [
    screen.getByText(/Log In To Your Account/i),
    screen.getByText(/Forgot Password/i),
    screen.getByText(/Forgot Password/i),
    screen.getByText(/Home/i),
    screen.getByText(/Sign in/i),
  ];

  for (let i of elements) {
    expect(i).toBeInTheDocument();
  }
});

test('signup Render test for Desktop', () => {
  render(<SignupPage forceWidth={1920} />);

  // We are expecting these to be in DOM
  const elements = [
    screen.getByText(/Create Your Free Account/i),
    screen.getByText(/Sign up with google/i),
    screen.getByText(/Home/i),
    // screen.getByText(/Sign Up/i),
    screen.getByText(/Sign in/i),
  ];

  for (let i of elements) {
    expect(i).toBeInTheDocument();
  }
});
