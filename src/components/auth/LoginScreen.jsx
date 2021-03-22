import React from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Swal from 'sweetalert2';

import slack from '../../style/images/slack-logo.png';

const LoginScreen = () => {
  const history = useHistory();

  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;
  console.log(email, password);

  const isFormValid = () => {
    if (!email || !password) {
      Swal.fire('Error', 'You forgot to enter your email or password', 'error');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      history.push('/');
      reset();
    }
  };

  const handleLoginGoogle = () => {
    history.push('/');
  };

  const handleClickRegister = () => {
    history.push('/register');
  };

  return (
    <div className="auth__main-div">
      <div className="auth__form-container">
        <form className="auth__form" onSubmit={handleSubmit}>
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

          <div className="auth__google-btn" onClick={handleLoginGoogle}>
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              alt="google-logo"
              className="auth__google-logo"
            />
            <p>Sign in with Google</p>
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
