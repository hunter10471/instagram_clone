import {
  doc,
  getAuth,
  getDoc,
  getFirestore,
} from '../../../../config/firebase/index';

export const fetchCurrentUser = async () => {
  const auth = getAuth();
  const db = getFirestore();
  if (auth.currentUser) {
    const dbRef = doc(db, 'users', auth.currentUser.uid);
    try {
      const docSnap = await getDoc(dbRef);
      console.log(docSnap.data());
      return docSnap.data();
    } catch (error) {
      console.log(error);
    }
  }
  return { error: 'User not logged in.' };
};
