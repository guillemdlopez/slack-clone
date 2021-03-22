import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import useForm from '../../hooks/useForm';

import slack from '../../style/images/slack-logo.png';

const RegisterScreen = () => {
  const history = useHistory();

  const [formValues, handleInputChange, reset] = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { firstName, lastName, email, password } = formValues;
  console.log(email, password);

  const isFormValid = () => {
    const values = Object.values(formValues);
    if (values.some((v) => v === '')) {
      Swal.fire('Error', 'You forgot to enter some information', 'error');
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

  const handleClickLogin = () => {
    history.push('/login');
  };
  return (
    <div className="auth__main-div">
      <div className="auth__form-container">
        <form className="auth__form" onSubmit={handleSubmit}>
          <h1 className="auth__title">Sign up</h1>
          <img src={slack} alt="slack-logo" className="auth__slack-img" />
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Guillem"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Delás"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={email}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            placeholder="······"
            onChange={handleInputChange}
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

          <p className="auth__btn-register" onClick={handleClickLogin}>
            Have already an account?
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
