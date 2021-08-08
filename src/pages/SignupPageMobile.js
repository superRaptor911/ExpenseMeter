import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {useState} from 'react';
import Logo from '../media/images/loginTitle.png';
import SignupSvg from '../media/svg_files/svgSignUp.svg';
import {Link, useHistory} from 'react-router-dom';
import Input from '../components/Input';
import googleIcon from '../media/images/googleIcon.png';
import orImg from '../media/images/orField.png';
import {createUser} from '../shared/Authentication';

const SignupMobile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const history = useHistory();

  const handleSignupPress = () => {
    console.log('Signing New User : ', name);
    createUser(email, password).then(() => {
      history.push('/dashboard');
    });
  };

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.headerSection)}>
        <div className={css(styles.logo)}>
          <img src={Logo} className={css(styles.logoM)}></img>
        </div>
        <div className={css(styles.signUp)}>
          {/* <button className={css(styles.signupButton)}></button> */}
          <Link to="/login" className={css(styles.linkToSignup)}>
            Sign in
          </Link>
        </div>
      </div>
      {/* <div className={css(styles.blueBacground)}></div> */}
      <div className={css(styles.loginSvg)}>
        <img src={SignupSvg} alt="" className={css(styles.loginDisp)} />
      </div>

      {/* login section */}

      <div className={css(styles.inputSec)}>
        <div className={css(styles.heading)}>Create To Your Free Account</div>
        <div className={css(styles.fields)}>
          <div className={css(styles.googleAuth)}>
            <div>
              <img src={googleIcon} alt="gicon" className={css(styles.icon)} />
            </div>
            <div className={css(styles.fieldText)}>Sign up with google</div>
          </div>
        </div>
        <div className={css(styles.orImageCenter)}>
          <img src={orImg} alt="orImg" className={css(styles.orIcon)} />
        </div>

        <Input
          type="text"
          placeholder="Name:"
          className={css(styles.fields)}
          value={name}
          setValue={setName}
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

        <div className={css(styles.pswdSec)}>
          <div className={css(styles.rememberMe)}>
            <div>
              <input
                type="checkbox"
                name="checkbox"
                className={css(styles.checkBox)}
              />
            </div>

            <div>
              <label htmlFor="checkbox" className={css(styles.labelText)}>
                Agree to {'Createme\'s'}{' '}
                <span className={css(styles.toSer)}> terms of service </span>
                and <span className={css(styles.toSer)}> privacy policy </span>
              </label>
            </div>
          </div>
          {/* <div className={css(styles.fgtPassword)}>Forgot Password?</div> */}
        </div>

        <button className={css(styles.loginButton)} onClick={handleSignupPress}>
          Sign up
        </button>
        <div className={css(styles.signupText)}>
          <span>{'Already have an account?'} </span>
          <Link className={css(styles.linkDec)} to="/login">
            <span style={{color: '#EF6B67'}}>sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100vh',
    fontFamily: 'Poppins',
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoM: {
    marginLeft: 22,
    marginTop: 22,
    width: 130,
    height: 26,
  },
  signUp: {
    marginRight: 22,
    marginTop: 22,
  },
  linkToSignup: {
    textDecoration: 'none',
    color: '#3D3B59',
    fontSize: 20,
    fontWeight: 500,
  },
  // blueBacground: {
  //   marginTop: 12,
  //   width: '100%',
  //   height: 205,
  //   backgroundColor: '#3D3B59',
  // },
  loginDisp: {
    marginTop: 12,
    width: '100%',
  },
  inputSec: {
    marginLeft: 37,
    marginRight: 37,
    marginTop: 45,
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontSize: 30,
    fontWeight: 500,
    color: '#3D3B59',
    fontStyle: 'normal',
  },
  fields: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #786D6D',
    borderRadius: 7,
    marginTop: 27,
  },
  googleAuth: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: 150,
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  icon: {
    //marginLeft: '24%',
    width: 20,
    height: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  fieldText: {
    marginBottom: 17,
    marginTop: 15,
    fontSize: 15,
    color: '#554C4C',
    marginLeft: 6,
    minWidth: '100%',
    textAlign: 'center',
  },
  orImageCenter: {
    width: '100%',
    textAlign: 'center',
    marginTop: 41,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  orIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  pswdSec: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 27,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '12px',
    width: '100%',
  },
  rememberMe: {
    display: 'flex',
    flexDirection: 'row',
  },
  checkBox: {
    width: 23,
    height: 23,
    marginRight: 8,
    border: '1px solid rgba(0, 0, 0, 0.75)',
    borderRadius: 5,
  },
  labelText: {
    color: '#5B5757',
    fontSize: 12,
  },

  toSer: {
    color: '#2B294A',
    fontWeight: 600,
  },
  loginButton: {
    marginTop: 36,
    width: 150,
    height: 47,
    backgroundColor: '#2B294A',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  signupText: {
    marginTop: 60,
    marginBottom: 42,
    textAlign: 'center',
  },
  linkDec: {
    textDecoration: 'none',
  },
});

export default SignupMobile;
