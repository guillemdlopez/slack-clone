import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import SlackScreen from '../components/slack/SlackScreen';
import AuthRouter from './AuthRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
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
