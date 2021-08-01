/* eslint-disable no-undef */
import firebase from 'firebase/app';
import 'firebase/analytics';

// Add the Firebase products that you want to use.
import 'firebase/auth';
import 'firebase/firestore';

const FirebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey || 'gg',
  authDomain: process.env.REACT_APP_authDomain || 'gg',
  projectId: process.env.REACT_APP_projectId || 'gg',
  storageBucket: process.env.REACT_APP_storageBucket || 'gg',
  messagingSenderId: process.env.REACT_APP_messagingSenderId || 'gg',
  appId: process.env.REACT_APP_appId || 'gg',
  measurementId: process.env.REACT_APP_measurementId || 'gg',
};

firebase.initializeApp(FirebaseConfig);
firebase.analytics();

export {firebase as firebaseApp};
