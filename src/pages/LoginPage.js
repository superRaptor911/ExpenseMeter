import React from 'react';
import PropTypes from 'prop-types';
import {getDeviceDimention} from '../components/Utility';
import LoginPageDesktop from './LoginPageDesktop';
import LoginMobile from './LoginPageMobile';

const LoginPage = ({forceWidth = 0}) => {
  const width = forceWidth > 0 ? forceWidth : getDeviceDimention().width;
  return width > 1280 ? <LoginPageDesktop /> : <LoginMobile />;
};

LoginPage.propTypes = {
  forceWidth: PropTypes.number,
};

export default LoginPage;
