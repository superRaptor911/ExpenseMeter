import {css, StyleSheet} from 'aphrodite';
import orImg from '../media/images/orField.png';
import googleIcon from '../media/images/googleIcon.png';
import titleImg from '../media/images/exp_logo.png';
import calcImg from '../media/images/calc.png';
import React from 'react';

const LoginPageDesktop = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.first_box)}>
        <div className={css(styles.logo)}>
          <img src={titleImg} alt="titleImg" className={css(styles.logo_img)} />
        </div>
        <div className={css(styles.welcomeB)}>
          <div>
            <span style={{color: ' #87CC8A'}}>Hello!</span>
            <br />
            <span>Welcome Back.</span>
          </div>
        </div>
      </div>
      <div>
        <img
          src={calcImg}
          alt="Calculator Image"
          className={css(styles.calcImg)}
        />
      </div>
      <div className={css(styles.second_box)}>
        <div className={css(styles.linkContainer)}>
          <div className={css(styles.home)}>Home</div>
          <button className={css(styles.signupBtn)}>Sign Up</button>
        </div>
        <div className={css(styles.authTextArea)}>
          {/* <div className={css(styles.authTextTitle)}>
            <span>Log In To Your Account</span>
          </div> */}
          <div className={css(styles.heading)}>Log In To Your Account</div>
          <div className={css(styles.fields)}>
            <img src={googleIcon} alt="gicon" className={css(styles.icon)} />
            <div className={css(styles.fieldText)}>Sign up with google</div>
          </div>
          <div className={css(styles.orImageCenter)}>
            <img src={orImg} alt="orImg" className={css(styles.orIcon)} />
          </div>
          <input
            type="text"
            placeholder="Email:"
            className={css(styles.fields)}></input>

          <input
            type="password"
            placeholder="Password:"
            className={css(styles.fields)}></input>

          <div className={css(styles.pswdSec)}>
            <div className={css(styles.rememberMe)}>
              <input
                type="checkbox"
                name="checkbox"
                className={css(styles.checkBox)}
              />

              <label htmlFor="checkbox" className={css(styles.labelText)}>
                Remember me
              </label>
            </div>
            <div className={css(styles.fgtPassword)}>Forgot Password?</div>
          </div>

          <button className={css(styles.loginButton)}>Sign in</button>
          <div className={css(styles.signupText)}>
            <span>{"Don't have an account?"} </span>
            <span style={{color: '#EF6B67'}}>sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  signupText: {
    textAlign: 'center',
    marginTop: 100,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#5E5E5E',
    width: 371,
  },
  welcomeB: {
    position: 'absolute',
    width: 'auto',
    height: '13.8%',
    left: '4%',
    top: '74%',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 55,
    lineHeight: '99%',
    color: 'white',
  },
  calcImg: {
    position: 'absolute',
    width: '37%',
    height: '56%',
    left: '13%',
    top: '21%',
  },
  logo_img: {
    width: 184,
    height: 31,
    marginLeft: '5%',
    marginTop: '6%',
  },

  checkBox: {
    width: 23,
    height: 23,
    marginRight: 8,
  },

  pswdSec: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 42,
    marginBottom: 28,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '14px',
    width: 371,
  },

  rememberMe: {
    color: '#2B294A',
  },

  fgtPassword: {
    color: '#EF6B67',
    paddingTop: 10,
  },

  first_box: {
    height: '100vh',
    position: 'absolute',
    //width: 736,
    width: '38.33%',
    top: 0,
    bottom: 0,
    background: '#3D3B59',
  },
  second_box: {
    height: '100vh',
    background: '#F6F6F6',
    width: '61.67',
  },
  authTextArea: {
    position: 'absolute',
    width: '19.33%',
    height: '56.12%',
    //border: '1px solid green',
    left: '63%',
    right: '18%',
    top: '18.2%',
    bottom: '14.5%',
    display: 'flex',
    flexDirection: 'column',
  },
  authTextTitle: {
    position: 'absolute',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 42,
    lineHeight: '122%',
    color: '#3D3B59',
  },
  fields: {
    border: '1px solid #786D6D',
    boxSizing: 'border-box',
    borderRadius: '7px',
    marginTop: 27,
    paddingTop: 14,
    paddingBottom: 14,
    display: 'flex',
    width: '371px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '122%',
    color: '#554C4C',
    background: 'none',
    paddingLeft: 10,
  },
  fieldText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '122%',
    color: '#554C4C',
    marginLeft: 8,
    marginRight: 'auto',
  },
  icon: {
    marginLeft: 'auto',
  },
  orImageCenter: {
    textAlign: 'center',
    width: 371,
  },
  orIcon: {
    marginTop: 30,
  },
  loginButton: {
    background: '#2B294A',
    border: '2px solid #060056',
    borderRadius: '5px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '0.01em',
    color: 'white',
    width: 371,
    textAlign: 'center',
    padding: 12,
    marginTop: 30,
  },
  heading: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '40px',
    lineHeight: '122%',
    textTransform: 'capitalize',
    color: '#3D3B59',
    width: 371,
  },
  linkContainer: {
    display: 'flex',
    marginTop: 40,
    marginRight: 44,
    marginLeft: 'auto',
    width: 'max-content',
    alignItems: 'center',
    position: 'absolute',
    //left: '83.3%',
    right: '50px',
  },
  home: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '19px',
    lineHeight: '27px',
    letterSpacing: '0.025em',
    color: '#3D3B59',
    marginRight: 20,
  },
  signupBtn: {
    border: '2px solid #3D3B59',
    boxSizing: 'border-box',
    borderRadius: '6.4px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '19px',
    lineHeight: '27px',
    letterSpacing: '0.025em',
    color: '#3D3B59',
    background: 'none',
    padding: '15px 50px',
  },
});

export default LoginPageDesktop;
