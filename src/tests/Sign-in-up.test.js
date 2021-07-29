import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {StyleSheetTestUtils} from 'aphrodite';

import LoginPage from '../pages/LoginPage';
import SignupPageDesktop from '../pages/SignipPageDesktop';
// Important for Aphrodite
StyleSheetTestUtils.suppressStyleInjection();

test('Login Render test', () => {
  render(<LoginPage />);

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

test('signup Render test', () => {
  render(<SignupPageDesktop />);

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
