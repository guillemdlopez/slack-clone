import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import Swal from 'sweetalert2';
import validator from 'validator';

import slack from '../../style/images/slack-logo.png';

import {
  startLogin,
  startLoginWithGitHub,
  startLoginWithGoogle,
} from '../../actions/auth';

const LoginScreen = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const isFormValid = () => {
    if (email.length === 0 || password.length === 0) {
      Swal.fire('Error', 'You forgot to enter your email or password', 'error');
      return false;
    }
    if (!validator.isEmail(email)) {
      Swal.fire(
        'Error',
        'The email should be an email. Makes sense right? ;)',
        'error'
      );
      return false;
    }
    return true;
  };

  const handleLogin = e => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLogin(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startLoginWithGoogle());
    history.push('/');
  };

  const handleGitHubLogin = () => {
    dispatch(startLoginWithGitHub());
  };

  const handleClickRegister = () => {
    history.push('/register');
  };

  return (
    <div className="auth__main-div">
      <div className="auth__form-container">
        <form className="auth__form" onSubmit={handleLogin}>
          <h1 className="auth__title">Login</h1>
          <img src={slack} alt="slack-logo" className="auth__slack-img" />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={email}
            onChange={handleInputChange}
            autoComplete="off"
            className="invalid"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="········"
            value={password}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <button className="btn btn__login btn-lg" type="submit">
            Login
          </button>

          <div className="auth__google-login-separation">
            <div className="auth__border"></div>
            <p>OR</p>
            <div className="auth__border"></div>
          </div>

          <div className="auth__google-btn" onClick={handleGoogleLogin}>
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              alt="google-logo"
              className="auth__google-logo"
            />
            <p>Sign in with Google</p>
          </div>

          {/* TODO: ENABLE SIGN IN WITH GITHUB */}

          <div className="auth__github-btn" onClick={handleGitHubLogin}>
            <img
              src="https://image.flaticon.com/icons/png/512/25/25231.png"
              alt="google-logo"
              className="auth__google-logo"
            />
            <p>Sign in with GitHub</p>
          </div>

          <p className="auth__btn-register" onClick={handleClickRegister}>
            Don't have an account yet?
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
