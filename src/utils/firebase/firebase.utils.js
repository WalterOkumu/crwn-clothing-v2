import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, data) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  data.forEach((item) => {
    const docRef = doc(collectionRef, item.title.toLowerCase());
    batch.set(docRef, item);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');

  const myQuery = query(collectionRef);

  const querySnapshot = await getDocs(myQuery);

  const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
    const { title, items } = docSnapshot.data();

    accumulator[title.toLowerCase()] = items;

    return accumulator;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if (!userAuth) return false;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      throw new Error('Error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return false;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return false;

  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = async (callback) => onAuthStateChanged(auth, callback);
