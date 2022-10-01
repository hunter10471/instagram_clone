import {
  LoginState,
  RegisterState,
} from '../../../../interfaces/Auth.interface';
import { Dispatch } from 'redux';
import {
  collection,
  createUserWithEmailAndPassword,
  doc,
  getAuth,
  getFirestore,
  setDoc,
  signInWithEmailAndPassword,
} from '../../../../config/firebase/index';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutFailure,
  logoutSuccess,
} from '../../../reducers/userReducer';

export const login = async (dispatch: Dispatch, loginPayload: LoginState) => {
  dispatch(loginStart());
  const auth = getAuth();
  const { email, password } = loginPayload;
  try {
    const loginUser = await signInWithEmailAndPassword(auth, email, password);
    if (auth.currentUser) {
      dispatch(
        loginSuccess({
          email,
          username: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        })
      );
    }
  } catch (error) {
    dispatch(loginFailure());
    console.log(error);
  }
};

export const logout = async (dispatch: Dispatch) => {
  const auth = getAuth();
  try {
    await auth.signOut();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure());
    console.log(error);
  }
};

export const registerUser = async (
  userData: RegisterState,
  dispatch: Dispatch
) => {
  dispatch(loginStart());
  const auth = getAuth();
  try {
    const createUser = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    const db = getFirestore();
    const dbRef = doc(collection(db, 'users'), auth.currentUser?.uid);
    await setDoc(dbRef, {
      username: userData.username,
      email: userData.email,
    });
    if (auth.currentUser) {
      dispatch(
        loginSuccess({
          email: userData.email,
          id: auth.currentUser.uid,
          username: auth.currentUser.displayName,
        })
      );
    }
  } catch (error) {
    dispatch(loginFailure());
    console.log(error);
  }
};
