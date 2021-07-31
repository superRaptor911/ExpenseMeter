import {firebaseApp} from './FirebaseInit';

// Function to create user with email and password
export async function createUser(email, password) {
  firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('Created User with uid = ', user.uid);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(
        'Error::Auth::Failed to create User',
        errorCode,
        errorMessage,
      );
      throw errorMessage;
    });
}

// Function to sigin user with email and password
export async function signinUser(email, password) {
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log('Created User with uid = ', user.uid);
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(
        'Error::Auth::Failed to create User',
        errorCode,
        errorMessage,
      );
      throw errorMessage;
    });
}
