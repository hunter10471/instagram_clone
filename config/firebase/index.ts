import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { REACT_APP_FIREBASE_API_KEY } from '@env';

const firebaseConfig = {
  apiKey: 'AIzaSyC_cWsAsxRoNZI24KVQtfTq - Xly0jlcCB4',
  authDomain: 'insta-clone-b1312.firebaseapp.com',
  projectId: 'insta-clone-b1312',
  storageBucket: 'insta-clone-b1312.appspot.com',
  messagingSenderId: '28135239454',
  appId: '1:28135239454:web:6e63ef3b9c127751e9630f',
  measurementId: 'G-2R09GZX3JZ',
};

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
export {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore';
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
