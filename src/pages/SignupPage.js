import React from 'react';
import PropTypes from 'prop-types';
import {getDeviceDimention} from '../components/Utility';
import SignupPageDesktop from './SignupPageDesktop';

const SignupPage = ({forceWidth = 0}) => {
  const width = forceWidth > 0 ? forceWidth : getDeviceDimention().width;

  return width > 1280 ? <SignupPageDesktop /> : <div>Mobile View</div>;
};

SignupPage.propTypes = {
  forceWidth: PropTypes.number,
};

export default SignupPage;
