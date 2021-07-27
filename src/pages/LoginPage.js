import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import titleImg from '../media/images/loginTitle.png';
import orImg from '../media/images/orField.png';
import googleIcon from '../media/images/googleIcon.png';
import piggy from '../media/images/piggyWithSheet.png';

const LoginPage = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.flex1)}>
        <img src={titleImg} alt="titleImg" />

        <div className={css(styles.flex1Contents)}>
          <div className={css(styles.heading)}>Create your free account</div>
          <div className={css(styles.fields)}>
            <img src={googleIcon} alt="gicon" className={css(styles.icon)} />
            <div className={css(styles.fieldText)}>Sign up with google</div>
          </div>
          <img src={orImg} alt="orImg" className={css(styles.orIcon)} />

          <input
            type="text"
            placeholder="Name:"
            className={css(styles.fields)}></input>

          <input
            type="text"
            placeholder="Email:"
            className={css(styles.fields)}></input>

          <input
            type="password"
            placeholder="Password:"
            className={css(styles.fields)}></input>

          <input
            type="password"
            placeholder="Confirm Password:"
            className={css(styles.fields)}></input>

          <button className={css(styles.signUpButton)}>Sign Up</button>
        </div>
      </div>

      <div className={css(styles.flex2)}>
        <div className={css(styles.linkContainer)}>
          <div className={css(styles.home)}>home</div>
          <button className={css(styles.siginBtn)}>Sign In</button>
        </div>
        <img src={piggy} alt="orImg" className={css(styles.piggy)} />
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  flex1: {
    width: '50%',
    padding: '40px',
  },
  flex1Contents: {
    marginLeft: 160,
    marginTop: 100,
    maxWidth: 340,
  },
  heading: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '40px',
    lineHeight: '122%',
    textTransform: 'capitalize',
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
    width: '100%',
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
  orIcon: {
    marginTop: 30,
  },
  signUpButton: {
    background: '#2B294A',
    border: '2px solid #060056',
    borderRadius: '5px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '0.01em',
    color: '#FFFFFF',
    width: '100%',
    textAlign: 'center',
    padding: 12,
    marginTop: 30,
  },
  flex2: {
    backgroundColor: '#3D3B59',
    flex: 1,
    height: '100vh',
    width: '100%',
  },
  piggy: {
    marginLeft: -150,
    marginTop: 100,

    maxWidth: '100%',
    height: 'auto',
  },

  linkContainer: {
    display: 'flex',
    marginTop: 40,
    marginRight: 44,
    marginLeft: 'auto',
    width: 'max-content',
    alignItems: 'center',
  },

  home: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '0.025em',
    color: '#FFFFFF',
    marginRight: 20,
  },
  siginBtn: {
    border: '2px solid #FFFFFF',
    boxSizing: 'border-box',
    borderRadius: '6.4px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '0.025em',
    color: '#FFFFFF',
    background: 'none',
  },
});

export default LoginPage;
