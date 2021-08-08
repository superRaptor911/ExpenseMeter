import {firebaseApp, firebaseAuth} from './FirebaseInit';

// Function to create user with email and password
export async function createUser(email, password) {
  try {
    const userCredential = await firebaseAuth.createUserWithEmailAndPassword(
      email,
      password,
    );

    const user = userCredential.user;
    console.log('Created User with uid = ', user.uid);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(
      'Error::Auth::Failed to create User',
      errorCode,
      errorMessage,
    );
    throw errorMessage;
  }
}

// Function to sigin user with email and password
export async function signinUser(email, password) {
  try {
    const userCredential = await firebaseAuth.signInWithEmailAndPassword(
      email,
      password,
    );

    console.log(userCredential);
    const user = userCredential.user;
    console.log('Created User with uid = ', user.uid);
    return user;
  } catch (error) {
    /* handle error */
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(
      'Error::Auth::Failed to create User',
      errorCode,
      errorMessage,
    );
    throw errorMessage;
  }
}

export async function signInwithGoogle() {
  const provider = new firebaseApp.auth.GoogleAuthProvider();
  try {
    const result = await firebaseAuth.signInWithPopup(provider);
    console.log('signed in with google');
    return result.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    // const credential = error.credential;

    console.error(
      'Error::Authentication::Failed to auth with google signin for user',
      email,
    );
    console.error('Error::Authentication::', errorCode, errorMessage);

    throw errorMessage;
  }
}
