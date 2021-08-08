// Context to provide Current User
/* eslint-disable react/prop-types */
import React, {useContext, useEffect, useState} from 'react';
import {firebaseAuth} from '../shared/FirebaseInit';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        console.log('user exists');
      } else {
        console.log('user does not exists');
      }

      setCurrentUser(user);
      setLoaded(true);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {loaded && children}
    </AuthContext.Provider>
  );
};
