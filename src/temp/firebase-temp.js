import {firestore, firebaseApp} from '../shared/FirebaseInit';

export const createTestUser = () => {
  console.log('k?');
  firebaseApp
    .auth()
    .createUserWithEmailAndPassword(
      'raptosdadssr.ic2018@gmail.com',
      'killerkat69669',
    )
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log('success');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error('Error::firebaseTest::', errorCode, errorMessage);
    });
};

export const testFirestore = async () => {
  console.log('testing firestore');

  // try {
  //   const result = await firestore.doc('root/u0').get();
  //   console.log('got data');
  //   console.log(result.data());
  // } catch (e) {
  //   /* handle error */
  //   console.log('erro');
  //   console.error('Error::firebase-temp::', e);
  // }

  firestore
    .collection('root')
    .add({
      first: 'Alan',
      middle: 'Mathison',
      last: 'Turing',
      born: 1912,
    })
    .then(docRef => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(error => {
      console.error('Error adding document: ', error);
    });
};
