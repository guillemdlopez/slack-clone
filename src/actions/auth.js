import { types } from '../types/types';
import {
  firebase,
  githubAuthProvider,
  googleAuthProvider,
} from '../firebase/firebase-config';
import Swal from 'sweetalert2';

export const startRegistration = (firstName, lastName, email, password) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: `${firstName} ${lastName}` });
        dispatch(login(user.uid, user.displayName));
      })
      .catch(e => {
        Swal.fire('Error', e.message, 'error');
      });
  };
};

export const startLoginWithGitHub = () => {
  return dispatch => {
    return firebase
      .auth()
      .signInWithPopup(githubAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const startLoginWithGoogle = () => {
  return dispatch => {
    return firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const startLogin = (email, password) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => dispatch(login(user.uid, user.displayName)))
      .catch(e => {
        Swal.fire(
          'Error',
          'Something went wrong... Are you sure that you have an account?',
          'error'
        );
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
