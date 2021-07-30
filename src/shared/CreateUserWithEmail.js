import {firebaseApp} from './FirebaseInit';

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
        'Error::CreateUserWithEmail::Failed to create User',
        errorCode,
        errorMessage,
      );
      throw errorMessage;
    });
}
