import firebase from '../Firebase';
import { collectionName } from '../utils/Config';

const randomId = Math.floor(Math.random() * 1e5);

const SaveFirestore = async (data, docKey) => {
  const collection = firebase.firestore().collection(collectionName);
  const doc = collection.doc(`${docKey}_${randomId}`);
  doc.set(data, { merge: true });
};

export { SaveFirestore };
