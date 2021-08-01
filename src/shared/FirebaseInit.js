/* eslint-disable no-undef */
import firebase from 'firebase/app';
import 'firebase/analytics';

// Add the Firebase products that you want to use.
import 'firebase/auth';
import 'firebase/firestore';

const FirebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

firebase.initializeApp(FirebaseConfig);
firebase.analytics();

export {firebase as firebaseApp};
