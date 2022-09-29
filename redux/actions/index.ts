import { Dispatch } from 'redux';
import {
  collection,
  doc,
  getAuth,
  getDoc,
  getFirestore,
} from '../../config/firebase';
import { USER_STATE_CHANGE } from '../constants';

export const fetchUser = () => {
  const db = getFirestore();
  const auth = getAuth();
  const dbRef = doc(collection(db, 'users'), auth.currentUser?.uid);
  return async (dispatch: Dispatch) => {
    try {
      const user = await getDoc(dbRef);
      if (user.exists())
        dispatch({ type: USER_STATE_CHANGE, payload: user.data() });
    } catch (error) {
      console.log(error);
    }
  };
};
