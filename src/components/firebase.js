import firebase from 'firebase/firebase-app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyBeNRIlcGujeTIPtfgxTa8slYlsPwzGMxM',
  authDomain: 'slack-clone-db.firebaseapp.com',
  databaseURL: 'https://slack-clone-db.firebaseio.com',
  projectId: 'slack-clone-db',
  storageBucket: 'slack-clone-db.appspot.com',
  messagingSenderId: '472048163986',
  appId: '1:472048163986:web:c96df90c15720d4a995a4b'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
