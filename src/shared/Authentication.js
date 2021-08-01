import {firebaseApp} from './FirebaseInit';

// Function to create user with email and password
export async function createUser(email, password) {
  try {
    const userCredential = await firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password);

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
    const userCredential = await firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password);

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

export function setUserState(setUser) {
  firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('user exists');
    } else {
      console.log('user does not exists');
    }

    setUser(user);
  });
}

export async function signInwithGoogle() {
  const provider = new firebaseApp.auth.GoogleAuthProvider();
  try {
    const result = await firebaseApp.auth().signInWithPopup(provider);
    return result;
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
