import {firestore} from './FirebaseInit';

export async function setupUser(userId, username) {
  const data = await firestore.doc(`root/${userId}`).get();
  if (data.exists) {
    console.error('UserDatabase::User data already exists! Skipping');
    return;
  }

  try {
    firestore.collection('root').doc(userId).set({
      username: username,
    });
  } catch (e) {
    console.error('UserDatabase::Failed to setup user ', username);
    console.error('UserDatabase::', e);
  }
}
