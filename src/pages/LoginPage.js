import React from 'react';
import PropTypes from 'prop-types';
import {getDeviceDimention} from '../components/Utility';
import LoginPageDesktop from './LoginPageDesktop';

const LoginPage = ({forceWidth = 0}) => {
  console.log('ggwp');
  const width = forceWidth > 0 ? forceWidth : getDeviceDimention().width;
  return width > 1280 ? <LoginPageDesktop /> : <div>Mobile View</div>;
};

LoginPage.propTypes = {
  forceWidth: PropTypes.number,
};

export default LoginPage;
