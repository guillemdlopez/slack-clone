import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { firebase } from '../firebase/firebase-config';

import SlackScreen from '../components/slack/SlackScreen';
import AuthRouter from './AuthRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { login } from '../actions/auth';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setIsLoggedIn, setChecking]);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            isLoggedIn={isLoggedIn}
            component={AuthRouter}
          />
          <PrivateRoute
            exact
            path="/"
            isLoggedIn={isLoggedIn}
            component={SlackScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
