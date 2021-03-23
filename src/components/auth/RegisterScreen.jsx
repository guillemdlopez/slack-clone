import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import useForm from '../../hooks/useForm';

import slack from '../../style/images/slack-logo.png';
import { startRegistration } from '../../actions/auth';

const RegisterScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { firstName, lastName, email, password } = formValues;

  const isFormValid = () => {
    const values = Object.values(formValues);
    if (values.some(v => v === '')) {
      Swal.fire('Error', 'You forgot to enter some information', 'error');
      return false;
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegistration(firstName, lastName, email, password));
      history.push('/');
    }
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
          <button className="btn btn__signup btn-lg" type="submit">
            Sign up
          </button>

          <p className="auth__btn-register" onClick={handleClickLogin}>
            Have already an account?
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
