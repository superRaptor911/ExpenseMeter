// Sigup Page for Desktop
//
import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import titleImg from '../media/images/loginTitle.png';
import orImg from '../media/images/orField.png';
import googleIcon from '../media/images/googleIcon.png';
import piggy from '../media/images/piggyWithSheet.png';
import Input from '../components/Input';
import {createUser, signInwithGoogle} from '../shared/Authentication';
import {Link, useHistory} from 'react-router-dom';

const SignupPageDesktop = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSignupPress = () => {
    console.log('Signing New User : ', username);
    createUser(email, password).then(() => {
      history.push('/dashboard');
    });
  };

  const handleGoogleSignup = () => {
    console.log('Signing New User with gmail');
    signInwithGoogle().then(() => {
      console.log('Signup successful with google');
      history.push('/dashboard');
    });
  };

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.flex1)}>
        <img src={titleImg} alt="titleImg" />

        <div className={css(styles.flex1Contents)}>
          <div className={css(styles.heading)}>Create your free account</div>
          <button className={css(styles.fields)} onClick={handleGoogleSignup}>
            <img src={googleIcon} alt="gicon" className={css(styles.icon)} />
            <div className={css(styles.fieldText)}>Sign up with google</div>
          </button>
          <img src={orImg} alt="orImg" className={css(styles.orIcon)} />

          <Input
            type="text"
            placeholder="Name:"
            value={username}
            setValue={setUsername}
            className={css(styles.fields)}
          />

          <Input
            type="text"
            placeholder="Email:"
            className={css(styles.fields)}
            value={email}
            setValue={setEmail}
          />

          <Input
            type="password"
            placeholder="Password:"
            value={password}
            setValue={setPassword}
            className={css(styles.fields)}
          />

          <Input
            type="password"
            placeholder="Confirm Password:"
            value={password2}
            setValue={setPassword2}
            className={css(styles.fields)}
          />

          <button
            className={css(styles.signUpButton)}
            onClick={handleSignupPress}>
            Sign Up
          </button>

          <div className={css(styles.signupText)}>
            <span>{'Already have an account?'} </span>
            <Link to="/login" className={css(styles.linkDec)}>
              <span style={{color: '#EF6B67'}}>sign in</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={css(styles.flex2)}>
        <div className={css(styles.linkContainer)}>
          <Link className={css(styles.linkDec)} to="/dashboard">
            <div className={css(styles.home)}>Home</div>
          </Link>
          <Link className={css(styles.linkDec)} to="/login">
            <button className={css(styles.signinBtn)}>Sign In</button>
          </Link>
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
  linkDec: {
    color: '#FFFFFF',
    textDecoration: 'none',
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
    ':hover': {
      backgroundColor: '#000000',
    },
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
    //marginRight: 44,
    marginLeft: 'auto',
    width: 'max-content',
    position: 'absolute',
    alignItems: 'center',
    right: '50px',
  },

  home: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '19px',
    lineHeight: '27px',
    letterSpacing: '0.025em',
    color: '#FFFFFF',
    marginRight: 20,
    cursor: 'pointer',
  },
  signinBtn: {
    border: '2px solid #FFFFFF',
    boxSizing: 'border-box',
    borderRadius: '6.4px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '19px',
    lineHeight: '27px',
    letterSpacing: '0.025em',
    color: '#FFFFFF',
    background: 'none',
    padding: '15px 50px',
    cursor: 'pointer',
  },
  signupText: {
    textAlign: 'center',
    marginTop: 100,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#5E5E5E',
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default SignupPageDesktop;
